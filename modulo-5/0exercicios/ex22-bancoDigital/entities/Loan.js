/*Loan: Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem. Deverá possuir os atributos para o valor do empréstimo e para a data de criação. Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo.

Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem.

Deverá possuir os atributos para o valor do empréstimo e para a data de criação.

Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo.*/

module.exports = class Loan extends Installment{
    static #rate;
    constructor(value, date, price, installments){
        this.value = value;
        this.date = date;
        super(price, installments)
    }

    static getRate(){
        return this.#rate;
    }
    static setRate(newRate){
        this.#rate = newRate;
    }
}