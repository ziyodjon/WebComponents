export default class ProductCounter extends HTMLElement{

    static get observedAttributes(){
        return ['value','max_count'];
    }

    constructor(){
        
        super();

        this.maxCount = this.getAttribute('max_count');

        this.plusBtn = document.createElement('button');
        this.plusBtn.textContent = '+';

        this.minusBtn = document.createElement('button');
        this.minusBtn.textContent = '-';

        this.inptCounter = document.createElement('input');
        this.inptCounter.type = 'text';

        this.append(this.minusBtn,this.inptCounter,this.plusBtn);

        this.plusBtn.addEventListener('click', () => {
            this.plus();
        });

        this.minusBtn.addEventListener('click', () => {
            this.minus();
        });

    }


    minus (){
        if(this.value > 0){
            this.value--;
            this.setAttribute('value', this.value);
            this.inptCounter.setAttribute('value', this.value);
        }
    }

    plus (){
        if(this.value < this.maxCount){
            this.value++;
            this.setAttribute('value', this.value);
            this.inptCounter.setAttribute('value', this.value);
        }
    }

    checkDisabled(){
        if(this.value > this.maxCount){
            this.plusBtn.setAttribute('disabled',true);
        }

        if(this.value >= parseInt(this.maxCount)) {
            this.plusBtn.setAttribute('disabled',true);
        } else {
            this.plusBtn.removeAttribute('disabled');
        }

        if(this.value <= 0) {
            this.minusBtn.setAttribute('disabled', true)
        } else {
            this.minusBtn.removeAttribute('disabled')
        }

    }

    attributeChangedCallback(attr, oldValue, newValue) {

        if(attr === 'value'){
            this.value = newValue;
        }

        if(attr === 'max_count'){
            this.maxCount = newValue;
        }

    }

    get max_count(){
        return this.counter;
    }

    set max_count(value){
        this.setAttribute('value', value);
    }

    get value(){
        return Number(this.inptCounter.value);
    }
    
    set value(value){
        this.inptCounter.value = value;
        this.checkDisabled();
    }
}