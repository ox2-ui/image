# @ox2/image
![NPM version](https://img.shields.io/badge/npm-private-orange.svg?style=flat)
<!-- ![NPM version](https://img.shields.io/npm/v/@ox2/image.svg?style=flat) -->

React image component that can be used for cordova app to fetch local/offline images first and use remote url as a fallback.

## Installation
Install using [npm](http://npmjs.com):
```sh
npm install @ox2/image --save
```
Install using [yarn](http://yarnpkg.com):
```sh
yarn add @ox2/image
```

## Usage
```js
import ImageOffline from '@ox2/image/ImageOffline';

<ImageOffline remoteLink={remoteLinkUrl} localImg={localImgUrl} />


```

## Change Log
Changes are tracked in the [CHANGELOG.md](https://github.com/ox2/image/blob/master/CHANGELOG.md)

## License
[MIT](https://github.com/ox2/image/blob/master/LICENSE)
