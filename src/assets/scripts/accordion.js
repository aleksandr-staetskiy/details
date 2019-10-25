document.addEventListener("DOMContentLoaded", () => {


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
           let oldClasses = orderedAccordionPanel[l].getAttribute('class');
           let oldClassesArr = oldClasses.split(' ');
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

});