const dayjs = require('dayjs');

class Comment{
    constructor(userName, content){
        this.userName= userName;
        this.content= content;
        this.date = dayjs().format('DD/MM/YYYY-HH:mm:ss');
    }
}

module.exports = Comment;

/*Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. As instâncias de Post também devem ter um método específico para adição de comentários nelas.*/