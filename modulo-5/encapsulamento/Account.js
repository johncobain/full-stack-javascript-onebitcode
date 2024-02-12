class Account {
    #password
    #balance = 0
    constructor(user){
        this.email=user.email;
        this.#password=user.password;
    }

    getBalance(email,password){
        if(this.#authenticate(email,password)){
            return this.#balance
        }else{return null}
    }

    #authenticate(email,password){
        return this.email===email && this.#password===password;
    }
}

const user = {
    email:'john@email.com',
    password:'123jd'
}

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.getBalance('john@email.com', '123jd'));


