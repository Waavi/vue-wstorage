import Storage from './Storage'

export default class WStorage extends Storage {
    constructor (props) {
        super(props)

        this.localStore = new Storage({ ...props, storage: 'local' })
        this.sessionStore = new Storage({ ...props, storage: 'session' })
    }

    /**
    * Local store
    * @returns {*}
    * @public
    */
    local () {
        return this.localStore
    }

    /**
    * Session store
    * @returns {*}
    * @public
    */
    session () {
        return this.sessionStore
    }
}
