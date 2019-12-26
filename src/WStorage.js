/* eslint-disable class-methods-use-this */
export default class WStorage {
    /**
    * WStorage constructor
    */
    constructor ({ name, key, isSupported } = {}) {
        this.key = key
        this.isSupported = isSupported
    }

    /**
    * Set a value to localStorage giving respect to the key.
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

        window.localStorage.setItem(this.key, data)
    }

    /**
    * Get value from localStorage giving respect to the key.
    *
    * @returns {any}
    * @private
    */
    lsGet () {
        return JSON.parse(window.localStorage[this.key] || '{}')
    }

    /**
    * Get value from localStorage
    *
    * @param {String} key
    * @param {*} defaultValue
    * @returns {*}
    */
    get (key, defaultValue = null) {
        if (!this.isSupported) {
            return null
        }

        const data = this.lsGet()

        if (data[key]) return data[key]
        return defaultValue !== null ? defaultValue : null
    }

    /**
    * Set localStorage value
    *
    * @param {String} key
    * @param {*} value
    * @returns {*}
    */
    set (key, value) {
        if (!this.isSupported) {
            return null
        }

        this.lsSet(key, value)
        return value
    }

    /**
    * Remove value from localStorage
    *
    * @param {String} key
    */
    remove (key) {
        if (!this.isSupported) {
            return null
        }

        const data = this.lsGet()
        delete data[key]
        return window.localStorage.setItem(this.key, data)
    }
}
