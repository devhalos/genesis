import { execSync } from "node:child_process";

export default {
  "{*.ts,*.tsx,*.js,*.jsx}": (files) =>
    `nx affected:lint --files=${files.join(",")}`,
  "*.tf": () => "npm run infra:lint",
  // "*.java": (files) => {
  //   const projects = execSync("npx nx show projects")
  //     .toString()
  //     .trim()
  //     .split("\n")
  //     .filter((project) =>
  //       files.some((file) => file.startsWith(`packages/${project}`)),
  //     )
  //     .map((project) => `packages/${project}`);
  //
  //   if (projects.length) {
  //     return `npm run mvn -- -pl ${projects.join(",")} spotless:apply`;
  //   }
  //
  //   return "";
  // },
  "*.java": () => `nx affected -t lint:fix --exclude '*,!tag:java'`
};
