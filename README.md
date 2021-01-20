## 说明

<br>

如果你和我一样懒，请使用这个包。。。

<br>

### Installation

```bash
$ npm i -D gylint
```

<br>

### Usage

```json
// .eslintrc
{
  "extends": ["plugin:prettier/recommended"],
}

// -------------------------------------------------

// package.json
{
  // ...
  "prettier": {
    "printWidth": 100,
    "singleQuote": true,
    "semi": false
  },
  "stylelint": {
    "extends": [
      "stylelint-config-standard",
      "stylelint-config-recess-order",
      "stylelint-config-prettier",
      "stylelint-config-gy"
    ]
  },
}

// -------------------------------------------------

// vscode创建用户代码片段（添加到jsonc.json）
{
"gylint": {
    "prefix": "gylint",
    "body": [
      "\"prettier\": {",
      "\t\"printWidth\": 100,",
      "\t\"singleQuote\": true,",
      "\t\"semi\": false",
      "},",
      "\"stylelint\": {",
      "\t\"extends\": [",
      "\t\t\"stylelint-config-standard\",",
      "\t\t\"stylelint-config-recess-order\",",
      "\t\t\"stylelint-config-prettier\",",
      "\t\t\"stylelint-config-gy\"",
      "\t]",
      "},"
    ],
    "description": "prettier&stylelint config for package.json"
  }
}
```

<br>