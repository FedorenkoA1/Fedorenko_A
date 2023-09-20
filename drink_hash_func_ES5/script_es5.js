function DrinkHashFunc() {
    var self = this;
    var HashStorage = {
        "Mochito": {
            alco: "true",
            recipe: `1)Place mint leaves and 1 lime wedge into a sturdy glass.2)Add remaining lime wedges and 2 tablespoons sugar, and muddle again to release the lime juiceFill the glass almost to the top with ice.<br>3)Pour in rum and fill the glass with club soda. 3)Stir, taste, and add more sugar if desired.`
        },
        "Absinthe Frappe": {
            alco: "true",
            recipe: `1)Fill up the shaker with ice 2)Pour watersugar syrupanise liqueurabsinthe into the shakershake well 3)strain into the old fashioned glassadd crushed ice to the glass garnish with mint leaves`
        }
    }
    self.addValue = function (key, alco, recipe) {
        HashStorage[key] = {
            alco: alco,
            recipe: recipe
        };
    };

    self.getValue = function (key) {
        if (key in HashStorage) {
            console.log(HashStorage[key]);
        } else {
            if (key != null) {
                console.log("There is no specified drink here");
            }
        }
    }
    self.deleteValue = function (key) {
        if (key in HashStorage) {
            delete HashStorage[key]
            return console.log("The drink was deleted successfully");
        } else {
            return console.log("There is no specified drink here");
        }
    }
    self.getKeys = function () {
        console.log(Object.keys(HashStorage));
    }
}

var drink = new DrinkHashFunc;

var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var button4 = document.querySelector("#button-4");
button1.addEventListener("click", () => {
    var key = prompt("Enter the name of the drink");
    if (key == null) { return; }
    var alco = confirm("Is it contain alcohol");
    var recipe = prompt("Recipe of the drink");
    drink.addValue(key, alco, recipe);
});
button2.addEventListener("click", () => {
    var val = prompt("Enter the name of the drink");
    drink.getValue(val);
});
button3.addEventListener("click", () => {
    var key = prompt("Enter the name of the drink you want to delete");
    drink.deleteValue(key);
});
button4.addEventListener("click", () => {
    drink.getKeys();
})