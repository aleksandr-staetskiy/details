import $ from 'jquery';

  $(document).ready(function(){
    
    let catalogueList = $('.catalogue__list');

    catalogueList.each( function(i, elem) {

      let item = $(elem);
      let btn = item.next();

      if(item.children().length > 8) {
        console.log(item);
    
        btn.show();
      } else {
        btn.hide();
      }

    })

    $('.catalogue__show-more').on("click",function(){
      var self = $(this);
      var target = self.prev();
      console.log(target.children().length);
      
      target.toggleClass("show");

      if(self.prev().hasClass("show")) {
        self.text('Показать меньше');
      } else {
        self.text('Показать больше');
      }
  })

  });

