$(document).ready(function() {
  var cart = {};

  $('.button, .button-purchase').on('click', function(event) {
    event.preventDefault();

    var delivery_method = $('input[name=option1]:checked').val();
    var quantity = Number($('input[name=quantity]').val());
    var msg;

    // If user did not choose a deliver method
    if(!delivery_method) {
      alert("ERROR: You did not choose a delivery method.");
    }

    if(delivery_method === 'Sign') {
      msg = $('.paragraph-text').val();
    }

    console.log(delivery_method);
  });
});