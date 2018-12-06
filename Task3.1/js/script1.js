// Будем запускать скрипт только после загрузки DOM-а
window.onload = function() {
    // Нужно создать ФК (класс) Hamburger, от которого всё пойдёт
    function Humburger() {
        this.size = "";
        this.cost = 0;
        this.calories = 0;
        this.cheese = {
            price: 10,
            calories: 20
        },
        this.salad = {
            price: 20,
            calories: 5
        },
        this.potatoes = {
            price: 15,
            calories: 10
        },
        this.flavoring = {
            price: 15,
            calories: 0
        },
        this.mayo = {
            price: 20,
            calories: 5
        }
        // По сути, из изначальных данных у нас размер бургера и его добавки
    }
    let burger = new Humburger();
    console.log(burger);
    //Big.prototype = Object.create(Humburger.prototype);
    //Big.prototype.constructor = Big;
    // Собстаенно описываем сам метод
        Humburger.prototype.calculate = function() {
        Humburger.call(this);
        let fullcost = this.cost,
            fullcalories = this.calories;
        console.log(fullcost);
        console.log(fullcalories);
        let itemCode = document.getElementsByClassName('checkbox');
        for(let i = 0; i < itemCode.length; i++) {
            let name = itemCode[i].value
            console.log(itemCode[i].value);
            console.log(name);
            //console.log(burger.name['price']);
            console.log(mayo[price]);
            //fullcost += this.itemCode[i].value.price;
            //fullcalories += this.itemCode[i].value[calories];
        }
    }
    
    
    
    
    // В чём я полностью уверен, так это в том, что мне надо добавить прослушку события click 
    // на нажатие кнопки:
    document.getElementById('pushMe').addEventListener('click', function() {burger.calculate()});
}