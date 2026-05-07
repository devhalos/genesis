import { execSync } from "node:child_process";

const projects = execSync("npx nx show projects").toString().trim().split("\n");
const baseDir = process.argv[2];
const basePackage = projects.find((project) =>
  baseDir.startsWith(`packages/${project}`),
);

if (basePackage) {
  execSync(`npx nx run ${basePackage}:lint:fix`);
}
