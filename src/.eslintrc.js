module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  plugins: ['html'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // 末尾分号
    semi: ['error', 'never'],
    // 仅允许console.log|warn|error
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    // 最多2个空行
    'no-multiple-empty-lines': ['error', { max: 2 }],
    // 允许变量重复
    'no-shadow': ['error', { allow: ['done', 'url'] }],
    // 箭头函数仅在必要时使用()
    'arrow-parens': ['error', 'as-needed'],
    // iife使用()()的形式
    'wrap-iife': ['error', 'inside'],
    // 尾随逗号
    'comma-dangle': ['error', 'only-multiline'],
    // 循环中允许使用 ++|--
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 换行默认使用LF
    'linebreak-style': ['error', 'unix'],
  },
}
