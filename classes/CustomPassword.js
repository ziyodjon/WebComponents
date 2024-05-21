export default class CustomPassword extends HTMLElement{

    static get observedAttributes(){
        return ['mode'];
    }

    constructor(){
        super();
    }

    show(){
        document.getElementById('pass-input').setAttribute('type','text');
        document.getElementById('custom-password').setAttribute('mode','visible');
    }

    hide(){
        document.getElementById('pass-input').setAttribute('type','password');
        document.getElementById('custom-password').setAttribute('mode','hidden');
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if(attr === 'mode'){
            if(oldValue === 'visible'){
                this.hide();
            }
        }   
    }
}