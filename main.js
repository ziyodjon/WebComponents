import MyModal from "./classes/MyModal.js";
import CustomPassword from "./classes/CustomPassword.js";
import ProductCounter from "./classes/ProductCounter.js";

customElements.define('my-modal',MyModal);

const modal = document.getElementById('modal-wrap');

document.getElementById('show-modal-btn').addEventListener('click', () => {
   modal.show();
});

document.getElementById('hide-modal-btn').addEventListener('click', () => {
    modal.hide();
 });


 customElements.define('custom-password', CustomPassword);

 customElements.define('product-counter',ProductCounter);
