<br>
<br>
<br>
<p align="center">
    <img src="https://waavi.com/img/waavi_logo.4213ffb7.png" alt="WStorage by WAAVI" width="200"/>
    <br>
Vue WStorage
</p>

## Introduction

**Vue WStorage** is a library to manage localStorage of your browser.

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
  })
  ```

## Usage
  ``` js
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
  Vue.storage.clean('user')

  // Component use
  var vm = new Vue({
    methods: {
      someMethod () {
        let lsValue = this.$storage.get('someObject')
        this.$storage.set('someBoolean', true)
        this.$storage.remove('stringOne')
      }
    }
  })
  ```
## License
  MIT Licensed | Copyright © 2019-present Waavi Studio S.L.