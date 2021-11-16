//Create three vảriables to store the information needed.
 var prece;
var quantity;
var total;
//Assign values to the price and quatity variables.
price=5;
quantity=14;
//calculate the total by multyplying the price by quantyti.
total=price*quantity;
// get the element with an id of cost.
 var el=document.getElementById( 'cost');
 el.textContent='$'+total;