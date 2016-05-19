$(document).ready(function() {
  'use strict';

  var tabitems = ['modele','immat','cartegrise'];

  tabitems.forEach(function(category) {
    $('#' + category).on('click', function() {
      $('.search-module').trigger('clear');
      $(this).addClass('selected');
      $('.form-' + category).addClass('active');
    });
  });

  $('.search-module').on('clear', function() {
    $(this).find('ul')
    .children('li').each(function() {
      $(this).removeClass('selected');
    });
    $(this).find('.display')
    .children('form').each(function(elt) {
      $(this).removeClass('active');
    })
  });

});
