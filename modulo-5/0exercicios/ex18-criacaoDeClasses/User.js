/*Treinando a Criação de Classes
um atributo fullname, atribuível na instanciação
um atributo email, atribuível na instanciação
um atributo password, atribuível na instanciação
um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
*/

class User{
    constructor(fullname, email, pass){
        this.fullname=fullname;
        this.email=email;
        this.pass=pass
    }
    login(email, pass){
        if(email===this.email && pass===this.pass){
            console.log('Login realizado com sucesso!');
        }else{
            console.log('Email ou senha estão incorretos!');
        }
    }
}

const john = new User('John Cobain', 'john.dee@email.com', 'jode777');

john.login('john.dee@email.com', 'jode777')
john.login('john.cobain@email.com', 'jode777')
john.login('john.dee@email.com', 'jode999')

console.log(john);


