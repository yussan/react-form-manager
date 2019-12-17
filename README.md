[![Build Status](https://travis-ci.org/yussan/react-form-manager.svg?branch=master)](https://travis-ci.org/yussan/react-form-manager)
[![npm version](https://img.shields.io/npm/v/@yussan/react-form-manager.svg?style=flat-square)](https://www.npmjs.com/package/@yussan/react-form-manager)


# @yussan/react-form-manager
Generate and validate React from based on props.

## Preview
**Code**

```
<Input 
  label='Your email'
  required={true}
  type='email'
  name='email'
  max={20}
  min={5}
  placeholder='please input your email'
  changeState={(obj) => this.setState(obj)}
  value={this.state.email}
  validation={this.state.email_validation || {}}
/>
```
**Preview**

Preview id kompetisi.id
![preview of Kompetisi Id](https://res.cloudinary.com/dhjkktmal/image/upload/c_scale,w_800/v1576557938/github/Screen_Shot_2019-12-17_at_11.43.46.jpg)

Preview in maugowes.com
![Preview in Mau Gowes](https://res.cloudinary.com/dhjkktmal/image/upload/c_scale,w_800/v1576557938/github/Screen_Shot_2019-12-17_at_11.44.19.jpg)

## Feature
- validation based on props
- 100% customizable css
- support standar http attributes

## Available at NPM
<a target="_blank" href="https://www.npmjs.com/package/@yussan/react-form-manager">React Form Validator at NPM</a>

**Instalation**
```
npm install @yussan/react-form-manager

```

## Documentations
Please follow [this link](https://github.com/yussan/react-form-manager/tree/master/docs)

## Contributions 

### Progress

**Github**
- If find some bug / request new features, just created new issues in   <a href="https://github.com/yussan/react-form-manager/issues">github issues link</a>
- If you are a developer, let's develop this module together, this module is open source licensed. Let fork and solve the problem

### Development 
**Dev builder**
We are using Webpack, <a href="https://webpack.js.org/" target="_blank">read more Webpack</a>

Build and watch source change
```
npm run build:example
```
And then open .html file inside `dist/example/*.html` on your favorite browser

### Production 
Build and release new version to NPM
```
npm publish
```

or just to build
```
npm run build
```


## Used By 
- [Kompetisi Id](https://kompetisi.id)
- [Mau Gowes](https://maugowes.com)
