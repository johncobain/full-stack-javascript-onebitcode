const Comment = require('./Comment');
const dayjs = require('dayjs');

class Post{
    constructor(author, title, content){
        this.author=author;
        this.title=title;
        this.content=content;
        this.comments = [];
        this.date = dayjs().format('DD/MM/YYYY-HH:mm:ss');
    }
    addComment(userName, content){
        this.comments.push(new Comment(userName,content))
    }
}

module.exports = Post;

/*Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. As instâncias de Post também devem ter um método específico para adição de comentários nelas.*/