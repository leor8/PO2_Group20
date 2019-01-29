$(document).ready(function() {
  var cartCount = localStorage.length;

  /*
    The following section are the codes to retrieve cart info
  */

  if(document.body.className === 'checkout'){
    var cart = {};
    $('.item_count').text(localStorage.length + " Item(s)");
    // Getting items from localstorage
    for(let storage_index = 0; storage_index < localStorage.length; storage_index++) {

      cart[storage_index] = JSON.parse(localStorage.getItem(storage_index));

      // HTML DOM Construction syntax retrieved from https://stackoverflow.com/questions/9760328/clearest-way-to-build-html-elements-in-jquery
      var $item = $([
          "<p class='item-text'>" + cart[storage_index].Item + " <span class='price'>$" + cart[storage_index].Price + "</span> <span> Quantity:" + cart[storage_index].Quantity + "</span></p>"
        ].join("\n"));

      $(".items").append($item);
    }

  }

  $('.button-form-submit').on('click', function (event) {
    localStorage.clear();
  })




  /*
    The following section are the codes to save items user wish to buy into a cart
  */
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

    var result = {
      Item: "Rad Dad",
      Price: "3.99",
      Quantity: quantity,
      Total: price,
      Message: msg,
      Delivery: delivery_method
    }

    // Saving object to localStorage for easy data communcation setup
    localStorage.setItem(cartCount, JSON.stringify(result));
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

    var result = {
      Item: "Friend's B-day",
      Price: "6.99",
      Quantity: quantity,
      Total: price,
      Message: msg,
      Delivery: delivery_method
    }

    // Saving object to localStorage for easy data communcation setup
    localStorage.setItem(cartCount, JSON.stringify(result));
    cartCount++;
  });
});