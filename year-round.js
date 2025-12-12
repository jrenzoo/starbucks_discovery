var menuDrinks = {
    hotEspresso: [
        { name: 'Caffe Americano', calories: 15, caffeine: '225mg', sugar: '0g', defaultMilk: 'None', image: 'caffe-americano.jpg' },
        { name: 'Caffe Latte', calories: 190, caffeine: '150mg', sugar: '18g', defaultMilk: '2% Milk', image: 'caffe-latte.jpg' },
        { name: 'Cappuccino', calories: 140, caffeine: '150mg', sugar: '12g', defaultMilk: '2% Milk', image: 'cappuccino.jpg' },
        { name: 'Flat White', calories: 220, caffeine: '195mg', sugar: '17g', defaultMilk: 'Whole Milk', image: 'flat-white.jpg' },
        { name: 'Caramel Macchiato', calories: 250, caffeine: '150mg', sugar: '33g', defaultMilk: '2% Milk', image: 'caramel-macchiato.jpg' },
        { name: 'White Chocolate Mocha', calories: 430, caffeine: '150mg', sugar: '53g', defaultMilk: '2% Milk', image: 'white-chocolate-mocha.jpg' },
        { name: 'Caffe Mocha', calories: 370, caffeine: '175mg', sugar: '35g', defaultMilk: '2% Milk', image: 'caffe-mocha.jpg' },
        { name: 'Espresso', calories: 5, caffeine: '75mg', sugar: '0g', defaultMilk: 'None', image: 'espresso.jpg' },
        { name: 'Caffe Latte with Protein', calories: 250, caffeine: '150mg', sugar: '20g', defaultMilk: '2% Milk + Protein', image: 'caffe-latte-with-protein.jpg' },
        { name: 'Matcha Latte with Protein', calories: 290, caffeine: '80mg', sugar: '34g', defaultMilk: '2% Milk + Protein', image: 'matcha-latte-with-protein.jpg' }
    ],
    coldCoffees: [
        { name: 'Iced Coffee', calories: 80, caffeine: '165mg', sugar: '14g', defaultMilk: '2% Milk', image: 'iced-coffee.jpg' },
        { name: 'Cold Brew', calories: 5, caffeine: '205mg', sugar: '0g', defaultMilk: 'None', image: 'cold-brew.jpg' },
        { name: 'Nitro Cold Brew', calories: 5, caffeine: '280mg', sugar: '0g', defaultMilk: 'None', image: 'nitro-cold-brew.jpg' },
        { name: 'Vanilla Sweet Cream Cold Brew', calories: 110, caffeine: '185mg', sugar: '14g', defaultMilk: 'None', image: 'vanilla-sweet-cream-cold-brew.jpg' },
        { name: 'Salted Caramel Cream Cold Brew', calories: 230, caffeine: '185mg', sugar: '25g', defaultMilk: 'None', image: 'salted-caramel-cream-cold-brew.jpg' },
        { name: 'Iced Shaken Espresso', calories: 100, caffeine: '225mg', sugar: '14g', defaultMilk: '2% Milk', image: 'iced-shaken-espresso.jpg' },
        { name: 'Iced Brown Sugar Oat Milk Shaken Espresso', calories: 120, caffeine: '255mg', sugar: '13g', defaultMilk: 'Oat Milk', image: 'iced-brown-sugar-oat-milk-shaken-espresso.jpg' },
        { name: 'Iced Caffe Latte', calories: 130, caffeine: '150mg', sugar: '11g', defaultMilk: '2% Milk', image: 'iced-caffe-latte.jpg' },
        { name: 'Iced Caramel Macchiato', calories: 250, caffeine: '150mg', sugar: '34g', defaultMilk: '2% Milk', image: 'iced-caramel-macchiato.jpg' },
        { name: 'Iced White Chocolate Mocha', calories: 420, caffeine: '150mg', sugar: '53g', defaultMilk: '2% Milk', image: 'iced-white-chocolate-mocha.jpg' },
        { name: 'Iced Caffe Mocha', calories: 350, caffeine: '175mg', sugar: '35g', defaultMilk: '2% Milk', image: 'iced-caffe-mocha.jpg' }
    ],
    hotTeas: [
        { name: 'Chai Tea Latte', calories: 240, caffeine: '95mg', sugar: '42g', defaultMilk: '2% Milk', image: 'chai-tea-latte.jpg' },
        { name: 'Matcha Latte', calories: 240, caffeine: '80mg', sugar: '32g', defaultMilk: '2% Milk', image: 'matcha-latte.jpg' },
        { name: 'London Fog Tea Latte', calories: 180, caffeine: '40mg', sugar: '27g', defaultMilk: '2% Milk', image: 'london-fog-tea-latte.jpg' },
        { name: 'Hot Chocolate', calories: 370, caffeine: '25mg', sugar: '43g', defaultMilk: '2% Milk', image: 'hot-chocolate.jpg' },
        { name: 'White Hot Chocolate', calories: 420, caffeine: '0mg', sugar: '53g', defaultMilk: '2% Milk', image: 'white-hot-chocolate.jpg' }
    ],
    refreshers: [
        { name: 'Strawberry Acai Refresher', calories: 90, caffeine: '45mg', sugar: '20g', defaultMilk: 'None', image: 'strawberry-acai-refresher.jpg' },
        { name: 'Mango Dragonfruit Refresher', calories: 90, caffeine: '45mg', sugar: '19g', defaultMilk: 'None', image: 'mango-dragonfruit-refresher.jpg' },
        { name: 'Pink Drink', calories: 140, caffeine: '45mg', sugar: '24g', defaultMilk: 'Coconut Milk', image: 'pink-drink.jpg' },
        { name: 'Dragon Drink', calories: 130, caffeine: '45mg', sugar: '21g', defaultMilk: 'Coconut Milk', image: 'dragon-drink.jpg' }
    ],
    icedTeas: [
        { name: 'Iced Peach Green Tea', calories: 60, caffeine: '25mg', sugar: '15g', defaultMilk: 'None', image: 'iced-peach-green-tea.jpg' },
        { name: 'Iced Black Tea', calories: 0, caffeine: '25mg', sugar: '0g', defaultMilk: 'None', image: 'iced-black-tea.jpg' },
        { name: 'Iced Green Tea', calories: 0, caffeine: '25mg', sugar: '0g', defaultMilk: 'None', image: 'iced-green-tea.jpg' },
        { name: 'Iced Passion Tango Tea', calories: 0, caffeine: '0mg', sugar: '0g', defaultMilk: 'None', image: 'iced-passion-tango-tea.jpg' },
        { name: 'Iced Chai Tea Latte', calories: 240, caffeine: '95mg', sugar: '42g', defaultMilk: '2% Milk', image: 'iced-chai-tea-latte.jpg' },
        { name: 'Iced Matcha Latte', calories: 200, caffeine: '80mg', sugar: '28g', defaultMilk: '2% Milk', image: 'iced-matcha-latte.jpg' }
    ],
    frappuccinos: [
        { name: 'Caramel Frappuccino', calories: 380, caffeine: '100mg', sugar: '54g', defaultMilk: 'Whole Milk', image: 'caramel-frappuccino.jpg' },
        { name: 'Mocha Frappuccino', calories: 370, caffeine: '100mg', sugar: '51g', defaultMilk: 'Whole Milk', image: 'mocha-frappuccino.jpg' },
        { name: 'Coffee Frappuccino', calories: 230, caffeine: '95mg', sugar: '36g', defaultMilk: 'Whole Milk', image: 'coffee-frappuccino.jpg' },
        { name: 'Vanilla Bean Frappuccino', calories: 380, caffeine: '0mg', sugar: '57g', defaultMilk: 'Whole Milk', image: 'vanilla-bean-frappuccino.jpg' },
        { name: 'Strawberry Frappuccino', calories: 330, caffeine: '0mg', sugar: '49g', defaultMilk: 'Whole Milk', image: 'strawberry-frappuccino.jpg' },
        { name: 'Caramel Ribbon Crunch Frappuccino', calories: 470, caffeine: '85mg', sugar: '62g', defaultMilk: 'Whole Milk', image: 'caramel-ribbon-crunch-frappuccino.jpg' }
    ]
};

function loadDrinks() {
    var categories = ['hotEspresso', 'coldCoffees', 'hotTeas', 'refreshers', 'icedTeas', 'frappuccinos'];
    
    for (var i = 0; i < categories.length; i++) {
        var cat = categories[i];
        var container = document.getElementById(cat);
        var drinks = menuDrinks[cat];
        
        for (var j = 0; j < drinks.length; j++) {
            var drink = drinks[j];
            var div = document.createElement('div');
            div.className = 'menu-drink';
            div.textContent = drink.name;
            div.onclick = (function(d) {
                return function() {
                    showDrinkInfo(d);
                };
            })(drink);
            container.appendChild(div);
        }
    }
}

function showDrinkInfo(drink) {
    var html = '<h2>' + drink.name + '</h2>';
    html += '<img src="images/' + drink.image + '" class="drink-info-img" alt="' + drink.name + '">';
    html += '<div class="nutrition-info">';
    html += '<h3>Nutritional Information</h3>';
    html += '<p><strong>Calories:</strong> ' + drink.calories + '</p>';
    html += '<p><strong>Caffeine:</strong> ' + drink.caffeine + '</p>';
    html += '<p><strong>Sugar:</strong> ' + drink.sugar + '</p>';
    html += '<p><strong>Default Milk:</strong> ' + drink.defaultMilk + '</p>';
    html += '<p class="info-note">Grande size (16 fl oz) | Default customization</p>';
    html += '</div>';
    
    document.getElementById('drinkInfo').innerHTML = html;
    document.getElementById('drinkInfoModal').style.display = 'block';
}

var modal = document.getElementById('drinkInfoModal');
var closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

loadDrinks();