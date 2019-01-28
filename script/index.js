$(document).ready(function() {
  var cart = {};
  var cartCount = 0;


  // For Rad Dad
  // For the purpose and the scale of this project I will have multiple click event for each item
  $('.rad_dad').on('click', function(event) {
    event.preventDefault();

    var delivery_method = $('input[name=option1]:checked').val();
    var quantity = Number($('input[name=quantity]').val());
    var price = 3.99;
    var msg;

    // If user did not choose a deliver method
    if(!delivery_method) {
      alert("ERROR: You did not choose a delivery method.");
    }

    if(delivery_method === 'Sign') {
      price += 1.99;
      msg = $('.dad_text').val();
    }

    // Fixing decemal places to 2 for display
    price = (price * quantity).toFixed(2);

    // Resetting selected fields
    $('.dad_text').val("");
    // Radio buttons reset code from https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript
    $('input[name=option1]:checked')[0].checked = false;
    $('input[name=quantity]').val(1);

    cart[cartCount] = {
      Item: "Rad Dad",
      Price: "3.99",
      Quantity: quantity,
      Total: price,
      Message: msg,
      Delivery: delivery_method
    }

    console.log(cart);
    cartCount++;
  });


  $('.better_friend').on('click', function(event) {
    event.preventDefault();

    var delivery_method = $('input[name=option]:checked').val();
    var quantity = Number($('input[name=quantity2]').val());
    var price = 6.99;
    var msg;

    // If user did not choose a deliver method
    if(!delivery_method) {
      alert("ERROR: You did not choose a delivery method.");
    }

    if(delivery_method === 'Sign') {
      price += 1.99;
      msg = $('.friend_text').val();
    }

    // Fixing decemal places to 2 for display
    price = (price * quantity).toFixed(2);

     // Resetting selected fields
    $('.friend_text').val("");
    // Radio buttons reset code from https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript
    $('input[name=option]:checked')[0].checked = false;
    $('input[name=quantity2]').val(1);

    cart[cartCount] = {
      Item: "Couldn't Pick a Better Friend Birthday Card",
      Price: "6.99",
      Quantity: quantity,
      Total: price,
      Message: msg,
      Delivery: delivery_method
    }

    console.log(cart);
    cartCount++;
  });
});