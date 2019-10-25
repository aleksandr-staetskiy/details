import Inputmask from "inputmask";



function callMask() {
  const selector = document.querySelector('#form-phone-num');
  const im = new Inputmask("+7 (999) 999-99-99");
  console.log(selector);
  
  im.mask(selector);

 let btn = document.getElementsByClassName("cart-form__btn")[0];
 btn.addEventListener("click", function (e) {
  if( ! selector.inputmask.isComplete() ) {
    e.preventDefault();
    alert('номер введен некорректно')
  } 
 });
}

window["callMask"] = callMask;