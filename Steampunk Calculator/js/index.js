var addCounter;
var figure;
function ready() {
  document.getElementByID("textbox").innerText= "Ready";
}


function addNum(num) {
  if(adCounter === 0) {
  var x = num.id;
  } else {
    x = x.concat(num.id);
  }
  document.getElementById("textbox").innerHTML = x;
  addCounter = adCounter +1;
}
console.log(num);

function figure() {
  
}