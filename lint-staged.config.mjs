import path from "node:path";

export default {
  "{*.ts,*.tsx,*.js,*.jsx}": (files) =>
    `nx affected:lint --files=${files.join(",")}`,
  "*.tf": () => "npm run infra:lint",
  "*.java": async (files) =>
    `nx affected -t lint:fix --exclude '*,!tag:java' -DspotlessFiles=${files.map((file) => `${path.resolve(import.meta.dirname, file)}`).join(",")}`,
};
