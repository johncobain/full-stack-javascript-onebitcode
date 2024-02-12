import { Component } from "./Component.js";
import { Form } from "./Form.js"
import { Label } from "./Label.js"
import { Input } from "./Input.js"

const heading = new Component('h1', 'body', {innerText: 'Hello'});
console.log(heading);
heading.render()
heading.tag = 'h2';
heading.atributes.innerText='world'
heading.build().render();

const form = new Form('body')

const label = new Label('Nome:', form, {htmlFor:'nameInput'});
const input = new Input(form,{id:'nameInput',name:'name'});

form.render();

label.render();
form.addChildren(input);

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de Nascimento:', form, {htmlFor:'birthdayInput'}),
    new Input(form, {id:'birthdayInput', name:'bithday', type:'date'})
);