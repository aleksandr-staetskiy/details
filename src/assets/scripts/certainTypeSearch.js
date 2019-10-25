document.addEventListener("DOMContentLoaded", () => {

  const searchBar = document.querySelector('.certain-search');


  if(searchBar) {
     searchBar.addEventListener('keyup', function (e) {
    
    const term = e.target.value.toLowerCase();
    const types = document.querySelectorAll('.certain-type__brand-name');

    for (let item of types) {
      let title = item.innerHTML; 
      
      if (title.toLowerCase().indexOf(term) !== -1) {
        item.parentNode.parentNode.style.display = 'flex';
      } else {
        item.parentNode.parentNode.style.display = 'none';
      }
    }

  })
  }

});
 
