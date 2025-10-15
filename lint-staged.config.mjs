export default {
  "{*.ts,*.tsx,*.js,*.jsx}": (files) =>
    `nx affected:lint --files=${files.join(",")}`,
};
