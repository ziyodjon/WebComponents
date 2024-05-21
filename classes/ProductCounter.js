export default class ProductCounter extends HTMLElement{
    counter = 0;
    static get observedAttributes(){
        return ['test'];
    }

    constructor(){
        super();
        this.inptCounter = document.getElementById('inp-counter');
        this.productCounter = document.getElementById('product-counter');
    }


    minus (){
        if(this.inptCounter.value > 0){
            document.getElementById('inp-counter').setAttribute('value', this.counter--);
        }  
    }

    plus (){
       //document.getElementById('product-counter').setAttribute('test',this.counter++);
        document.getElementById('inp-counter').setAttribute('value', this.counter++);
        
        
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if(attr === 'test'){

            console.log(oldValue);
            console.log(newValue);
            // if(oldValue > 0){
            //     this.plus();
            // }else{
            //     this.minus();
            // }
        }
    }
}