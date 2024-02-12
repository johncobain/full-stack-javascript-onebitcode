export class Component{
    #element=null;
    constructor(tag, parent, atributes){
        this.tag=tag;
        this.parent=parent;
        this.atributes=atributes;
        this.build();
    }

    getElement(){
        return this.#element;
    }
    build(){
        this.#element=document.createElement(this.tag);
        Object.assign(this.#element, this.atributes);
        return this;
    }
    render(){
        if(this.parent instanceof Component){
            this.parent.getElement().append(this.#element);
        }else{
            document.querySelector(this.parent).append(this.#element)
        }
    }
}