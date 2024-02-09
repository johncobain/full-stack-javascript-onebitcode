const Post = require('./Post');

class Author{
    constructor(name){
        this.name=name;
        this.posts=[];
    }
    newPost(title, content){
        const post = new Post(this.name, title, content);
        this.posts.push(post);
        return post;
    }
}

module.exports = Author;

/*Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post. Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método específico para criação de posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado*/