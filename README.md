# Vue WStorage

LocalStorage plugin.

## Install

  ``` bash
  npm install vue-wstorage --save
  ```
  or
  ``` bash
  bower install vue-wstorage
  ```

## Usage
  ``` js
  import VueLocalStorage from 'vue-wstorage'

  Vue.use(VueLocalStorage)
  // Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
  Vue.use(VueLocalStorage, {
    name: 'ls',
    key: 'app:0.0.1',
  })

  // Use localStorage from Vue object
  Vue.localStorage.set('someNumber', 123)
  Vue.localStorage.get('someNumber')

  // Fallback value if nothing found in localStorage
  Vue.localStorage.get('propertyThatNotExists', 'fallbackValue') // Will return 'fallbackValue' string


  //register localStorage variables and adds computed variables to local components
  //to be used like regular computeds that are stored in the localstorage
  var vm = new Vue({
    methods: {
      someMethod () {
        let lsValue = this.$localStorage.get('someObject')
        this.$localStorage.set('someBoolean', true)
        this.$localStorage.remove('stringOne')
      }
    }
  })
  ```
## License
  [MIT]