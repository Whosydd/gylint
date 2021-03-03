'use strict'

const fs = require('fs')
const backupPath = './gylint-backup/'
const ran = Date.now().toString()
// 获取所有配置文件，并保存到fileList中
fs.readdir(`${__dirname}/src`, (err, fileList) => {
  // 判断是否在项目根目录
  if (fs.existsSync('./node_modules/gylint')) {
    // 判断根目录是否存在相关配置文件
    fileList.forEach((file) => {
      // 备份已存在文件
      if (fs.existsSync(file)) {
        if (!fs.existsSync(backupPath)) {
          fs.mkdirSync(backupPath)
        }
        // 将根目录中的相关文件移动到gylint-backup文件夹中
        fs.renameSync(file, `${backupPath}/${file}-${ran}`)
      }
      // 复制文件
      fs.copyFileSync(`${__dirname}/src/${file}`, file)
    })
    console.log('\n配置文件已创建！请在项目根目录查看~')
    console.log(fileList)
    if (fs.existsSync(backupPath)) {
      console.log('你可以在 ./gylint-backup/ 中找到相关配置文件的备份~')
    }
    console.log('\n')
  } else {
    console.log('\nWARNING: 请定位到项目根目录执行代码！\n')
  }
})