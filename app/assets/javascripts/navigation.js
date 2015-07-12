$(document).ready(function () {
  $('.navigation-option').on('click', function (event) {
    $('.navigation-option').removeClass('select');
    $(event.target).toggleClass('select');
    $('.main-menu-list').hide();
    $('#'+$(event.target).attr('id')+'List').animate({left:600, opacity:"show"}, 500);
    if (!$('#navigation .navigation-option').hasClass('select')) {
      $('#'+$(event.target).attr('id')+'.navigation-option').addClass('select');
      if (!$('#navigation .navigation-option').hasClass('select')) {
        $('#navigation #shops').addClass('select');
      }
    }
    $('.navigation-menu ul').hide();
  });

  $('.navigation-menu').on('click', function (event) {
    $(event.target).siblings('ul').toggle();
  });
});
