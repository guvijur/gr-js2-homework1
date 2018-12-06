// Будем запускать скрипт только после загрузки DOM-а
window.onload = function() {
    document.getElementById('large').addEventListener('click', function() {
        document.getElementById('large').setAttribute('checked', 'checked');
        document.getElementById('small').removeAttribute('checked');
    });
    document.getElementById('small').addEventListener('click', function() {
        document.getElementById('small').setAttribute('checked', 'checked');
        document.getElementById('large').removeAttribute('checked');
    });
    function Hamburger() {
        this.cost = 0;
        this.calories = 0;
        this.small = {
            cost: 50,
            calories: 20
        }
        this.big = {
            cost: 100,
            calories: 40
        }
        this.cheese = {
            cost: 10,
            calories: 20
        }
        this.salad = {
            cost: 20,
            calories: 5
        }
        this.potatoes = {
            cost: 15,
            calories: 10
        }
        this.flavoring = {
            cost: 15,
            calories: 0
        }
        this.mayo = {
            cost: 20,
            calories: 5
        }
    }
    let burger = new Hamburger();
    Hamburger.prototype.calculate = function() {
        Hamburger.call(this);
        let brger = document.querySelector('input[name=size]:checked').value,
            checkedInput = document.querySelectorAll('input[type=checkbox]:checked');
        let bObj = new Hamburger();
        if (brger == "small") {
            //this.cost += bObj["small"].cost;
            this.cost += bObj['small'].cost;
            this.calories += bObj["small"].calories;
            //console.log(this.cost);
            //console.log(this.calories);
        } else if (brger == "large") {
            this.cost += bObj['big'].cost;
            this.calories += bObj["big"].calories;
            //console.log(this.cost);
            //console.log(this.calories);
        }
        for (i = 0; i < checkedInput.length; i++) {
            let prop = checkedInput[i].value
            //console.log(prop);
            this.cost += bObj[prop].cost;
            this.calories += bObj[prop].calories;
            //console.log(this.cost);
            //console.log(this.calories);
        }

        document.getElementById('cost').innerHTML = this.cost;
        document.getElementById('calories').innerHTML = this.calories;

    }
    Hamburger.prototype.resetCalc = function() {
        this.cost = 0;
        this.calories = 0;
        document.getElementById('cost').innerHTML = 0;
        document.getElementById('calories').innerHTML = 0;
    }
    
    
    
    document.getElementById('pushMe').addEventListener('click', function() {burger.calculate()});
    
}
