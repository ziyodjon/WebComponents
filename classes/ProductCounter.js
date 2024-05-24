export default class ProductCounter extends HTMLElement{
    //counter = 0;
    static get observedAttributes(){
        return ['count'];
    }

    constructor(){
        super();
        this.counter = this.getAttribute('count');

        this.plusBtn = document.createElement('button');
        this.plusBtn.textContent = '+';
        this.minusBtn = document.createElement('button');
        this.minusBtn.textContent = '-';

        this.inptCounter = document.createElement('input');

        this.inptCounter.setAttribute('value',1);
        this.append(this.minusBtn,this.inptCounter,this.plusBtn);

        this.plusBtn.addEventListener('click', () => {
            this.plus();
        });

        this.minusBtn.addEventListener('click', () => {
            this.minus();
        });

        if(this.counter >= 10){
            this.plusBtn.setAttribute('disabled',true);
            console.log("plus" + this.counter);
        }else{
            console.log('minus', this.counter);
            this.plusBtn.removeAttribute('disabled') 
        }


        
    }


    minus (){
        this.inptCounter.setAttribute('value',--this.counter);
        this.setAttribute('count',this.counter); 
       if(this.counter <= 0){
            this.minusBtn.setAttribute('disabled',true);
       }
    }

    plus (){
        this.inptCounter.setAttribute('value',++this.counter);
        this.setAttribute('count',this.counter);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        
        if(attr === 'count'){
            if(newValue >= 10) {
                this.plusBtn.setAttribute('disabled',true);
            } else {
                this.plusBtn.removeAttribute('disabled')
            }

            if(newValue <= 0) {
                this.minusBtn.setAttribute('disabled', true)
            } else {
                this.minusBtn.removeAttribute('disabled')
            }
        }
    }
}