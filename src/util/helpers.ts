import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import type { Predicate } from "../types/index.js";

/**
 * Loads all the structures from the provided directory path.
 *
 * @param path - The directory path to load the structures from.
 * @param predicate - The predicate to make sure the structure is valid.
 */
export async function loadStructures<Type>(path: string, predicate: Predicate<Type>): Promise<Type[]> {
  const structures: Type[] = [];

  const folderStats = await stat(path);

  if (!folderStats.isDirectory()) {
    throw new Error(`The provided path: "${path}" is not a directory`);
  }

  const folders = await readdir(path);

  for (const folder of folders) {
    const filesPath = join(path, folder);

    const files = await readdir(filesPath).then(files => files.filter(file => file.endsWith(".js")));

    for (const file of files) {
      const filePath = join(filesPath, file);

      const structure = await import(filePath).then(module => module.default);

      if (!predicate(structure)) {
        console.warn(`The structure: "${structure}" is not valid, skipping...`);

        continue;
      }

      structures.push(structure);
    }
  }

  return structures;
}
