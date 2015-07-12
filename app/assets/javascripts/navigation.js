$(document).ready(function () {
  $('.navigation-option').on('click', function (event) {
    $('.navigation-option').removeClass('select');
    $(event.target).closest('.navigation-option').toggleClass('select');
    $('#navigation svg').each(function(key, value) { $(value).children('g').attr('fill', '#FFFFFF'); });
    $(event.target).find('g').attr('fill', '#000000');
    $('.main-menu-list').hide();
    $('#'+$(event.target).closest('.navigation-option').attr('id')+'List').animate({left:600, opacity:"show"}, 500);
    if (!$('#navigation .navigation-option').hasClass('select')) {
      $('#'+$(event.target).closest('.navigation-option').attr('id')+'.navigation-option').addClass('select').find('g').attr('fill', '#000000');
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
