#!/usr/bin/env node
"use strict";

const fs = require("fs");

var fileNames = [
  ".eslintrc",
  ".eslintignore",
  ".prettierrc",
  ".prettierignore",
  ".stylelintrc",
  ".stylelintignore",
];
var fileList = [];
var fileBackupList = [];
if (fs.existsSync("./node_modules/gylint")) {
  for (let i = 0; i < fileNames.length; i++) {
    cp(fileNames[i], "./node_modules/gylint/src/", "./");
  }
  console.log("\n配置文件已创建！请在项目根目录查看~\n");
  console.log(fileList);
  console.log("\n");

  for (let i = 0; i < fileBackupList.length; i++) {
    backup(fileBackupList[i], "./", "./gylint-backup/");
  }

  if (fs.existsSync("./gylint-backup/")) {
    for (let i = 0; i < fileBackupList.length; i++) {
      if (fs.existsSync("./gylint-backup/" + fileBackupList[i])) {
        fs.rename(
          "./gylint-backup/" + fileBackupList[i],
          "./gylint-backup/" + fileList[i],
          () => {}
        );
      }
    }
    console.log(
      "另外，你可以在项目根目录的gylint-backup文件夹内找到之前已存在的配置文件\n"
    );
  }
} else {
  console.log("\nWARNING: 请定位到项目根目录执行代码！\n");
}

function cp(file, src, path) {
  if (fs.existsSync(path + file)) {
    fs.rename(path + file, path + file + "-backup", () => {});
    fileBackupList.push(file + "-backup");
  }
  fs.copyFile(src + file, path + file, () => {});
  fileList.push("./" + file);
}

function backup(file, src, path) {
  if (fs.existsSync(src + file)) {
    if (!fs.existsSync(path)) {
      fs.mkdir(path, () => {});
    }
    fs.copyFile(src + file, path + file, () => {});
    fs.rmSync(src + file);
  }
}
