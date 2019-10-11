
orderedAccordion();


function minusAmount() {
    const btnMinus = document.querySelectorAll('.field-num__btn-minus');

    btnMinus.forEach( function(item) {
        item.addEventListener( 'click', function() {
         const chosenBtn = this.parentElement.querySelector('.field-num__input');
         let minus = chosenBtn.value--;
        })
    })
}

minusAmount();

function plusAmount() { 
    const btnMinus = document.querySelectorAll('.field-num__btn-plus');

    btnMinus.forEach( function(item) {
        item.addEventListener( 'click', function() {
         const chosenBtn = this.parentElement.querySelector('.field-num__input');
         let plus = chosenBtn.value++;
        })
    })
}

plusAmount();
