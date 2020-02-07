import WStorage from '../src'

const user = {
    name: 'Foo',
    surname: 'Demo',
}

describe('WStorage local', () => {
    const $storage = WStorage.initialize()

    beforeEach($storage.session.clean)

    it('Should be set and get value', () => {
        $storage.local.set('user', user)
        expect($storage.local.get('user')).toEqual(user)
    })

    it('Should be remove value', () => {
        $storage.local.set('user', user)
        expect($storage.local.get('user')).toEqual(user)
        $storage.local.remove('user')
        expect($storage.local.get('user')).toEqual(undefined)
    })

    it('Should be clean all value', () => {
        $storage.local.set('user', user)
        expect($storage.local.get('user')).toEqual(user)
        $storage.local.clean()
        expect($storage.local.get('user')).toEqual(undefined)
    })
})

describe('WStorage session', () => {
    const $storage = WStorage.initialize()

    beforeEach($storage.session.clean)

    it('Should be set and get value', () => {
        $storage.session.set('user', user)
        expect($storage.session.get('user')).toEqual(user)
    })

    it('Should be remove value', () => {
        $storage.session.set('user', user)
        expect($storage.session.get('user')).toEqual(user)
        $storage.session.remove('user')
        expect($storage.session.get('user')).toEqual(undefined)
    })

    it('Should be clean all value', () => {
        $storage.session.set('user', user)
        expect($storage.session.get('user')).toEqual(user)
        $storage.session.clean()
        expect($storage.session.get('user')).toEqual(undefined)
    })
})

describe('WStorage is not supported', () => {
    const $storage = WStorage.initialize({
        isSupported: false,
    });

    beforeEach($storage.session.clean);

    it('Should be set and get value returned null', () => {
        $storage.session.set('user', user);
        expect($storage.session.get('user')).toEqual(null);
    });

    it('Should be remove value returned null', () => {
        $storage.session.set('user', user);
        expect($storage.session.get('user')).toEqual(null);
        $storage.session.remove('user');
        expect($storage.session.get('user')).toEqual(null);
    });

    it('Should be clean all value returned null', () => {
        $storage.session.set('user', user);
        expect($storage.session.get('user')).toEqual(null);
        $storage.session.clean();
        expect($storage.session.get('user')).toEqual(null);
    });
});

describe('WStorage install', () => {
    let VueMock = () => {}
    const $storage = WStorage.install(VueMock);

    it('Should be install library in Vue instance', () => {
        expect(VueMock.prototype.$storage).toBeTruthy();
    });
});
