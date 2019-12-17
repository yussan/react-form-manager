[![Build Status](https://travis-ci.org/idmore/react-form-master.svg?branch=master)](https://travis-ci.org/idmore/react-form-master)
[![npm version](https://img.shields.io/npm/v/react-form-master.svg?style=flat-square)](https://www.npmjs.com/package/@yussan/react-form-manager)


# [work in progress] react-form-master
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
**View**

![preview of form-validator](https://lh3.googleusercontent.com/qVPg81DI-W_NPPASH3Ms843f38rrK5IWP9Bmvdj0yDSFEUwcNHIqRHoEYF5MHaWR4Bne1-n36WSx8nVei_O8qFRi6SqyZ-RqR3GbRB3NSvd6ku7IACjzs6OerRFeUjXk-xTzXXwHpxC5zvwXulUmpEi6UDIEqOIEr0A4yEroSBjRPT5MsXAs5aNiaaNTQdn4WXXdig6OTtbSDATjMom4JU4UK46WJutgfHhciDQ-n4vWAv6dwzEflAHagcw9s9AH8JgKY9_qSt7V-QCFl5-yIdpbBhoB24I2J8Bx-Uf6APyvnqZqmcvMpVNLX_-0Zze41XN2NJaVgvGiiUVGt7nkNxMSHAIZMvhO_wIS3ihu9gRC08wI8hbrgQYrj58ClwG6sxE64ROpRKN4IanKFaYTWh5Q7Rv-oS-c7YFAiU5BglzL8Z_Nq0mfFsnBVArrklkyLywz--uvvJHxfSJ3ak8p3BQFmDJ6_7VNYDPdqEwH1UE0ntWPbyHVJIS7wTqTvZ4pCCZ7FZ81DbjhoxYpInsHvPpKYgJ8SJtthz1yjY_fN_onURaevf_rAdWycPub8jnaLG24YcYZ=w1532-h682)

## Feature
- validation based on props
- 100% customizable css
- support standar http attributes

## Available at NPM
<a target="_blank" href="https://www.npmjs.com/package/idmore-react-form-validator">Id More React Form Validator at NPM</a>

**Instalation**
```
npm install idmore-react-form-validator

```

## Documentations
Please follow [this link](https://github.com/idmore/idmore-react-form-validator/blob/master/docs/index.md)

## Contributions 

### Progress

**trello**
<a target="_blank" href="https://trello.com/b/sD2C5Gh3">https://trello.com/b/sD2C5Gh3</a>

**github**
- If find some bug / request new features, just created new issues in   <a href="https://github.com/idmore/idmore-react-form-validator/issues">github issues link</a>
- If you are a developer, let's develop this module together, this module is open source licensed. Let fork and solve the problem

### Development 
**dev builder**
We are using prepack, <a href="https://prepack.io/" target="_blank">read more Prepack</a>
Build and watch source change
```
npm run dev:watch
```
or just to build 
```
npm run dev:build
``` 

### Production 
Build and release new version to NPM
```
npm publish
```

or just to build
```
npm run prod:build
```



