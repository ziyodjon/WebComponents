export default class CustomPassword extends HTMLElement{

    static get observedAttributes(){
        return ['mode'];
    }

    constructor(){
        super();
        this.customPassInpt = document.createElement('input');
        this.customPassInpt.type = 'password';
        this.customPassInpt.value = 'FakePassword';

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
        }   
    }

}