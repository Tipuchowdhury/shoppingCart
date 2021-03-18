let removeItems = document.getElementsByClassName('btn-danger');
let addToCartItems = document.getElementsByClassName('product');
for(let i = 0; i<removeItems.length; i++) {
    let button = removeItems[i];
    button.addEventListener('click', removeItem);
}

for(let i=0; i<addToCartItems.length; i++) {
    let addItem = addToCartItems[i];
    addItem.addEventListener('click' , addToCart);
}

function removeItem(e) {
    let removedButton = e.target;
    removedButton.parentElement.parentElement.remove();
}

function addToCart(e) {
    let CartItem = e.target;
    let CartItemRow = CartItem.parentElement.parentElement;
    let ItemId = CartItemRow.getElementsByClassName('id')[0].innerText;
    let ItemName = CartItemRow.getElementsByClassName('name')[0].innerText;
    let ItemPrice = CartItemRow.getElementsByClassName('price')[0].innerText;
    CartItems(ItemId, ItemName, ItemPrice);
}

function CartItems(ItemId, ItemName, ItemPrice) {
    let cartRow = document.createElement('table');
    //cartRow.classList.add('table');
    // cartRow.innerText = ItemName;
    let cartItems = document.getElementsByClassName('cart-product')[0];
    let cartRowContent = `
    <td>${ItemId}</td>
    <td id="name">${ItemName}</td>
    <td>${ItemPrice}</td>
    <td><button class="btn-danger">Remove</button></td>
    `;
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem);
    
    
    
}
