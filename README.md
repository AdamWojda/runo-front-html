# Runo - Free HTML Blog Template

# Setup

## Installation

1. Choose and download the latest template release from [List of Releases](https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases).
2. Extract the release archive to a new directory, rename it to your project name and browse the directory.
3. Install all dependencies using `npm` *clean install* command. 

```sh 
$ npm ci
```

> More on the clean install npm command can be read here [`npm ci`](https://docs.npmjs.com/cli/ci.html)

> You can still use `npm install` in cases the `npm ci` raises system error due to specific platform incompatibilities.

## Define Package Metadata

* Amend `package.json` file and optionally specify:
  * `name` - Name of your project. A name can be optionally prefixed by a scope, e.g. `@myorg/mypackage`.
  * `version` - Specify and maintain a version number indicator for your project code.
  * `author` - Your organisation or just yourself. You can also specify [`contributors`](https://docs.npmjs.com/files/package.json#people-fields-author-contributors).
  * `description` - Short description of your project.
  * `keywords` - Put keywords in it. It’s an array of strings.
  * `repository` - Specify the place where your code lives.
  * `license` - Announce your code license, figure out the license from [Choose an Open Source License](https://choosealicense.com) .
  * `browserslist` - Specify the supported browsers versions - you can refer to [full list](https://github.com/browserslist/browserslist#full-list) of availalbe options.

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
