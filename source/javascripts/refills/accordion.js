$('.js-accordion-trigger').bind('click', function(e){
  $(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  $(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});
