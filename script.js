var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var submitButton = document.querySelector('#submit-button');
var outputBox = document.querySelector('#output-box');

function calculatProfitAndLoss(initial,quantity,current){
  if(initial > current){
    var loss = (initial-current)*quantity;
    var lossPercentage = (loss/initial)*100;
    showOutput('Hey, the loss is '+loss+' and the percent is '+lossPercentage+'%');
  }
  else if(initial < current) {
    var profit = (current-initial)*quantity;
    var proftiPercentage = (profit/initial)*100;
    showOutput('Hey, the profit is '+profit+' and the percent is '+proftiPercentage+'%');
  }
  else{
    showOutput('No pain no gain and no gain no pain');
  }
}

function showOutput(massage){
  outputBox.innerHTML = massage;
}

function submitHandler(){
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  calculatProfitAndLoss(ip,qty,curr);
}

submitButton.addEventListener('click',submitHandler);