import Storage from './Storage'

export default class WStorage extends Storage {
    /**
    * WStorage constructor
    */
    constructor (props) {
        super(props)

        this.local = new Storage({ ...props, storage: 'local' })
        this.session = new Storage({ ...props, storage: 'session' })
    }

    /**
    * Local store
    * @returns {*}
    * @public
    */
    local () {
        return this.session
    }

    /**
    * Local store
    * @returns {*}
    * @public
    */
    session () {
        return this.local
    }
}
