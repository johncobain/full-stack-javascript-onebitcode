const App = require('./entities/App');

App.createUser("john@email.com", "John Dee");
App.createUser("marry@email.com", "Marry Lyn");
App.createUser("mike@email.com", "Mike Tyson");

App.deposit("john@email.com", 100);
App.transfer("john@email.com", "marry@email.com", 20);
App.changeLoanFee(10);
App.takeLoan("mike@email.com", 2000, 24);

console.log(App.findUser("john@email.com"));
console.log(App.findUser("john@email.com").account);
console.log(App.findUser("marry@email.com"));
console.log(App.findUser("marry@email.com").account);
console.log(App.findUser("mike@email.com"));
console.log(App.findUser("mike@email.com").account);
console.log(App.findUser("mike@email.com").account.loans[0].installments);
