# JavaScript style guide of hwxyz

> Note: 推荐使用局部安装的`eslint`进行校验，如果使用全局安装的`eslint`进行校验，请手动全局安装依赖`eslint-plugin-react`

## 安装

```
npm i -D eslint eslint-config-hwxyz
```

## 支持环境

- `browser`
- `node`
- `es6`

## 使用

`.eslintrc`

`JS` 项目

```
{
  "extends": "hwxyz"
}
```

`React` 项目

```
{
  "extends": "hwxyz/react"
}
```

`hwxyz/react`继承了`hwxyz`的配置并添加了`React`相关规则
