console.log("HEY GURL HEY");



//this should store the value
/*form1.addEventListener('input', function() { 
    this.value;
    console.log("this worked");
});*/

var calculator = document.getElementById("basic-calc");

calculator.addEventListener('click', function () {
  var form1 = parseFloat(document.getElementById("basic-num-1").value);
  var form2 = parseFloat(document.getElementById("basic-num-2").value);
  console.log(form1);
  console.log(form2);
  var operator = document.getElementById("basic-operation").value;
  console.log(operator);
    if (operator === "plus") {
      console.log(basicNum1 + basicNum2);
    } else if (operator === "minus") {
      console.log(basicNum1 - basicNum2);
    } else if (operator === "multiplied by") {
      console.log(basicNum1 * basicNum2); 
    } else if (operator === "divided by") {
      console.log(basicNum1 / basicNum2);
    }; 
});

