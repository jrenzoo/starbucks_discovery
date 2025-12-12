var currentDrinks = [
    {
        name: 'Pumpkin Spice Latte',
        desc: 'Classic fall favorite with pumpkin, cinnamon, nutmeg and clove',
        available: true,
        image: 'pumpkin-spice-latte.jpg'
    },
    {
        name: 'Iced Pumpkin Cream Chai',
        desc: 'Chai latte topped with pumpkin cream cold foam',
        available: true,
        image: 'iced-pumpkin-cream-chai.jpg'
    },
    {
        name: 'Peppermint Mocha',
        desc: 'Espresso with peppermint syrup, mocha sauce, and whipped cream',
        available: true,
        image: 'peppermint-mocha.jpg'
    },
    {
        name: 'Chestnut Praline Latte',
        desc: 'Espresso with chestnut praline syrup and steamed milk',
        available: true,
        image: 'chestnut-praline-latte.jpg'
    },
    {
        name: 'Caramel Brulee Latte',
        desc: 'Espresso with caramel brulee sauce and steamed milk',
        available: true,
        image: 'caramel-brulee-latte.jpg'
    },
    {
        name: 'Iced Sugar Cookie Almond Milk Latte',
        desc: 'Blonde espresso with sugar cookie syrup and almond milk',
        available: true,
        image: 'iced-sugar-cookie-almond-milk-latte.jpg'
    }
];

var endedDrinks = [
    {
        name: 'Apple Crisp Macchiato',
        desc: 'Layered with apple brown sugar syrup and spiced apple drizzle',
        ended: true,
        image: 'apple-crisp-macchiato.jpg'
    }
];

var comingDrinks = [
    {
        name: 'Pistachio Latte',
        desc: 'Espresso with pistachio sauce and steamed milk',
        days: 47,
        image: 'pistachio-latte.jpg'
    }
];

var favorites = [];

function showCurrentDrinks() {
    var grid = document.getElementById('currentDrinks');
    grid.innerHTML = '';
    
    for (var i = 0; i < currentDrinks.length; i++) {
        var drink = currentDrinks[i];
        
        var card = document.createElement('div');
        card.className = 'seasonal-card';
        
        var isFav = favorites.indexOf(drink.name) > -1;
        var heartClass = isFav ? 'heart-btn favorited' : 'heart-btn';
        
        var html = '';
        html = html + '<img src="images/' + drink.image + '" class="seasonal-img" alt="' + drink.name + '">';
        html = html + '<h4>' + drink.name + '</h4>';
        html = html + '<p class="status available">Available Now!</p>';
        html = html + '<p class="desc">' + drink.desc + '</p>';
        html = html + '<button class="' + heartClass + '" onclick="toggleFavorite(\'' + drink.name + '\')">Add to Favorites</button>';
        
        card.innerHTML = html;
        grid.appendChild(card);
    }
}

function showEndedDrinks() {
    var grid = document.getElementById('endedDrinks');
    grid.innerHTML = '';
    
    for (var i = 0; i < endedDrinks.length; i++) {
        var drink = endedDrinks[i];
        
        var card = document.createElement('div');
        card.className = 'seasonal-card ended-card';
        
        var html = '';
        html = html + '<img src="images/' + drink.image + '" class="seasonal-img" alt="' + drink.name + '">';
        html = html + '<h4>' + drink.name + '</h4>';
        html = html + '<p class="status ended">Season Ended</p>';
        html = html + '<p class="desc">' + drink.desc + '</p>';
        
        card.innerHTML = html;
        grid.appendChild(card);
    }
}

function showComingSoon() {
    var grid = document.getElementById('comingSoon');
    grid.innerHTML = '';
    
    for (var i = 0; i < comingDrinks.length; i++) {
        var drink = comingDrinks[i];
        
        var card = document.createElement('div');
        card.className = 'seasonal-card';
        
        var isFav = favorites.indexOf(drink.name) > -1;
        var heartClass = isFav ? 'heart-btn favorited' : 'heart-btn';
        
        var html = '';
        html = html + '<img src="images/' + drink.image + '" class="seasonal-img" alt="' + drink.name + '">';
        html = html + '<h4>' + drink.name + '</h4>';
        html = html + '<p class="status coming">Returns in ' + drink.days + ' days</p>';
        html = html + '<p class="desc">' + drink.desc + '</p>';
        html = html + '<button class="' + heartClass + '" onclick="toggleFavorite(\'' + drink.name + '\')">Add to Favorites</button>';
        
        card.innerHTML = html;
        grid.appendChild(card);
    }
}

function toggleFavorite(drinkName) {
    var index = favorites.indexOf(drinkName);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(drinkName);
    }
    
    showCurrentDrinks();
    showComingSoon();
    showFavorites();
}

function showFavorites() {
    var grid = document.getElementById('favoritesGrid');
    document.getElementById('favCount').textContent = favorites.length;
    
    if (favorites.length == 0) {
        grid.innerHTML = '<p class="empty-msg">No favorites yet! Click the heart on any drink to add it.</p>';
        return;
    }
    
    grid.innerHTML = '';
    
    for (var i = 0; i < favorites.length; i++) {
        var name = favorites[i];
        
        var current = null;
        for (var j = 0; j < currentDrinks.length; j++) {
            if (currentDrinks[j].name == name) {
                current = currentDrinks[j];
                break;
            }
        }
        
        var coming = null;
        for (var k = 0; k < comingDrinks.length; k++) {
            if (comingDrinks[k].name == name) {
                coming = comingDrinks[k];
                break;
            }
        }
        
        var card = document.createElement('div');
        card.className = 'fav-card';
        
        var html = '<h4>' + name + '</h4>';
        
        if (current) {
            html = html + '<p class="status available">Available</p>';
        } else if (coming) {
            html = html + '<p class="status coming">' + coming.days + ' days</p>';
        }
        
        html = html + '<button class="remove-btn" onclick="removeFavorite(\'' + name + '\')">Remove</button>';
        
        card.innerHTML = html;
        grid.appendChild(card);
    }
}

function removeFavorite(name) {
    var index = favorites.indexOf(name);
    if (index > -1) {
        favorites.splice(index, 1);
    }
    showCurrentDrinks();
    showComingSoon();
    showFavorites();
}

showCurrentDrinks();
showEndedDrinks();
showComingSoon();
showFavorites();