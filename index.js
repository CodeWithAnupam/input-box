let btn = document.getElementById("btn");

const res = document.getElementById("result");

let func1 =  () => {
  let inputBox1 = document.getElementById("input-box1");
  let inputBox2 = document.getElementById("input-box2");
  
  value_1 = parseFloat(inputBox1.value);
  value_2 = parseFloat(inputBox2.value);

  if ((isNaN(value_1))) {
    inputBox1.style.borderColor = "#ff0000";
    res.textContent = "Error in input 1 "

    // if this value is not a number function will stop here 
    return;
  } 

  if ((isNaN(value_2))) {
    inputBox2.style.borderColor = "#ff0000";
    res.textContent = "Error in input 2 "
  
    // if this value is not a number function will stop here 
    return;
  } else {
    inputBox1.style.borderColor = "initial";
    inputBox2.style.borderColor = "initial";

    let result = parseFloat(inputBox1.value) % parseFloat(inputBox2.value);

    // showing the result
    res.textContent = result;

    // emptying the input boxes
    inputBox1.value = "";
    inputBox2.value = "";
  }
}

btn.addEventListener('click', func1)
