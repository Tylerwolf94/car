let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCartDisplay();
    document.getElementById('cart').style.display = 'block'; // Show cart when item added
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    // Display each item in the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Ksh ${item.price.toFixed(2)}`; // Display price in Kshs
        cartItems.appendChild(li);
    });

    // Update cart count and total price
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-price').textContent = `Total: Ksh ${total.toFixed(2)}`; // Display total in Kshs
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
