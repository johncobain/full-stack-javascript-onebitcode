/*
Transfer: Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.
*/
module.exports = class Transfer{
    constructor(userSend, userR, value, date){
        this.userSend = userSend;
        this.userR = userR;
        this.value = value;
        this.date = date;
    }
}