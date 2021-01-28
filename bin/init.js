#!/usr/bin/env node
const fs = require("fs");

var fileNames = [".eslintrc", ".stylelintrc", ".prettierrc"];
for (let i = 0; i < fileNames.length; i++) {
  cp(fileNames[i]);
}
function cp(file) {
  if ("./" + file) {
    fs.rename("./" + file, "./" + file + "-backup", () => {});
  }
  fs.copyFile("./node_modules/gylint/src/" + file, "./" + file, () => {});
}
