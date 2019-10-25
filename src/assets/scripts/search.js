
document.addEventListener("DOMContentLoaded", () => {
  
const input         =  document.querySelector('.search__input ');
const searchResult  =  document.querySelector('.search-dropdown');
const btn           =  document.querySelector('.btn');
const search        =  document.querySelector('.page-header__search');



  input.addEventListener( 'focus', function(e) { 
     if (e.target === input) {
        showPageSearch();
       
       window.addEventListener( 'click',  function(e) {
        if (!e.target.closest('.page-header__search') ) {
         searchResult.style.display = "none";
         window.removeEventListener( 'click', hidePageSearch(e))
         }
      })
     }
  })

  function hidePageSearch(e) {
    if (!e.target.closest('.page-header__search') ) {
      searchResult.style.display = "none";
      }
   }

  function showPageSearch() {
    searchResult.style.display = "block";
  }
  
});
