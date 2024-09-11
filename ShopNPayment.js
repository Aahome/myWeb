function selectItem(itemId) {
    localStorage.setItem('selectedItem', itemId);
    window.location.href = 'Payment.html';
}

const prices = {
    'Nugget': 5,   
    'Burger': 8,   
    'Pizza': 12,
    'Fries': 4,
    'Cola': 3
};

function loadPaymentPage() {
    let selectedItem = localStorage.getItem('selectedItem');
    let basePrice = prices[selectedItem];

    const paymentImage = document.getElementById('paymentImage');
    const fName = document.getElementById('fName');
    
    if (selectedItem === 'Nugget') {
        paymentImage.src = 'Asset/Geda.png';
        fName.textContent = selectedItem;
    } else if (selectedItem === 'Pizza') {
        paymentImage.src = 'Asset/pizza.jpg';
        fName.textContent = selectedItem;
    } else if (selectedItem === 'Burger') {
        paymentImage.src = 'Asset/Burger22.png';
        fName.textContent = selectedItem;
    } else if (selectedItem === 'Fries') {
        paymentImage.src = 'Asset/fries.png';
        fName.textContent = selectedItem;
    } else if (selectedItem === 'Cola') {
        paymentImage.src = 'Asset/coke.png';
        fName.textContent = selectedItem;
    }

    updatePrice();
}

function updatePrice() {
    const quantity = parseFloat(document.getElementById('Quantity').value);
    const priceDisplay = document.getElementById('priceDisplay');
    const selectedItem = localStorage.getItem('selectedItem');
    const basePrice = prices[selectedItem];

    if (!isNaN(quantity) && quantity >= 1) {
        const totalPrice = basePrice * quantity;
        priceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    } else {
        priceDisplay.textContent = 'Total Price: $0';
    } 
}

if (window.location.pathname.includes('Payment.html')) {
    loadPaymentPage();
}


function redirectToNextPage() {
    window.location.href = "Success.html";
}

// Form validation function
function validateForm() {
    const quantity = parseFloat(document.getElementById('Quantity').value);
    const sauce = parseFloat(document.getElementById('choose').value);
    const errorMessage = document.getElementById('error-message');
    const errorMessage2 = document.getElementById('error-message2');
    

    if (isNaN(quantity) || quantity <= 0) {
        errorMessage.style.display = 'block';
        setTimeout(() => { errorMessage.style.display = 'none'; }, 3000);
    } else if (sauce == 1) {
        errorMessage2.style.display = 'block';
        setTimeout(() => { errorMessage2.style.display = 'none'; }, 3000);
    } else {
        errorMessage.style.display = 'none';
        errorMessage2.style.display = 'none';

        localStorage.setItem('quantity', document.getElementById('Quantity').value);

        redirectToNextPage();
    }
}
