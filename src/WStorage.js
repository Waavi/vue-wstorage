import Storage from './Storage'

export default class WStorage extends Storage {
    constructor (props) {
        super(props)

        this.local = new Storage({ ...props, storage: 'local' })
        this.session = new Storage({ ...props, storage: 'session' })
    }
}
