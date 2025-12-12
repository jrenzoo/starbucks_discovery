var drinksList = [
    { name: "Caramel Macchiato", description: "Espresso with vanilla syrup, steamed milk, and caramel drizzle" },
    { name: "Iced White Mocha", description: "Espresso with white chocolate sauce and milk over ice" },
    { name: "Chai Tea Latte", description: "Black tea infused with cinnamon, clove, and other spices" },
    { name: "Pink Drink", description: "Strawberry Acai Refresher with coconut milk" },    
    { name: "Cold Brew", description: "Smooth, bold coffee slowly steeped for 20 hours" },
    { name: "Matcha Latte", description: "Sweetened matcha green tea with steamed milk" },
    { name: "Vanilla Sweet Cream Cold Brew", description: "Cold brew topped with vanilla sweet cream" },
    { name: "Iced Caramel Macchiato", description: "Vanilla syrup, milk, espresso, and caramel drizzle over ice" },
    { name: "Caffe Americano", description: "Espresso shots topped with hot water" },
    { name: "Cappuccino", description: "Dark, rich espresso with steamed milk foam" },
    { name: "Flat White", description: "Ristretto shots with steamed whole milk" },
    { name: "Iced Shaken Espresso", description: "Espresso shaken with ice and a splash of milk" },
    { name: "Caffè Latte", description: "Espresso with steamed milk and light foam" },
    { name: "Mocha", description: "Espresso with mocha sauce, steamed milk, and whipped cream" },
    { name: "White Chocolate Mocha", description: "Espresso with white chocolate sauce and steamed milk" },
    { name: "Caramel Brulée Latte", description: "Espresso with caramel brulée sauce and steamed milk" },
    { name: "Peppermint Mocha", description: "Espresso with peppermint syrup, mocha sauce, and whipped cream" },
    { name: "Chestnut Praline Latte", description: "Espresso with chestnut praline syrup and steamed milk" },
    { name: "Iced Coffee", description: "Freshly brewed coffee served over ice" },
    { name: "Nitro Cold Brew", description: "Cold brew infused with nitrogen for a creamy texture" },
    { name: "Salted Caramel Cream Cold Brew", description: "Cold brew with salted caramel cream cold foam" },
    { name: "Iced Vanilla Latte", description: "Espresso with vanilla syrup and milk over ice" },
    { name: "Iced Caffe Mocha", description: "Espresso with mocha sauce and milk over ice" },
    { name: "Dragon Drink", description: "Mango Dragonfruit Refresher with coconut milk" },
    { name: "Mango Dragonfruit Refresher", description: "Tropical mango and dragonfruit flavors" },
    { name: "Strawberry Acai Refresher", description: "Sweet strawberry and acai flavors with green coffee extract" },
    { name: "Iced Peach Green Tea", description: "Green tea with peach flavors and ice" },
    { name: "Iced Black Tea", description: "Premium black tea shaken with ice" },
    { name: "Iced Green Tea", description: "Green tea shaken with ice" },
    { name: "Iced Passion Tango Tea", description: "Herbal tea with hibiscus and lemongrass" },
    { name: "London Fog Tea Latte", description: "Earl Grey tea with vanilla syrup and steamed milk" },
    { name: "Hot Chocolate", description: "Steamed milk with mocha sauce and whipped cream" },
    { name: "White Hot Chocolate", description: "Steamed milk with white chocolate sauce" },
    { name: "Steamer", description: "Steamed milk with your choice of syrup" },
    { name: "Vanilla Bean Frappuccino", description: "Vanilla bean and milk blended with ice" },
    { name: "Caramel Frappuccino", description: "Coffee and caramel blended with milk and ice" },
    { name: "Mocha Frappuccino", description: "Coffee and mocha sauce blended with milk and ice" },
    { name: "Coffee Frappuccino", description: "Classic coffee blended with milk and ice" },
    { name: "Strawberry Frappuccino", description: "Strawberry puree blended with milk and ice" },
    { name: "Iced Brown Sugar Oat Milk Shaken Espresso", description: "Espresso with brown sugar and oat milk" },
    { name: "Iced Pumpkin Cream Chai", description: "Chai tea latte with pumpkin cream cold foam" },
];

window.onload = function() {
    getWeather();
    getAdvice();
};

function getWeather() {
    var url = 'https://api.open-meteo.com/v1/forecast?latitude=38.63&longitude=-90.20&current=temperature_2m&temperature_unit=fahrenheit';
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showWeather(data);
        })
        .catch(function(error) {
            document.getElementById('weatherDisplay').innerHTML = '<p>Weather not available right now</p>';
        });
}

function showWeather(data) {
    var temp = data.current.temperature_2m;
    var html = '<p><strong>Current Temperature:</strong> ' + temp + '°F</p>';
    
    document.getElementById('weatherDisplay').innerHTML = html;
    
    var message = '';
    if (temp < 50) {
        message = ' It\'s cold! Try something hot like a Caramel Macchiato';
    } else if (temp < 75) {
        message = ' Nice weather today! Any drink would be perfect';
    } else {
        message = ' Hot outside! Get something iced like a Cold Brew';
    }
    
    document.getElementById('weatherRecommendation').innerHTML = '<p>' + message + '</p>';
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById('adviceDisplay').innerHTML = '<p>"' + data.slip.advice + '"</p>';
        })
        .catch(function(error) {
            document.getElementById('adviceDisplay').innerHTML = '<p>Advice unavailable</p>';
        });
}

document.getElementById('newAdviceBtn').addEventListener('click', function() {
    getAdvice();
});

document.getElementById('surpriseBtn').addEventListener('click', function() {
    var randomNum = Math.floor(Math.random() * drinksList.length);
    var drink = drinksList[randomNum];
    
    var html = '<h3>' + drink.name + '</h3>';
    html += '<p>' + drink.description + '</p>';
    html += '<p style="margin-top: 20px; color: #00704A;"><strong>Try it at your local Starbucks!</strong></p>';
    
    document.getElementById('randomDrink').innerHTML = html;
    document.getElementById('resultModal').style.display = 'block';
});

var modal = document.getElementById('resultModal');
var closeButton = document.getElementsByClassName('close')[0];

closeButton.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
