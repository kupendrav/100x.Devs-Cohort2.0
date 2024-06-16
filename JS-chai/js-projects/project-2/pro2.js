const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if(height === '' || height < 0 || isNaN(height)) {
    alert('Please provide a valid height')
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    alert('Please provide a valid weight')
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   document.querySelector('#bmi').innerHTML = `<span>Your BMI is ${bmi}</span>`;
   // determine and display the user's BMI category
   if(bmi < 18.5) {
    document.querySelector('#result').innerHTML = `<span>You are underweight🥲</span>`;
  } else if(bmi >= 18.5 && bmi <= 24.9) {
    document.querySelector('#result').innerHTML = `<span>You are normal weight😁</span>`;
  } else if(bmi >= 25 && bmi <= 29.9) {
    document.querySelector('#result').innerHTML = `<span>You are overweight🧐</span>`;
  } else {
    document.querySelector('#result').innerHTML = `<span>You are obese 😱</span>`;
  }
  }

  
});

