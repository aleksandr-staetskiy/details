
function orderedAccordion() {

  const orderedAccordionPanel   =  document.querySelectorAll('.d-catalogue__accordion-visible');

  
  for (let i = 0; i < orderedAccordionPanel.length; i++) {
    let curTitle = orderedAccordionPanel[i];
    orderedAccordionPanel[i].addEventListener('click', function() {

        let classes = this.getAttribute('class');
        let newClasses = '';
        let classesArr = classes.split(' ');
        let newClassesArr = classes.split(' ');

        for (let j = 0; j < classesArr.length; j++) {
            if (classesArr[j] == 'active') {
                classesArr.splice([j], 1);
            }
        }
        if (classesArr.length === newClassesArr.length) {
            classesArr.push('active');
            newClasses = classesArr.join(' ');
        } else {
            newClasses = classesArr.join(' ');
        }

        for (let l = 0; l < orderedAccordionPanel.length; l++) {
            oldClasses = orderedAccordionPanel[l].getAttribute('class');
            oldClassesArr = oldClasses.split(' ');
            for (let k = 0; k < oldClassesArr.length; k++) {
                if (oldClassesArr[k] == 'active') {
                    oldClassesArr.splice([k], 1);
                }
                oldClasses = oldClassesArr.join(' ');
                orderedAccordionPanel[l].setAttribute('class', oldClasses);

            }
        }
        this.setAttribute('class', newClasses);
    })
}

}

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