/* eslint-disable no-param-reassign */
import { WStorage } from './src'

export default {
    /**
   * Install vue-local-storage plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */
    install: (Vue, options = {}) => {
        if (typeof process !== 'undefined' && (process.server || process.SERVER_BUILD || (process.env && process.env.VUE_ENV === 'server'))) return
        debugger
        const { name, key } = options
        const props = {
            name: name || 'localStorage',
            key: key || 'WStorage',
            isSupported: true,
        }

        try {
            const test = 'vue-localstorage-test'

            window.localStorage.setItem(test, test)
            window.localStorage.removeItem(test)
        } catch (e) {
            props.isSupported = false
            console.error('Local storage is not supported')
        }

        Vue[props.name] = new WStorage(props)
        Vue.prototype[`$${props.name}`] = new WStorage(props)
    },
}
