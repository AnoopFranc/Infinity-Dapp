
$.getJSON(
  "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",
  function(json) {
    console.log(json['USD']);
  // $('#poolPrice').text((0.125*json['USD']).toFixed(2));
    $('#ticketPrice').text((1.5*json['USD']).toFixed(2));
  }
);
