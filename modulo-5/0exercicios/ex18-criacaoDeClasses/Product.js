/*
um atributo name, atribuível na instanciação
um atributo description, atribuível na instanciação
um atributo price, atribuível na instanciação
um atributo inStock, inicializado sempre em 0
um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado*/

class Product{
    constructor(name, desc, price){
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.inStock = 0;
    }
    addToStock(qnt){
        this.inStock+=qnt
    }
    calculateDiscount(percentage){
        return this.price - (this.price*(percentage/100));
    }
}

const notebook = new Product('Notebook Acer Nitro 5', 'Notebook gamer, 512GB de SSD, R7, Gtx 1650, 8GB RAM, Windows 11', 4699);
console.log(notebook);

notebook.addToStock(20);
console.log(notebook);

console.log(`O notebook ${notebook.name}, que custa R$${notebook.price.toFixed(2)} com o desconto passa a custar R$${notebook.calculateDiscount(14).toFixed(2)}`);