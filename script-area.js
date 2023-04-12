// get required elements
const inputBase = document.getElementById('base') ;
const inputHeight = document.getElementById('height'); 
const btnGetArea = document.getElementById("btn-get-area");
const divOutput = document.getElementById("div-output");

// addEventListener for check btn click
btnGetArea.addEventListener("click", () => {
  // get sum of elements
  if(inputBase.value !== '' || inputBase.value !== '' ){
      const area = getArea(inputBase.value,inputHeight.value);
      console.log(area);
      setMessage(area);
  }else alert("Please enter the values and try again!");
});

// arrow function to calculate area.
const getArea = (base,height) => {
  return (base * height)/2;
};

// arrow function to set the message (result)
const setMessage = (hypo) => {
  let outputMessage = `Area of Triangle = <strong>${hypo}</strong>`;
    divOutput.innerHTML = outputMessage;
};
