$(document).ready(function() {
  'use strict';

  var tabitems = ['modele','immat','cartegrise'];

  var $btnUp = $('#piecesdetachees').find('.buttonUp');

  var $searchModules = [
    $('.normal').find('.search-module'),
    $('.mobile').find('.search-module')
  ];

  $('.tileset').hide();
  $btnUp.hide();

  tabitems.forEach(function(category) {
    $searchModules.forEach(function($searchModule) {
      $searchModule.find('#' + category)
          .on('click', function () {
            $searchModule.trigger('clear');
            $(this).addClass('selected');
            $searchModule.find('.form-' + category)
                .addClass('actived');
          });
    });
  });

  console.log('search-module', $('.search-module'));

  $searchModules.forEach(function($searchModule) {
    $searchModule.on('clear', function() {
      $(this).find('ul')
          .children('li').each(function() {
        $(this).removeClass('selected');
      });
      $(this).find('.display')
          .children('form').each(function() {
        $(this).removeClass('actived');
      });
    });
  });

  $('.buttonPieces').on('click', function(e) {
    $('.tileset').slideToggle();
    $(this).toggleClass('deployed');
    $btnUp.trigger('toggled');
  });

  $btnUp.on('toggled', function() {
    if ($('.buttonPieces').hasClass('deployed')) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

  $btnUp.on('click', function(e) {
    e.preventDefault();
    $('.tileset').slideUp();
    $(this).hide();
  });

  // Burger menu
  $(".burger").click(function(){
    $(".menu").toggleClass("hidden");
    $("#1").toggleClass("active");
    $("#2").toggleClass("active2");
    $("#3").toggleClass("hidden");
  });

});
