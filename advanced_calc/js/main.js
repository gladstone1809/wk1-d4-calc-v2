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
    if (operator === "+") {
      var ans1 = (form1 + form2);
    } else if (operator === "-") {
      var ans1 = (form1 - form2);
    } else if (operator === "*") {
      var ans1 = (form1 * form2); 
    } else if (operator === "/") {
      var ans1 = (form1 / form2);
    }; 
    document.getElementById("basic-answer").className = "show";
    document.getElementById("basic-answer-alert").innerHTML = ans1;
});


var calculator = document.getElementById("bmi-calc");

calculator.addEventListener('click', function () {
  var mass = parseFloat(document.getElementById("bmi-mass").value);
  var height = parseFloat(document.getElementById("bmi-height").value);
  var units = document.getElementById("bmi-units").value;

  console.log(mass);
  console.log(height);
  console.log(units)
  
  debugger;
if (units === "imperial") {
  var ans2 = Math.exp(mass, 2) / height * 703;
  document.getElementById("bmi-mass-unit").innerHTML = "lb"; 
  document.getElementById("bmi-height-unit").innerHTML = "in";

} else if (units === "metric") {
  var ans2 = Math.exp(mass, 2) / height;
  document.getElementById("bmi-mass-unit").innerHTML = "kg"; 
  document.getElementById("bmi-height-unit").innerHTML = "m";
};

  console.log(ans2);

  document.getElementById("bmi-answer").className = "show";
  document.getElementById("bmi-answer-alert").innerHTML = ans2;
});

