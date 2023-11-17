console.log("Nothing here");

// const esbuild = require("esbuild");
// async function execute() {
//   let ctx = await esbuild.context({
//     entryPoints: ["./src/index.ts"],
//     outdir: "./dist",
//     platform: "node",
//     format: "cjs",
//     bundle: false,
//     minify: false,
//   });
//   await ctx.watch();
//   console.log("Watching...");
// }
// execute();

// require("esbuild")
//   .context({
//     entryPoints: ["./src/index.ts"],
//     outdir: "./dist",
//     platform: "node",
//     format: "cjs",
//     bundle: false,
//     minify: false,
//   })
//   .then((ctx) => {
//     ctx.watch();
//   });
