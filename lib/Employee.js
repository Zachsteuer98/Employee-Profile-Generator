class Employee {
    constructor (name, id, email) {
        this.name= name;
        this.id= id;
        this.email = email;
    }

    retrieveName() {
        return this.name
    }

    retrieveId() {
        return this.id
    }
}

module.exports = Employee