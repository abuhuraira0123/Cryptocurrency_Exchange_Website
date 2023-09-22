
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var ada = document.getElementById("cardano");
var doge = document.getElementById("dogecoin");



let settings ={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cdogecoin&vs_currencies=inr",
    "method":"GET",
    "headers":{}
}

$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    ada.innerHTML = response.cardano.inr;
    doge.innerHTML = response.dogecoin.inr;

});