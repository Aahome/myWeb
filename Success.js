const selectedItem = localStorage.getItem('selectedItem');
const prices = {
    'Nugget': 5,
    'Burger': 8,
    'Pizza': 12,
    'Fries': 4,
    'Cola': 3
};

const quantity = parseFloat(localStorage.getItem('quantity'));
const totalPrice = (prices[selectedItem] * quantity).toFixed(2);

const thankYouText = document.getElementById('thankYouText');
thankYouText.textContent = `Thank you for buying ${selectedItem} for $${totalPrice}`;

const queueNumber = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
document.getElementById('queueNumber').textContent = queueNumber;