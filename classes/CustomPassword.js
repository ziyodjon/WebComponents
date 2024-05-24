export default class CustomPassword extends HTMLElement{

    static get observedAttributes(){
        return ['mode','value','placeholder'];
    }

    constructor(){
        super();
        this.customPassInpt = document.createElement('input');
        this.customPassInpt.type = 'password';
        this.customPassInpt.value = '';

        this.customPassShowBtn = document.createElement('button');
        this.customPassShowBtn.textContent = 'eye';
        this.append(this.customPassInpt,this.customPassShowBtn);

        this.customPassShowBtn.addEventListener('click', () => {
            this.show();
        });
    }

    show(){
        this.customPassInpt.setAttribute('type','text');
        this.setAttribute('mode','visible');
    }

    hide(){
        this.customPassInpt.setAttribute('type','password');
        this.setAttribute('mode','hidden');
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if(attr === 'mode'){
            if(oldValue === 'visible'){
                this.hide();
            }
            if(newValue === 'visible'){
                this.customPassInpt.setAttribute('type','text');
            }
            if(oldValue === 'hidden'){
                console.log(attr);
                this.customPassInpt.setAttribute('type','password');
            }
        }   

        if(attr === 'value'){
            this.customPassInpt.setAttribute('value',newValue);
            this.customPassInpt.value = newValue;
        }

        if(attr === 'placeholder'){
            this.customPassInpt.setAttribute('placeholder',newValue);
            this.customPassShowBtn.style.backgroundColor = 'navy';
            this.customPassShowBtn.style.color = '#fff';
            this.customPassInpt.classList.add('simple-class');
        }
    }

    get value (){
        return this.customPassInpt.value;
    }

    set value (value){
        this.setAttribute('value',value);
    }

    get placeholder (){
        return this.customPassInpt.placeholder;
    }

    set placeholder (value){
        this.setAttribute('placeholder',value);
    }

}