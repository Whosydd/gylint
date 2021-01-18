## 说明

如果你和我一样懒，请使用这个包。。。

#### **依赖：**

```json
  "dependencies": {
    "eslint": "^7.18.0",
    "prettier-config-gy": "^0.1.8",
    "stylelint-config-gy": "^0.1.7"
  },
```

<br>

[![npm](https://img.shields.io/npm/v/stylelint-config-gy?label=stylelint-cofig-gy)](https://www.npmjs.com/package/stylelint-config-gy)

[![npm](https://img.shields.io/npm/v/prettier-config-gy?label=prettier-cofig-gy)](https://www.npmjs.com/package/prettier-config-gy)

<br>

#### **Install**:

```bash
$ npm i -D gylint
```

<br>

#### **Edit `package.json`**:

```json
{
  // ...
  "prettier": "prettier-config-gy",
  "stylelint": {
    "extends": [
      "stylelint-config-gy",
      "stylelint-config-prettier",
      "stylelint-config-standard",
      "stylelint-config-recess-order"
    ]
  },
}
```

<br>

#### vscode用户代码片段：

```json
// 将以下代码加入到/snippets/jsonc.json
{
"gylint": {
    "prefix": "gylint",
    "body": [
      "\"prettier\": \"prettier-config-gy\",",
      "\"stylelint\": {",
      "\t\"extends\": [\"stylelint-config-standard\", \"stylelint-config-recess-order\", \"stylelint-config-prettier\", \"stylelint-config-gy\"]",
      "},"
    ],
    "description": "prettier&stylelint config for package.json"
  }
}
```

