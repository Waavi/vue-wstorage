import { STORAGES } from './utils'

export default class Storage {
    /**
    * Storage constructor
    */
    constructor ({
        name, key, storage, isSupported,
    } = {}) {
        this.key = key
        this.isSupported = isSupported
        this.storage = storage

        this.store = this.storageInstance()
    }

    /**
    * Private method to get store instance to used. Select between localStorage or sessionStorage
    *
    * @returns {any}
    * @private
    */
    storageInstance () {
        const storage = STORAGES[this.storage] || STORAGES.default
        return window[storage]
    }

    /**
    * Private method to set a value in store giving respect to the key.
    *
    * @param {string} keye
    * @param {*} value
    * @private
    */
    lsSet (key, value) {
        const data = JSON.stringify({
            ...this.lsGet(),
            [key]: value,
        })

        this.store.setItem(this.key, data)
    }

    /**
    * Private method to get a value in store giving respect to the key.
    *
    * @returns {any}
    * @private
    */
    lsGet () {
        return JSON.parse(this.store[this.key] || '{}')
    }

    /**
    * Get a value of store
    *
    * @param {String} key
    * @param {*} defaultValue
    * @returns {*}
    * @public
    */
    get (key, defaultValue) {
        if (!this.isSupported) {
            return null
        }

        const data = this.lsGet()
        return data[key] !== undefined ? data[key] : defaultValue
    }

    /**
    * Set a value in store
    *
    * @param {String} key
    * @param {*} value
    * @returns {*}
    * @public
    */
    set (key, value) {
        if (!this.isSupported) {
            return null
        }

        this.lsSet(key, value)
        return value
    }

    /**
    * Remove a value from store
    *
    * @param {String} key
    * @returns {*}
    * @public
    */
    remove (key) {
        if (!this.isSupported) {
            return null
        }

        return this.set(key)
    }

    /**
    * Clean store
    * @returns {*}
    * @public
    */
    clean () {
        if (!this.isSupported) {
            return null
        }

        return this.store.setItem(this.key, '')
    }
}
