const input         =  document.querySelector('.search__input ');
const searchResult  =  document.querySelector('.search-dropdown');
const btn           =  document.querySelector('.btn');
const search        =  document.querySelector('.search');



  input.addEventListener( 'focus', function(e) { 
     if (e.target === input) {
        searchResult.style.display = "block";
       
       window.addEventListener( 'click',  function(e) {
        if (!e.target.closest('.search') ) {
         searchResult.style.display = "none";
         }
      })
      window.removeEventListener( 'click', function(e) {
        if (!e.target.closest('.search') ) {
         searchResult.style.display = "none";
         }
      })
     }
  })


  console.log('it works bitch');
  