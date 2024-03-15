const Database = require("./Database");
const Author = require("./entities/Author");
const User = require("./entities/User");

module.exports = class App{
    static #database = new Database();

    createUser(name, email, password){
        const user = new User(name, email, password);
        App.#database.saveUser(user);
    }

    getUsers(){
        App.#database.find('users');
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author);
    }

    getAuthors(){
        App.#database.find('authors');
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock);
        App.#database.saveBook(book);
    }

    addBook(bookName, quantity){
        App.#database.addBooksToStock(bookName, quantity);
    }

    createPoster(name, height, width, price, inStock){
        const poster = new Poster(name, height, width, price, inStock);
        App.#database.savePoster(poster);
    }

    addPoster(posterName, quantity){
        App.#database.addPosterToStock(posterName, quantity);
    }

    
}