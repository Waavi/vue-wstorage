
[![npm version](https://img.shields.io/npm/v/vue-wstorage.svg?style=popout-square)](https://www.npmjs.com/package/vue-wstorage)
[![npm downloads](https://img.shields.io/npm/dm/vue-wstorage.svg?style=popout-square)](https://www.npmjs.com/package/vue-wstorage)
[![GitHub stars](https://img.shields.io/github/stars/waavi/vue-wstorage.svg?style=popout-square)](https://github.com/waavi/vue-wstorage)
![Travis](https://travis-ci.com/Waavi/vue-wstorage.svg?token=Q9Sz1pTvqBgPz1SyHLk1&branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Waavi/vue-wstorage/badge.svg?branch=master)](https://coveralls.io/github/Waavi/vue-wstorage?branch=master)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=popout-square)](https://github.com/waavi/vue-wstorage/raw/master/license.txt)

<br>
<br>
<br>
<p align="center">
  <img src="https://waavi.com/img/waavi_logo.4213ffb7.png" alt="WStorage by WAAVI" width="200"/>
<br>
</p>

## Introduction

**Vue WStorage** is a library to manage localStorage and sessionStorage of your browser.

## Install

  ``` bash
  npm install vue-wstorage --save
  ```
  or
  ``` bash
  yarn add vue-wstorage
  ```

## Install

  ``` js
  import VueWStorage from 'vue-wstorage'

  Vue.use(VueWStorage)
  // Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
  Vue.use(VueWStorage, {
    name: 'ls',
    key: 'app:0.0.1',
    storage: 'local', // Select session|local storage. By default it's 'local'
  })
  ```

## Usage

  - Global instance

  ```js
  // Use localStorage from object
  Vue.storage.set('user', { name: 'Foo', surname: 'Demo' })
  Vue.storage.get('user')

  // Get all values
  Vue.storage.get()
  // Fallback value if nothing found in localStorage
  Vue.storage.get('propertyThatNotExists', 'fallbackValue') // Will return 'fallbackValue' string

  // Remove value
  Vue.storage.remove('user')
  // Remove all values
  Vue.storage.clean()
  ```

  - Local instance

  ```js
  import VueWStorage from 'vue-wstorage'

  const storage = VueWStorage.initalize()
  storage.set('user', { name: 'Foo'})
  storage.get('user')

  storage.local.set('todos', [])
  storage.session.set('step', 1)
  ```

  - Component

  ``` js
  var vm = new Vue({
    methods: {
      handleUser () {
        this.$storage.set('loading', true)
        this.$storage.get('user')
        this.$storage.remove('loading')
      }
    }
  })
  ```
## License
  MIT Licensed | Copyright © 2019-present Waavi Studio S.L.