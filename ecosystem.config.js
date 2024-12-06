export default {
  apps: [
    {
      name: "the-vizion-bot",
      interpreter_args: "--env-file=.env",
      script: "./dist/index.js",
    },
  ],
};
