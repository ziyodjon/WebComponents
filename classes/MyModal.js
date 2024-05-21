export default class MyModal extends HTMLElement{

    static get observedAttributes(){
        return ['mode'];
    }

    constructor(){
        super();

        this.modalWrapper = document.createElement('div');
        this.modalWrapper.classList.add('modal-wrap');
        this.modalWindow = document.createElement('div');
        this.modalWindow.classList.add('modal-window');
        const modalBody = document.createElement('div');

        const hideBtn = document.createElement('button');
        hideBtn.textContent = 'X';
        hideBtn.addEventListener('click', () => {
            this.hide();
        });

        while(this.firstChild){
            modalBody.append(this.firstChild);
        }
        
        this.modalWindow.append(hideBtn);
        this.modalWindow.append(modalBody);
        this.modalWrapper.append(this.modalWindow);
    }

    show(){
        this.setAttribute('mode','visible');
    }

    hide(){
        this.setAttribute('mode','hidden');
    }

    connectedCallback() {
        console.log('Element created');
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if(attr === 'mode'){
            if(newValue === 'visible'){
                this.append(this.modalWrapper);
            }else{
                this.modalWrapper.remove();
            }
            
        }
        
    }
}