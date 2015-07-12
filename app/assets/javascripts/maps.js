$(document).ready( function () {
  var displayMenu = false;
  $('#toggleMenu').on('click', function () {
    if (displayMenu) {
      $('.menu').hide();
      displayMenu = false;
    } else {
      $('#mainMenu').show();
      displayMenu = true;
    }
  });

  $('#findProduct').on('click', function () {
    $('#mainMenu').hide();
    $('#products').show();
  });

  $('#showGroceryList').on('click', function () {
    $('#mainMenu').hide();
    $('#groceryList').show();
  });

  $('.product').on('click', function () {
    $('.pin').hide();
    $('.product').removeClass('selected');
    $('#'+$(event.target).attr('id')).toggle();
    $(event.target).addClass('selected');
    $('.addProduct').removeClass('selected');
  });

  $('.addProduct').on('click', function (event) {
    $(event.target).parent().toggleClass('checked');
  });

  $('#storeInfos').on('click', function (event) {
    $('.store-info').toggle();
  });
});
