class Password {
    constructor(title, email, description, password) {
        this.title = title
        this.email = email
        this.description = description
        this.password = password
    }

    get title() {
        return this.title
    }
    get email() {
        return this.email
    }
    get description() {
        return this.description
    }
    get password() {
        return this.password
    }

    generate_password() {
        let pass = ''
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

        for(let i = 0; i < 10; i++) {
            pass += chars[Math.floor((Math.random() * 62) + 1)]
        }

        return pass
    }

}

export default Password