// Write your Pizza Builder JavaScript in this file.
// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}
function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}
function renderWhiteSauce() {
    document.querySelectorAll('.sauce').forEach((oneSauce) => {
      if (state.whiteSauce) {
        oneSauce.classList.add('sauce-white');
      } else {
        oneSauce.classList.remove('sauce-white');
      }
    });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free');
    } else {
      oneCrust.classList.remove('crust-gluten-free');
    }
  });
};
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if(state.pepperoni){
    document.querySelector('.btn-pepperoni').classList.add('active');
  }
  else{
    document.querySelector('.btn-pepperoni').classList.remove('active');
  }

  if(state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.add('active');
  }
  else{
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }

  if(state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.add('active');
  }
  else{
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }

  if(state.whiteSauce){
    document.querySelector('.btn-sauce').classList.add('active');
  }
  else{
    document.querySelector('.btn-sauce').classList.remove('active');
  }
  
  if(state.glutenFreeCrust){
    document.querySelector('.btn-crust').classList.add('active');
  }
  else{
    document.querySelector('.btn-crust').classList.remove('active');
  }
}
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  let priceList = document.querySelector('aside.panel.price ul');
  priceList.innerHTML = " ";

  for (let item in ingredients){
    if(state[item]){
      totalPrice += ingredients [item].price;
      priceList.innerHTML += `<li>$${ingredients[item].price}${ingredients[item].name.toLowerCase()}</li>`;
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice;
}
renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">` 
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});