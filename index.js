// scope lab 
var customerName = "bob";
const leastFavoriteCustomer = "Daniel";

//toUpperCase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "not Daniel";
  return leastFavoriteCustomer;
}