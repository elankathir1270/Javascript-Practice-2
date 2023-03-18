let submitButton = document.getElementById("submitbtn");

let resultdiv=document.createElement('div')
resultdiv.id='result'
document.querySelector('.innerbg').appendChild(resultdiv)


submitButton.addEventListener("click", () => {
  let input = document.querySelector("#input");
  let operator = input.options[input.selectedIndex].value;

  let v1 = parseInt(document.getElementById("value1").value)
  let v2 = parseInt(document.getElementById("value2").value)

  let result;
  switch (operator) {
    case "+":
      result = v1 + v2;
      break;

    case "-":
      result = v1 - v2;
      break;

    case "*":
      result = v1 * v2;
      break;

    case "/":
      result = v1 / v2;
      break;

    default:
      result = "Please select operator";
      break;
  }
  document.getElementById('result').innerHTML=result
});
