$(document).ready(function () {
  $('.navigation-option').on('click', function (event) {
    $('.navigation-option').removeClass('select');
    $(event.target).toggleClass('select');
    $('.main-menu-list').hide();
    $('#'+$(event.target).attr('id')+'List').show();
  });
});
