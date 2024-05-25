export default class ProductCounter extends HTMLElement{
    //counter = 0;
    static get observedAttributes(){
        return ['count','max_count'];
    }

    constructor(){
        super();
        this.counter = this.getAttribute('count');
        this.maxCount = this.getAttribute('max_count');

        this.plusBtn = document.createElement('button');
        this.plusBtn.textContent = '+';
        this.minusBtn = document.createElement('button');
        this.minusBtn.textContent = '-';

        this.inptCounter = document.createElement('input');
        this.inptCounter.type = 'text';

        
        this.append(this.minusBtn,this.inptCounter,this.plusBtn);

        this.addEventListener('keyup', (e) => {
            if( e.code === 'Enter' ){
                const inptValue = this.inptCounter.value;
                this.inptCounter.setAttribute('value',inptValue);
                this.setAttribute('count', inptValue);
            }
        });

        this.plusBtn.addEventListener('click', () => {
            this.plus();
        });

        this.minusBtn.addEventListener('click', () => {
            this.minus();
        });

        if(this.counter >= parseInt(this.maxCount)){
            this.plusBtn.setAttribute('disabled',true);
        }else{
            this.plusBtn.removeAttribute('disabled');
        }
 
    }


    minus (){
        this.inptCounter.setAttribute('value',--this.counter);
        this.inptCounter.value = this.counter;
        this.setAttribute('count',this.counter); 
    //    if(this.counter <= 0){
    //         this.minusBtn.setAttribute('disabled',true);
    //    }
    }

    plus (){
        this.inptCounter.setAttribute('value',++this.counter);
        this.inptCounter.value = this.counter;
        this.setAttribute('count',this.counter);
    }

    attributeChangedCallback(attr, oldValue, newValue) {

        
        if(attr === 'count'){

            this.inptCounter.setAttribute('value',newValue);

            this.counter = newValue;

            if(this.counter > this.maxCount){
                this.plusBtn.setAttribute('disabled',true);
            }

            if(newValue >= parseInt(this.maxCount)) {
                this.plusBtn.setAttribute('disabled',true);
            } else {
                this.plusBtn.removeAttribute('disabled');
            }

            if(newValue <= 0) {
                this.minusBtn.setAttribute('disabled', true)
            } else {
                this.minusBtn.removeAttribute('disabled')
            }
        }

        if(attr === 'max_count'){
            this.maxCount = newValue;

            if(this.counter > this.maxCount){
                this.plusBtn.setAttribute('disabled',true);
            }

            // if(this.maxCount < this.counter){
            //     console.log('Max 3');
            // }

            if(this.counter < this.maxCount){
                this.plusBtn.removeAttribute('disabled');
            }

            // if(oldValue < newValue && oldValue != null){
            //     //this.plusBtn.removeAttribute('disabled');
            // }
        }
    }

    get count(){
        return this.counter;
    }

    set count(value){
        this.setAttribute('count', value);
    }

    get max_count(){
        return this.counter;
    }

    set max_count(value){
        this.setAttribute('count', value);
    }

    get value(){
        return this.counter
    }
    
    set value(value){
        this.inptCounter.setAttribute('value',value);
        this.setAttribute('count', value);
    }
}