let cart = [];
let total = 0;

const cartItems = document.getElementById('cart-items');

function addToCart(itemName, itemPrice) {
    const len = cart.length+1;
    cart.push({ name: itemName, price: itemPrice, id: len });
    total += itemPrice;

    const li = document.createElement('li');
    li.innerHTML = `${itemName} - Ksh ${itemPrice.toFixed(2)}`; // Display price in Kshs

    const btn = document.createElement('button');
    li.setAttribute('id', `cart-button-${len}`)

    btn.innerHTML = 'x';
    li.appendChild(btn);

    btn.addEventListener('click', ()=> removeElem(`cart-button-${len}`, itemPrice))

    cartItems.appendChild(li);

    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-price').textContent = `Total: Ksh ${total.toFixed(2)}`;

    document.getElementById('cart').style.display = 'block'; // Show cart when item added
}

const removeElem = (id, price) => {
    const item = document.getElementById(id);
    total -= price;

    if(item) cartItems.removeChild(item);

    document.getElementById('total-price').textContent = `Total: Ksh ${total.toFixed(2)}`;
    document.getElementById('cart-count').textContent = cart.length;

}


const items = cartItems.getElementsByClassName

const deleteItem = (item) => {
    // const updated = cart.filter(i=> i.name !== item.name);
    const lis = cartItems.getElementsByTagName('li');
    const lists = [...lis];
    lists.forEach((l, i)=> {
        if(l.innerHTML.includes(item.name)){
            lists.splice(i, 1)
        }
    })
    cartItems.innerHTML = lists;

    // updated.forEach(newItem => {
    //     const li = document.createElement('li');
    //     li.textContent = `${newItem.name} - Ksh ${newItem.price.toFixed(2)}`;
    //     cartItems.appendChild(li);
    // })


}


function closeCart() {
    document.getElementById('cart').style.display = 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = [];
        total = 0;
        updateCartDisplay();
        closeCart(); // Close the cart after checkout
    }
}
