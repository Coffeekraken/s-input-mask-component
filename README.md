# Coffeekraken s-input-mask-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-input-mask-component">
		<img src="https://img.shields.io/travis/coffeekraken/s-input-mask-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-input-mask-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-input-mask-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-input-mask-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-input-mask-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-input-mask-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-input-mask-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-input-mask-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-input-mask-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-input-mask-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-input-mask-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

Provide a simple efficient webcomponent wrapper around the amazing [imaskjs](https://github.com/uNmAnNeR/imaskjs) library

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-input-mask-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Javascript API](doc/js)
5. [Register new masks](#readme-new-masks)
6. [Default masks](#readme-default-masks)
7. [Sugar Web Components Documentation](https://github.com/coffeekraken/sugar/blob/master/doc/webcomponent.md)
8. [Browsers support](#readme-browsers-support)
9. [Code linting](#readme-code-linting)
10. [Contribute](#readme-contribute)
11. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
12. [Licence](#readme-license)

<a name="readme-install"></a>
## Install

```
npm install coffeekraken-s-input-mask-component --save
```

<a name="readme-get-started"></a>
## Get Started

First, import the component into your javascript file like so:

```js
import SInputMaskComponent from 'coffeekraken-s-input-mask-component'
```

Then simply use it inside your html like so:

```html
<input type="text" name="cool-input" required>
<s-input-mask for="cool-input" mask="(0) 000 000 000"></s-input-mask>
```

<a name="readme-new-masks"></a>
## Register new masks

To register a new named mask, here's how to do it:

```js
import SInputMaskComponent from 'coffeekraken-s-input-mask-component'
SInputMaskComponent.registerMask('my-cool-mask', {
  // some imaskjs options here...
  mask: '(0) 000 000 000',
  lazy: false
  // etc...
})
```

> See [imaskjs](https://github.com/uNmAnNeR/imaskjs) documentation

Then simply use it like so:

```html
<input type="text" name="cool-input" required />
<s-input-mask for="cool-input" mask="my-cool-mask"></s-input-mask>
```

<a name="readme-default-masks"></a>
## Default available masks

Their's some default masks available. Here's the list:

- `date:yyyy.mm.dd`
- `date:yyyy-mm-dd`
- `date:yyyy/mm/dd`
- `date:dd.mm.yyyy`
- `date:dd-mm-yyyy`
- `date:dd/mm/yyyy`
- `date:mm.dd.yyyy`
- `date:mm-dd-yyyy`
- `date:mm/dd/yyyy`
- `credit-card:number`
- `credit-card:code`
- `credit-card:date`

<a id="readme-browsers-support"></a>
## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| --------- | --------- | --------- | --------- |
| IE11+ | last 2 versions| last 2 versions| last 2 versions

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-code-linting"></a>
##  Code linting

This package uses some code linting rules. Here's the list:

1. [StandardJS](https://standardjs.com/) for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>
## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>
## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.  

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>
## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
