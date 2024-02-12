import { Component } from "./Component.js";

export class Label extends Component{
    constructor(text, parent, atributes){
        super('label', parent, Object.assign({}, atributes, {textContent:text}));
    }
}