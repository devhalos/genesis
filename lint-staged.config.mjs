import { execSync } from "node:child_process";

export default {
  "{*.ts,*.tsx,*.js,*.jsx}": (files) =>
    `nx affected:lint --files=${files.join(",")}`,
  "*.tf": () => "npm run infra:lint",
  "*.java": (files) => {
    console.info("files", files);

    const projs = execSync("npx nx show projects")
      .toString()
      .trim()
      .split("\n");

    const projects = projs
      .filter((project) =>
        files.some((file) => file.startsWith(`packages/${project}`)),
      )
      .map((project) => `packages/${project}`);

    console.info("projects", projects);

    if (projects.length) {
      return `npm run mvn -- -pl ${projects.join(",")} validate`;
    }

    return "";
  },
};
