![](/public/icon48.png)
# Chrome Extension Boilerplate (with React + TypeScript)

Quickly build chrome extensions using TypeScript and React. 

## 1. What's included

This repository is a fork of [chrome-extension-react-typescript-boilerplate](https://github.com/martellaj/chrome-extension-react-typescript-boilerplate) with some updates

- React with Typescript
- Sass + Sass module
- Popup with basic layout (header, body, footer)
- Multilingual `public/_locales` (see [i18n](https://developer.chrome.com/docs/extensions/reference/i18n/))
- `public` directory (will copy when building, so you don't need to touch the build directory)
- `content_scripts` config (interact directly with current page's Document)

## 2. Building

_Use `yarn` or `npm`_

1. Clone repo
2. Install dependencies: `yarn`
3. Build project for development: `yarn dev` to compile once (output will be in `/build` directory)
4. Run project with watch: `yarn watch` to run the dev task in watch mode

**Build for production**

Run `yarn build` to build a production (minified) version. Output will be in `/dist` directory

## 3. Installation

1.  Complete the steps to build the project above
2.  Go to [_chrome://extensions_](chrome://extensions) in Google Chrome
3.  With the developer mode checkbox ticked, click **Load unpacked extension...** and select the _dist_ folder from this repo
