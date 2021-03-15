# Changelog

稍微记录下更新。。。
<br>

## 0.4.4

### 更改时间戳格式

<br>

## 0.4.3

### 查看 eslint 文档时发现已经弃用 .eslintrc ，为了方便注释，所以全部改用 js 文件

<br>

## 0.4.2

#### 删除 json 中的注释

### [.eslintrc]

```json
  "rules": {
    // 末尾分号
    "semi": ["error", "never"],
    // 仅允许console.log|warn|error
    "no-console": ["error", { "allow": ["warn", "error", "log"] }],
    // 最多2个空行
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    // 允许变量重复
    "no-shadow": ["error", { "allow": ["done", "url"] }],
    // 箭头函数仅在必要时使用()
    "arrow-parens": ["error", "as-needed"],
    // iife使用()()的形式
    "wrap-iife": ["error", "inside"],
    // 尾随逗号
    "comma-dangle": ["error", "only-multiline"],
    // 循环中允许使用 ++|--
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    // 换行默认使用LF
    "linebreak-style": ["error", "unix"]
  }
```

### [.prettierrc]

```json
{
  // 代码宽度建议不超过100字符
  "printWidth": 100,
  // tab缩进2个空格
  "tabWidth": 2,
  // 末尾分号
  "semi": false,
  // 单引号
  "singleQuote": true,
  // jsx中使用单引号
  "jsxSingleQuote": true,
  // 尾随逗号
  "trailingComma": "es5",
  // 箭头函数仅在必要时使用()
  "arrowParens": "avoid",
  // html空格敏感度
  "htmlWhitespaceSensitivity": "css"
}
```

<br>

## 0.4.1

### [.eslintrc]

- 改用 `airbnb-base` 规范代码
- 删除 `eslint-config-prettier`
- 删除 `eslint-plugin-prettier`
- 添加常用规则（附说明）

### [.prettierrc]

- 添加常用规则（附说明）

<br>

## 0.4.0

### [All]

- 优化代码

### [.eslintrc]

- 添加 html 中的 js 支持

<br>

## 0.3.4

### [All]

- 添加相关的 ignore 配置文件
- 优化代码（原有配置文件会统一备份到根目录的 gylint-backup 文件夹内）

<br>

### [.stylelintrc]

##### Removed

- 删除一些与 standard 重复的规则，仅保留自定义规则

##### Added

- 添加插件**stylelint-scss**以及**scss**相关规则
