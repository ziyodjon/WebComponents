export default class ProductCounter extends HTMLElement{
    //counter = 0;
    static get observedAttributes(){
        return ['value','max_count'];
    }

    constructor(){
        super();
        this.counter = this.getAttribute('value');
        this.maxCount = this.getAttribute('max_count');

        this.plusBtn = document.createElement('button');
        this.plusBtn.textContent = '+';
        this.minusBtn = document.createElement('button');
        this.minusBtn.textContent = '-';

        this.inptCounter = document.createElement('input');
        this.inptCounter.type = 'text';

        
        this.append(this.minusBtn,this.inptCounter,this.plusBtn);

        // this.addEventListener('keyup', (e) => {
        //     if( e.code === 'Enter' ){
        //         const inptValue = this.inptCounter.value;
        //         this.inptCounter.setAttribute('value',inptValue);
        //         this.setAttribute('count', inptValue);
        //     }
        // });

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
        this.inptCounter.value = parseInt(this.inptCounter.value);
        this.inptCounter.value--;
        this.inptCounter.setAttribute('value',this.inptCounter.value);
        this.setAttribute('value',this.inptCounter.value);
    }

    plus (){
        this.inptCounter.value = parseInt(this.inptCounter.value);
        this.inptCounter.value++;
        this.inptCounter.setAttribute('value',this.inptCounter.value);
        this.setAttribute('value',this.inptCounter.value);
    }

    attributeChangedCallback(attr, oldValue, newValue) {

        
        if(attr === 'value'){
            //this.inptCounter.setAttribute('value',parseInt(newValue));
            this.inptCounter.value = newValue;

            //this.counter = newValue;

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

    

    get max_count(){
        return this.counter;
    }

    set max_count(value){
        this.setAttribute('value', value);
    }

    get value(){
        return this.counter
    }
    
    set value(value){
        this.inptCounter.setAttribute('value',value);
        this.setAttribute('value', '');
        this.setAttribute('value', value);
    }
}