// Функция конструктор (класс) описывающая наше меню.
function Menu() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
}

// Теперь мне нужно создать ещё две сущности: одну для создания <ul></ul>, а вторую для пунктов меню.
// У меню будет класс, идентификатор и есть пункты меню. Всё это надо передать.
function createMenu(myId, myClassName, myMenuItems) {
    // Подключаем главный класс Menu
    Menu.call(this);
    this.id = myId;
    this.className = myClassName;
    this.menuItems = myMenuItems;
}
// Теперь нужен метод для генерации этого меню.
// Эту конструкцию мне, видимо, придётся куда-то сохранить, поскольку я
// не до конца понимаю смысл написанного и не могу это запомнить.
// Может со временем.:(
createMenu.prototype = Object.create(Menu.prototype);
createMenu.prototype.constructor = createMenu;
// Собстаенно описываем сам метод
createMenu.prototype.render = function() {
    // Данная функция должна вернуть готовое меню.
    // В переменную result записываем открывающий тег ul с id и классом
    let result = '<ul class="' + this.id + '" id="' + this.className + '">';
    // Далее надо внутрь положить пункты меню <li></li>
    // Для этого надо циклом for перебрать массив, который будет передан в items
    for (let item in this.menuItems) {
        // 
        if (this.menuItems[item] instanceof createMenuItems) {
            //
            result += this.menuItems[item].render();
            //result += this.item.render();
        }
    }
    // Ну и в конце дописываем закрывающий тег
    result += "</ul>";
    // возвращаем.
    return result;
}
// Теперь сущность для создания пунктов меню
function createMenuItems(myHref, myName) {
    Menu.call(this);
    this.className = 'menuItem';
    this.href = myHref;
    this.name = myName;
}
// Копирую долбанную конструкцию для создания метода render для пунктов меню.
createMenuItems.prototype = Object.create(Menu.prototype);
createMenuItems.prototype.constructor = createMenuItems;
// И сам метод:
createMenuItems.prototype.render = function() {
    // Функция будет возвращать элемент li со ссылкой внутри
    return '<li class="' + this.className + '"><a href="' + this.href + '">' + this.name + '</a></li>';
}
// Создаём пункты меню
// Такой объект, как пункт меню у меня создаётся с помощью класса createMenuItems
let mItem1 = new createMenuItems("/", "Главная");
let mItem2 = new createMenuItems("/about", "О нас");
let mItem3 = new createMenuItems("/contacts", "Контакты");
let mItems = {0: mItem1, 1: mItem2, 2: mItem3};
// Мне нужно что-то, что примет в себя сформированный код меню.
// Создаём этот объект через createMenu, передавая в класс (в ФК) id, className и массив, содержащий пункты меню
let menu = new createMenu("myMenuClass", "myMenuId", mItems);
// рендерим меню в DOM
document.write(menu.render());
// Попробую описать, что происходит.
// 1. ФК createMenu выполняется, принимая на вход значения "myMenuId", "myMenuClass" и объект mItems.
// 2. id становится равным myMenuId, className становится равным myMenuClass, menuItems принимает в себя объект mItems
// 3. При вызове метода render выполняется функция, в которой в переменную result записывается открывающий тег <ul> c 
//    атрибутами id="myMenuId" и class="myMenuClass".
// 3.1.   Далее отрабатывает цикл for in, который перебирает значения в объекте menuItems, который содержит внутри себя
//        объект mItems, который в свою очередь в качестве свойств содержит объекты mItem1, mItem2 и mItem3.
//        Каждое полученное значение присваивается в item.
// 3.2.   Внутри for in есть оператор if, который проверяет, что хранящийся в item объект относится к классу createMenuItems.
//        Если да, то в переменную result дописывается результат работы метода render для конкретного свойства объекта, хранящегося в menuItems.
// 3.3.   После цикла for in в result дописывается закрывающий тег </ul>
// 3.4.   Возвращается result
// 4. В пункте 3.1 я указал объекты mItem1, mItem2, mItem3.  Каждый из объектов mItem1, mItem2 и mItem3 сформирован на базе ФК createMenuItems, 
//    в которую передаются 2 значения: путь (href) и название.
// 5. В пункте 3.2 я указал, что для mItem1, mItem2 и mItem3 вызывается метод render(), который возвращает строку:
//    <li class="menuItem"><a href="путь">Имя (название)</a></li>, которая формируется исходя из того, какие значения принимают
//    this.href и this.name в классе createMenuItems
// 6. Собственно говоря через document.write(menu.render()) запилиывем меню в DOM.
//
// Теперь надо написать метод, который будет удалять меню при нажатии кнопки "Удалить меню".
// Я так понял, что надо к классу createMenu в прототип добавить метод, например removemenu.
// Вижу я это как-то так:
// Добавляю сам метод:
createMenu.prototype.removemenu = function() {
    if (document.getElementById('myMenuId') != null) {
        document.getElementById('myMenuId').remove();
    } else {
        console.error('Меню уже удалено!');
    }
    //del.remove();
    //console.log(del);
}
// Что-же мне надо в нём сделать? Ну, наверное, надо написать код, который будет удалять меню.
// Чтобы найти элемент в DOM у нас для ul задан id. По нему и будем искать и удалять.
// Удалять надо по нажатию кнопки. Т.е., надо на кнопку повесить прослушку событий "click".
// Делается это, если я всё помню верно, как-то так:
window.onload = function() {
    let btn = document.getElementById('knopka');
    btn.addEventListener('click', function() {menu.removemenu()});    
}









