/* eslint-disable no-param-reassign */
import { WStorage } from './src'

export default {
    /**
     * Install vue-wstorage plugin
     *
     * @param {Vue} Vue
     * @param {Object} options
     */
    install: (Vue, options = {}) => {
        if (typeof process !== 'undefined' && (process.server || process.SERVER_BUILD || (process.env && process.env.VUE_ENV === 'server'))) return

        const { name, key, storage } = options
        const props = {
            name: name || 'storage',
            key: key || 'WStorage',
            storage: storage || 'local',
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
    /**
     * Create vue-wstorage instance
     *
     * @param {Object} props
     */
    initialize: props => new WStorage(props),
}
