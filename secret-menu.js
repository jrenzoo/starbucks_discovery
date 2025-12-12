var secretDrinks = [
    {
        name: 'Pink Drink',
        category: 'fruity',
        recipe: 'Strawberry Acai Refresher + Coconut milk',
        howToOrder: 'Ask for a Strawberry Acai Refresher with coconut milk instead of water',
        difficulty: 'Easy',
        description: 'Light and refreshing pink drink thats perfect for summer',
        image: 'pink-drink.jpg'
    },
    {
        name: 'Cookies and Cream',
        category: 'chocolate',
        recipe: 'White Mocha Frappuccino + Java chips',
        howToOrder: 'Get a White Mocha Frappuccino and add java chips',
        difficulty: 'Easy',
        description: 'Sweet and chocolatey like cookies and cream ice cream',
        image: 'cookies-and-cream.jpg'
    },
    {
        name: 'Nutella Frappuccino',
        category: 'chocolate',
        recipe: 'Coffee Frappuccino + Hazelnut syrup + Mocha sauce',
        howToOrder: 'Order a Coffee Frappuccino with hazelnut syrup and mocha sauce',
        difficulty: 'Easy',
        description: 'Tastes just like Nutella in a cup',
        image: 'nutella-frappuccino.jpg'
    },
    {
        name: 'Thin Mint Frappuccino',
        category: 'chocolate',
        recipe: 'Mocha Frappuccino + Peppermint syrup + Java chips',
        howToOrder: 'Order a Mocha Frappuccino with peppermint syrup and java chips',
        difficulty: 'Easy',
        description: 'Tastes like the Girl Scout cookie',
        image: 'thin-mint-frappuccino.jpg'
    },
    {
        name: 'Ferrero Rocher Frappuccino',
        category: 'chocolate',
        recipe: 'Mocha Frappuccino + Hazelnut syrup',
        howToOrder: 'Get a Mocha Frappuccino and add hazelnut syrup',
        difficulty: 'Easy',
        description: 'Like the fancy chocolate candy',
        image: 'ferrero-rocher-frappuccino.jpg'
    },
    {
        name: 'Liquid Cocaine',
        category: 'coffee',
        recipe: 'White Mocha + 4 shots of espresso',
        howToOrder: 'Order a White Mocha with 4 shots of espresso',
        difficulty: 'Easy',
        description: 'Super strong coffee drink for maximum energy',
        image: 'liquid-cocaine.jpg'
    },
    {
        name: 'Dragon Drink',
        category: 'fruity',
        recipe: 'Mango Dragonfruit Refresher + Coconut milk',
        howToOrder: 'Ask for a Mango Dragonfruit Refresher with coconut milk instead of water',
        difficulty: 'Easy',
        description: 'Tropical and fruity pink drink',
        image: 'dragon-drink.jpg'
    },
    {
        name: 'Snickerdoodle Frappuccino',
        category: 'coffee',
        recipe: 'Coffee Frappuccino + Cinnamon dolce syrup + White mocha sauce',
        howToOrder: 'Get a Coffee Frappuccino with cinnamon dolce syrup and white mocha sauce',
        difficulty: 'Medium',
        description: 'Tastes like the cinnamon sugar cookie',
        image: 'snickerdoodle-frappuccino.jpg'
    },
    {
        name: 'Twix Frappuccino',
        category: 'chocolate',
        recipe: 'Caramel Frappuccino + Hazelnut syrup + Java chips',
        howToOrder: 'Order a Caramel Frappuccino with hazelnut syrup and java chips',
        difficulty: 'Medium',
        description: 'Caramel and chocolate like the candy bar',
        image: 'twix-frappuccino.jpg'
    },
    {
        name: 'Cotton Candy Frappuccino',
        category: 'fruity',
        recipe: 'Vanilla Bean Frappuccino + Raspberry syrup',
        howToOrder: 'Get a Vanilla Bean Frappuccino and add raspberry syrup',
        difficulty: 'Easy',
        description: 'Super sweet and tastes like cotton candy',
        image: 'cotton-candy-frappuccino.jpg'
    },
    {
        name: 'Dirty Chai',
        category: 'tea',
        recipe: 'Chai Tea Latte + Espresso shot',
        howToOrder: 'Order a Chai Tea Latte and add a shot of espresso',
        difficulty: 'Easy',
        description: 'Spicy chai with a coffee kick',
        image: 'dirty-chai.jpg'
    },
    {
        name: 'Medicine Ball',
        category: 'tea',
        recipe: 'Jade Citrus Mint Tea + Peach Tranquility Tea + Lemonade + Honey',
        howToOrder: 'Ask for half Jade Citrus Mint, half Peach Tranquility, add lemonade and honey',
        difficulty: 'Hard',
        description: 'Perfect when youre feeling sick',
        image: 'medicine-ball.jpg'
    },
    {
        name: 'Biscotti Frappuccino',
        category: 'coffee',
        recipe: 'Coffee Frappuccino + Vanilla syrup + Almond syrup',
        howToOrder: 'Get a Coffee Frappuccino with vanilla and almond syrup',
        difficulty: 'Medium',
        description: 'Tastes like the crunchy Italian cookie',
        image: 'biscotti-frappuccino.jpg'
    },
    {
        name: 'Strawberry Matcha',
        category: 'tea',
        recipe: 'Iced Matcha Latte + Strawberry cold foam',
        howToOrder: 'Order an Iced Matcha Latte and ask for strawberry puree blended into vanilla sweet cream cold foam on top',
        difficulty: 'Medium',
        description: 'Green tea with sweet strawberry foam on top',
        image: 'strawberry-matcha.jpg'
    },
    {
        name: 'Caramel Snickerdoodle Macchiato',
        category: 'coffee',
        recipe: 'Caramel Macchiato + Cinnamon dolce syrup',
        howToOrder: 'Get a Caramel Macchiato and add cinnamon dolce syrup',
        difficulty: 'Easy',
        description: 'Caramel and cinnamon sugar combo',
        image: 'caramel-snickerdoodle-macchiato.jpg'
    },
    {
        name: 'Mango Matcha',
        category: 'tea',
        recipe: 'Iced Matcha Latte + Mango Dragonfruit base',
        howToOrder: 'Order a Matcha Latte with mango dragonfruit refresher base instead of water',
        difficulty: 'Medium',
        description: 'Tropical mango with green tea',
        image: 'mango-matcha.jpg'
    },
    {
        name: 'Strawberry Shortcake Frappuccino',
        category: 'fruity',
        recipe: 'Strawberry Frappuccino + Vanilla syrup + Whipped cream',
        howToOrder: 'Get a Strawberry Frappuccino, add vanilla syrup, extra whipped cream',
        difficulty: 'Easy',
        description: 'Tastes like strawberry cake',
        image: 'strawberry-shortcake-frappuccino.jpg'
    },
    {
        name: 'Birthday Cake Frappuccino',
        category: 'fruity',
        recipe: 'Vanilla Bean Frappuccino + Hazelnut syrup + Raspberry syrup',
        howToOrder: 'Order Vanilla Bean Frappuccino with hazelnut and raspberry syrup',
        difficulty: 'Medium',
        description: 'Sweet like funfetti birthday cake',
        image: 'birthday-cake-frappuccino.jpg'
    },
    {
        name: 'Raspberry Mocha',
        category: 'chocolate',
        recipe: 'Caffe Mocha + Raspberry syrup',
        howToOrder: 'Get a Caffe Mocha and add raspberry syrup',
        difficulty: 'Easy',
        description: 'Chocolate and raspberry combo',
        image: 'raspberry-mocha.jpg'
    },
    {
        name: 'Cinnamon Roll Frappuccino',
        category: 'coffee',
        recipe: 'Coffee Frappuccino + Cinnamon dolce syrup + White mocha + Caramel drizzle',
        howToOrder: 'Order Coffee Frappuccino with cinnamon dolce, white mocha, and caramel drizzle',
        difficulty: 'Hard',
        description: 'Tastes just like a cinnamon roll',
        image: 'cinnamon-roll-frappuccino.jpg'
    },
    {
        name: 'Oreo Frappuccino',
        category: 'chocolate',
        recipe: 'Double Chocolate Chip Frappuccino + White mocha',
        howToOrder: 'Get a Mocha Frappuccino with white mocha and java chips',
        difficulty: 'Easy',
        description: 'Black and white like an Oreo cookie',
        image: 'oreo-frappuccino.jpg'
    },

    {
        name: 'Strawberry Lemonade',
        category: 'fruity',
        recipe: 'Strawberry Acai Refresher + Lemonade',
        howToOrder: 'Ask for Strawberry Acai with lemonade instead of water',
        difficulty: 'Easy',
        description: 'Sweet strawberry lemonade refresher',
        image: 'strawberry-lemonade.jpg'
    },
    {
        name: 'Purple Drink',
        category: 'fruity',
        recipe: 'Iced Passion Tango Tea + Vanilla syrup + Coconut milk',
        howToOrder: 'Get Passion Tango Tea with vanilla syrup and coconut milk',
        difficulty: 'Medium',
        description: 'Pretty purple drink thats fruity and creamy',
        image: 'purple-drink.jpg'
    },
    {
        name: 'Chocolate Covered Strawberry',
        category: 'chocolate',
        recipe: 'Strawberry Frappuccino + Mocha sauce + Java chips',
        howToOrder: 'Order Strawberry Frappuccino with mocha sauce and java chips',
        difficulty: 'Medium',
        description: 'Strawberry and chocolate combo',
        image: 'chocolate-covered-strawberry.jpg'
    },
    {
        name: 'Pumpkin Spice Cold Brew',
        category: 'coffee',
        recipe: 'Cold Brew + Pumpkin sauce + Vanilla sweet cream cold foam',
        howToOrder: 'Get Cold Brew with pumpkin sauce and vanilla sweet cream cold foam',
        difficulty: 'Medium',
        description: 'Fall flavors in a cold drink',
        image: 'pumpkin-spice-cold-brew.jpg'
    },
    {
        name: 'Caramel Brulee Cold Brew',
        category: 'coffee',
        recipe: 'Cold Brew + Caramel brulee sauce + Sweet cream',
        howToOrder: 'Order Cold Brew with caramel brulee sauce and sweet cream',
        difficulty: 'Easy',
        description: 'Rich caramel in cold coffee',
        image: 'caramel-brulee-cold-brew.jpg'
    },
    {
        name: 'Triple Mocha Frappuccino',
        category: 'chocolate',
        recipe: 'Mocha Frappuccino + White mocha + Java chips',
        howToOrder: 'Get Mocha Frappuccino, add white mocha and java chips',
        difficulty: 'Easy',
        description: 'Three types of chocolate in one drink',
        image: 'triple-mocha-frappuccino.jpg'
    },
    {
        name: 'Peppermint Hot Chocolate',
        category: 'chocolate',
        recipe: 'Hot Chocolate + Peppermint syrup',
        howToOrder: 'Order Hot Chocolate and add peppermint syrup',
        difficulty: 'Easy',
        description: 'Minty chocolate for cold days',
        image: 'peppermint-hot-chocolate.jpg'
    },
    {
        name: 'White Chocolate Raspberry Mocha',
        category: 'chocolate',
        recipe: 'White Chocolate Mocha + Raspberry syrup',
        howToOrder: 'Get White Chocolate Mocha and add raspberry syrup',
        difficulty: 'Easy',
        description: 'Sweet white chocolate with berry twist',
        image: 'white-chocolate-raspberry-mocha.jpg'
    }
];

var currentFilter = 'all';
var displayedDrinks = [];

function showDrinks() {
    var grid = document.getElementById('drinksGrid');
    grid.innerHTML = '';
    
    displayedDrinks = [];
    
    if (currentFilter == 'all') {
        displayedDrinks = secretDrinks;
    } else {
        for (var i = 0; i < secretDrinks.length; i++) {
            if (secretDrinks[i].category == currentFilter) {
                displayedDrinks.push(secretDrinks[i]);
            }
        }
    }
    
    for (var i = 0; i < displayedDrinks.length; i++) {
        var drink = displayedDrinks[i];
        
        var card = document.createElement('div');
        card.className = 'drink-card';
        
        var html = '<img src="images/' + drink.image + '" class="drink-img" alt="' + drink.name + '">';
        html += '<h3>' + drink.name + '</h3>';
        html += '<p class="drink-desc">' + drink.description + '</p>';
        html += '<div class="tags">';
        html += '<span class="tag">' + drink.category + '</span>';
        html += '<span class="tag">' + drink.difficulty + '</span>';
        html += '</div>';
        html += '<button class="view-btn" data-index="' + i + '">View Recipe</button>';
        
        card.innerHTML = html;
        grid.appendChild(card);
    }
    
    var viewBtns = document.querySelectorAll('.view-btn');
    for (var j = 0; j < viewBtns.length; j++) {
        viewBtns[j].addEventListener('click', function() {
            var idx = this.getAttribute('data-index');
            showRecipe(parseInt(idx));
        });
    }
}

function showRecipe(index) {
    var drink = displayedDrinks[index];
    
    var html = '<h2>' + drink.name + '</h2>';
    html += '<p class="modal-desc">' + drink.description + '</p>';
    html += '<div class="recipe-box">';
    html += '<h3>Recipe:</h3>';
    html += '<p>' + drink.recipe + '</p>';
    html += '</div>';
    html += '<div class="recipe-box">';
    html += '<h3>How to Order:</h3>';
    html += '<p>' + drink.howToOrder + '</p>';
    html += '</div>';
    html += '<div class="recipe-box">';
    html += '<h3>Difficulty:</h3>';
    html += '<p>' + drink.difficulty + '</p>';
    html += '</div>';
    
    document.getElementById('modalContent').innerHTML = html;
    document.getElementById('drinkModal').style.display = 'block';
}

var filterBtns = document.querySelectorAll('.filter-btn');
for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', function() {
        for (var j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove('active');
        }
        this.classList.add('active');
        
        currentFilter = this.getAttribute('data-filter');
        showDrinks();
    });
}

var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var cards = document.querySelectorAll('.drink-card');
    
    for (var i = 0; i < cards.length; i++) {
        var name = cards[i].querySelector('h3').textContent.toLowerCase();
        if (name.indexOf(searchTerm) > -1) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
});

var modal = document.getElementById('drinkModal');
var closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

showDrinks();