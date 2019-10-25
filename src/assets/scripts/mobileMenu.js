import $ from 'jquery';

  $(document).ready(function(){
    $('.main-nav__toggler').click(function(){
      $('.menu-hide').toggleClass('show');
      $('.menu-tab').toggleClass('active');
    });
    $('.menu-hide__close').click(function(){
      $('.menu-hide').removeClass('show');
      $('.menu-hide').removeClass('active');
    });
  });

