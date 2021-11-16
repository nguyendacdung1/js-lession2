var price=5;
var quantity=14;
var total= price*quantity;
/*METHOT 2
var price,quantity,total;
price=5;
quantity=14;
total=price*quantity;
 */
/*METHOT 3
var price=5,quantity=14;
var total=price*quantity;
 */
var el=document.getElementById('cost')
el.textContent='$'+total;
