import { program } from "commander";
import { createComponent } from "./command/create-component";
import { cpPackageJson } from "./command/create-package";
export const mainEntry = () => {
  program.version(require("../package").version).usage("<command> [arguments]");
  program
    .command("create")
    .description("create a new component")
    .alias("c")
    .action(createComponent);

  program
    .command("package")
    .description("cp package")
    .alias("c")
    .action(cpPackageJson);
  program.parse(process.argv);
  if (!program.args.length) {
    program.help();
  }
};
