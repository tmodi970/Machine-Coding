class User {
    #id
    #name
    #email
    #phone

    static USER_ID = 0;
     
    constructor(){
        this.#id = ++User.USER_ID;
    }
    get id(){
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    get email(){
        return this.#email;
    }
    get phone(){
        return this.#phone;
    }

    set name(name){
        // validations before setting 
        return this.#name = name;
    }
    set email(email){
        // validations before setting 
        return this.#email = email;
    }
    set phone(phone){
        // validations before setting 
        return this.#phone = phone;
    }

    static createUser(name , email , phone){
        var user = new User();
        user.name = name;
        user.email = email;
        user.phone = phone;
        return user;
    }
}

module.exports.User = User