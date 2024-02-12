import { Component } from "./Component.js";

export class Form extends Component{
    constructor(parent,atributes){
        super('form',parent,atributes);
    }
    addChildren(...children){
        children.forEach(child=>{
            this.getElement().appendChild(child.getElement());
        })
    }
}