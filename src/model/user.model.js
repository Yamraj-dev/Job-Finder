export default class UserModle {
    constructor(_id, _name, _email, _password) {
        this.id = _id;
        this.name = _name;
        this.email = _email;
        this.password = _password;
    }

    static add(name, email, password) {
        let newUser = new UserModle(User.length + 1, name, email, password);
        User.push(newUser);
    }
    static get() {
        return User;
    }
    
    static isValid(email, password) {
        console.log("User Array:", User); // Log all users
        const result = User.find((u) => u.email == email && u.password == password);
        console.log("Validation Result:", result); // Log result of validation
        return result;
    }       

}
export var User = [];   