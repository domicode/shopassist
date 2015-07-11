$(document).ready(function () {
  $('.navigation-option').on('click', function (event) {
    $('.navigation-option').removeClass('select');
    $(event.target).toggleClass('select');
  });
});
