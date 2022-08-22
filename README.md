# Runo - Free HTML Blog Template

# Setup

## Installation

1. Extract the release archive to a new directory, rename it to your project name and browse the directory.
2. Install all dependencies using `npm` *clean install* command. 

```sh 
$ npm ci
```

> More on the clean install npm command can be read here [`npm ci`](https://docs.npmjs.com/cli/ci.html)

> You can still use `npm install` in cases the `npm ci` raises system error due to specific platform incompatibilities.

# Development

## Assets Source

* **SASS/PostCSS** files are located under `src/scss/`
* **JavaScript** files with support of latest ECMAScript _ES6 / ECMAScript 2016(ES7)/ etc_ files are located under `src/js/`
* **Image** files are located under `src/images/`
* **Font** files are located under `src/fonts/`
* **HTML** files are located under `src/`
  * It will **automatically** build **all HTML files** placed under `src/` directory, no need to manually configure each template anymore!

## Build Assets

### One time build assets for development

```sh
$ npm run build
```

### Start a development server - reloading automatically after each file change.

```sh
$ npm run dev
```

### Build Assets

Optimize assets for production by:

```sh
$ npm run production
```

## Get Built Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/dist/js/`
* _Images_ are located under `/dist/images/`
  * Images part of the _design_ (_usually referenced in the CSS_) are located under `/dist/images/design/`
  * Images part of the _content_ (_usually referenced via `<img>` tags_) are located under `/dist/images/content/`
* _Fonts_ are located under `/dist/fonts/`
* _HTML_ files are located under `/dist/`
