require("dotenv").config();
import { resolve } from "path";
import fs, { copyFileSync } from "fs";
import { getWorkspacePackages } from "../utils/build-utils";
import { Project } from "@pnpm/find-workspace-packages";
const packageJsonPath = resolve(
  __dirname,
  "../../../packages/ve-com/package.json"
);
const newPath = resolve(__dirname, "../../../lib/package.json");
export const cpPackageJson = async () => {
  if (fs.existsSync(packageJsonPath)) {
    const pkgs = Object.fromEntries(
      (await getWorkspacePackages()).map((pkg) => [pkg.manifest.name!, pkg])
    );
    try {
      writeVersion(pkgs["ve-com"]);
    } catch (e) {}
  }
};

const writeVersion = async (project: Project) => {
  const version = process.env.TAG_VERSION;

  await project.writeProjectManifest({
    ...project.manifest,
    version,
    name: "ve-com",
    // gitHead,
  } as any);
  copyFileSync(packageJsonPath, newPath);
};
