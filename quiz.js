var ans1 = '';
var ans2 = '';
var ans3 = '';
var ans4 = '';

var currentQ = 1;

var btns = document.querySelectorAll('.option-btn');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var q = this.getAttribute('data-q');
        var val = this.getAttribute('data-val');
        
        var qBtns = document.querySelectorAll('[data-q="' + q + '"]');
        for (var j = 0; j < qBtns.length; j++) {
            qBtns[j].classList.remove('selected');
        }
        
        this.classList.add('selected');
        
        if (q == '1') {
            ans1 = val;
            setTimeout(function() {
                document.getElementById('q1').classList.add('hidden');
                document.getElementById('q2').classList.remove('hidden');
            }, 300);
        } else if (q == '2') {
            ans2 = val;
            setTimeout(function() {
                document.getElementById('q2').classList.add('hidden');
                document.getElementById('q3').classList.remove('hidden');
            }, 300);
        } else if (q == '3') {
            ans3 = val;
            setTimeout(function() {
                document.getElementById('q3').classList.add('hidden');
                document.getElementById('q4').classList.remove('hidden');
            }, 300);
        } else if (q == '4') {
            ans4 = val;
            setTimeout(function() {
                getResult();
            }, 300);
        }
    });
}

function getResult() {
    var drinkName = '';
    var drinkDesc = '';
    var reason = '';
    
    if (ans3 == 'none' && ans2 == 'hot') {
        drinkName = 'Strawberry Frappuccino';
        drinkDesc = 'Strawberry puree blended with milk and ice';
        reason = 'Sweet and refreshing with no caffeine!';
    }
    else if (ans3 == 'none' && ans4 == 'very') {
        drinkName = 'Vanilla Bean Frappuccino';
        drinkDesc = 'Vanilla bean and milk blended with ice';
        reason = 'Sweet and creamy without any caffeine!';
    }
    else if (ans3 == 'none' && ans4 == 'balanced') {
        drinkName = 'Caramel Apple Spice';
        drinkDesc = 'Steamed apple juice with cinnamon syrup';
        reason = 'Warm and cozy with no caffeine!';
    }
    else if (ans3 == 'none' && ans4 == 'not') {
        drinkName = 'Steamer';
        drinkDesc = 'Steamed milk with your choice of syrup';
        reason = 'Simple and caffeine-free!';
    }
    else if (ans3 == 'none' && ans2 == 'cold') {
        drinkName = 'Pink Drink';
        drinkDesc = 'Strawberry Acai Refresher with coconut milk';
        reason = 'Refreshing and caffeine-free!';
    }
    else if (ans3 == 'none') {
        drinkName = 'Hot Chocolate';
        drinkDesc = 'Steamed milk with mocha sauce and whipped cream';
        reason = 'Classic and comforting without caffeine!';
    }
    else if (ans2 == 'hot' && ans3 == 'max' && ans4 == 'not') {
        drinkName = 'Caffe Americano';
        drinkDesc = 'Espresso shots topped with hot water';
        reason = 'Maximum caffeine with bold coffee flavor!';
    }
    else if (ans2 == 'hot' && ans3 == 'max' && ans4 == 'light') {
        drinkName = 'Caffè Latte';
        drinkDesc = 'Espresso with steamed milk and light foam';
        reason = 'Strong espresso with a touch of sweetness!';
    }
    else if (ans2 == 'hot' && ans3 == 'max') {
        drinkName = 'Caramel Macchiato';
        drinkDesc = 'Espresso with vanilla syrup, steamed milk, and caramel drizzle';
        reason = 'Perfect energy boost with delicious flavor!';
    }
    else if (ans2 == 'hot' && ans3 == 'light' && ans1 == 'relaxed') {
        drinkName = 'Chai Tea Latte';
        drinkDesc = 'Black tea infused with cinnamon, clove, and other spices';
        reason = 'Relaxing with just a bit of caffeine!';
    }
    else if (ans2 == 'hot' && ans3 == 'light') {
        drinkName = 'Flat White';
        drinkDesc = 'Ristretto shots with steamed whole milk';
        reason = 'Smooth and balanced caffeine!';
    }
    else if (ans2 == 'hot' && ans3 == 'moderate' && ans4 == 'very') {
        drinkName = 'White Chocolate Mocha';
        drinkDesc = 'Espresso with white chocolate sauce and steamed milk';
        reason = 'Sweet and energizing!';
    }
    else if (ans2 == 'hot' && ans3 == 'moderate') {
        drinkName = 'Cappuccino';
        drinkDesc = 'Dark, rich espresso with steamed milk foam';
        reason = 'Classic coffee with moderate energy!';
    }
    else if (ans2 == 'hot' && ans4 == 'very') {
        drinkName = 'Peppermint Mocha';
        drinkDesc = 'Espresso with peppermint syrup, mocha sauce, and whipped cream';
        reason = 'Sweet and warm for cold days!';
    }
    else if (ans2 == 'cold' && ans3 == 'max' && ans4 == 'not') {
        drinkName = 'Nitro Cold Brew';
        drinkDesc = 'Cold brew infused with nitrogen for a creamy texture';
        reason = 'Maximum caffeine with smooth bold taste!';
    }
    else if (ans2 == 'cold' && ans3 == 'max') {
        drinkName = 'Iced Shaken Espresso';
        drinkDesc = 'Espresso shaken with ice and a splash of milk';
        reason = 'Perfect cold drink with tons of energy!';
    }
    else if (ans2 == 'cold' && ans3 == 'moderate' && ans1 == 'adventurous') {
        drinkName = 'Iced Brown Sugar Oat Milk Shaken Espresso';
        drinkDesc = 'Espresso with brown sugar and oat milk';
        reason = 'Try something new and trendy!';
    }
    else if (ans2 == 'cold' && ans3 == 'moderate') {
        drinkName = 'Iced Caffe Latte';
        drinkDesc = 'Espresso with milk over ice';
        reason = 'Classic iced coffee with good energy!';
    }
    else if (ans2 == 'cold' && ans3 == 'light' && ans4 == 'very') {
        drinkName = 'Iced Vanilla Latte';
        drinkDesc = 'Espresso with vanilla syrup and milk over ice';
        reason = 'Sweet and lightly caffeinated!';
    }
    else if (ans2 == 'cold' && ans3 == 'light') {
        drinkName = 'Iced Peach Green Tea';
        drinkDesc = 'Green tea with peach flavors and ice';
        reason = 'Refreshing with light caffeine!';
    }
    else if (ans2 == 'cold' && ans4 == 'light') {
        drinkName = 'Cold Brew';
        drinkDesc = 'Smooth, bold coffee slowly steeped for 20 hours';
        reason = 'Simple and refreshing!';
    }
    else if (ans2 == 'fall' && ans3 != 'none') {
        drinkName = 'Pumpkin Spice Latte';
        drinkDesc = 'Espresso with pumpkin, cinnamon, nutmeg, and clove';
        reason = 'Perfect for fall weather!';
    }
    else if (ans2 == 'fall' && ans3 == 'none') {
        drinkName = 'Caramel Apple Spice';
        drinkDesc = 'Steamed apple juice with cinnamon syrup';
        reason = 'Cozy fall drink without caffeine!';
    }
    else if (ans2 == 'rainy' && ans4 == 'very') {
        drinkName = 'Peppermint Mocha';
        drinkDesc = 'Espresso with peppermint syrup, mocha sauce, and whipped cream';
        reason = 'Warm and sweet for rainy days!';
    }
    else if (ans2 == 'rainy') {
        drinkName = 'Chai Tea Latte';
        drinkDesc = 'Black tea infused with cinnamon, clove, and other spices';
        reason = 'Cozy drink for rainy weather!';
    }
    else if (ans1 == 'energetic' && ans2 == 'hot' && ans3 != 'none') {
        drinkName = 'Caffe Americano';
        drinkDesc = 'Espresso shots topped with hot water';
        reason = 'Bold energy for your active day!';
    }
    else if (ans1 == 'energetic' && ans3 != 'none') {
        drinkName = 'Dragon Drink';
        drinkDesc = 'Mango Dragonfruit Refresher with coconut milk';
        reason = 'Energizing and tropical!';
    }
    else if (ans1 == 'cozy' && ans2 == 'cold') {
        drinkName = 'Iced Caramel Macchiato';
        drinkDesc = 'Vanilla syrup, milk, espresso, and caramel drizzle over ice';
        reason = 'Cozy flavors in a cold drink!';
    }
    else if (ans1 == 'cozy') {
        drinkName = 'Caramel Macchiato';
        drinkDesc = 'Espresso with vanilla syrup, steamed milk, and caramel drizzle';
        reason = 'Cozy and comforting!';
    }
    else if (ans1 == 'adventurous' && ans3 != 'none') {
        drinkName = 'Iced Chocolate Almond Milk Shaken Espresso';
        drinkDesc = 'Espresso with chocolate malt and almond milk';
        reason = 'Try something different and delicious!';
    }
    else if (ans1 == 'relaxed' && ans3 != 'none') {
        drinkName = 'Flat White';
        drinkDesc = 'Ristretto shots with steamed whole milk';
        reason = 'Smooth and relaxing!';
    }
    else if (ans4 == 'very' && ans3 != 'none') {
        drinkName = 'White Chocolate Mocha';
        drinkDesc = 'Espresso with white chocolate sauce and steamed milk';
        reason = 'Super sweet and delicious!';
    }
    else if (ans4 == 'balanced' && ans3 != 'none') {
        drinkName = 'Caffè Latte';
        drinkDesc = 'Espresso with steamed milk and light foam';
        reason = 'Classic balanced flavor!';
    }
    else if (ans4 == 'not' && ans3 != 'none') {
        drinkName = 'Caffe Americano';
        drinkDesc = 'Espresso shots topped with hot water';
        reason = 'Bold coffee without sweetness!';
    }
    else {
        drinkName = 'Iced Caramel Macchiato';
        drinkDesc = 'Vanilla syrup, milk, espresso, and caramel drizzle over ice';
        reason = 'A classic favorite that works for everyone!';
    }
    
    var html = '<h3>' + drinkName + '</h3>';
    html += '<p><strong>Description:</strong> ' + drinkDesc + '</p>';
    html += '<p><strong>Why this matches you:</strong> ' + reason + '</p>';
    
    document.getElementById('drinkResult').innerHTML = html;
    document.getElementById('quizBox').classList.add('hidden');
    document.getElementById('resultBox').classList.remove('hidden');
}

document.getElementById('retakeBtn').addEventListener('click', function() {
    ans1 = '';
    ans2 = '';
    ans3 = '';
    ans4 = '';
    
    var allBtns = document.querySelectorAll('.option-btn');
    for (var k = 0; k < allBtns.length; k++) {
        allBtns[k].classList.remove('selected');
    }
    
    document.getElementById('resultBox').classList.add('hidden');
    document.getElementById('quizBox').classList.remove('hidden');
    document.getElementById('q1').classList.remove('hidden');
    document.getElementById('q2').classList.add('hidden');
    document.getElementById('q3').classList.add('hidden');
    document.getElementById('q4').classList.add('hidden');
});