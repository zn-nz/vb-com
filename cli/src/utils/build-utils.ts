import { findWorkspacePackages } from "@pnpm/find-workspace-packages";
import { resolve } from "path";

export const getWorkspacePackages = () =>
  findWorkspacePackages(resolve(__dirname, "..", "..", ".."));
