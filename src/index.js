/* eslint-disable no-param-reassign */
import WStorage from './WStorage'

const defaultProps = {
    name: 'storage',
    key: 'wstorage',
    storage: 'local',
    isSupported: true,
}

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
            ...defaultProps,
            name: name || defaultProps.name,
            key: key || defaultProps.key,
            storage: storage || defaultProps.storage,
        }

        try {
            const test = 'vue-wstorage-test'
            window.localStorage.setItem(test, test)
            window.localStorage.removeItem(test)
        } catch (e) {
            props.isSupported = false
            console.error('Local or Session storage is not supported')
        }

        Vue[props.name] = new WStorage(props)
        Vue.prototype[`$${props.name}`] = new WStorage(props)
    },
    /**
     * Create vue-wstorage instance
     *
     * @param {Object} props
     */
    initialize: (props = {}) => new WStorage({ ...defaultProps, ...props }),
}
