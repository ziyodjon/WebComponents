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
        }   

        if(attr === 'value'){
            this.customPassInpt.setAttribute('value',newValue);
            this.customPassInpt.value = newValue;
        }

        if(attr === 'placeholder'){
            this.customPassInpt.setAttribute('placeholder',newValue);
        }
    }

}