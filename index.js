var Client = /** @class */ (function () {
    function Client(name, isClient) {
        this.name = name;
        this.isClient = isClient;
        this.name = name;
        this.isClient = isClient;
    }
    return Client;
}());
var maria = new Client("maria", true);
var lucia = new Client("lucia", false);
var clients = [maria, lucia];
console.log(clients);
var Foundation = /** @class */ (function () {
    function Foundation(brand, shade, coverage, price) {
        this.brand = brand;
        this.shade = shade;
        this.coverage = coverage;
        this.price = price;
        this.brand = brand;
        this.shade = shade;
        this.coverage = coverage;
        this.price = price;
    }
    return Foundation;
}());
var fitMe = new Foundation('Maybelline FitMe', 280, 'full', 23.95);
var infallible = new Foundation('Loreal Infallible', 'Golden beige', 'medium', 54);
var foundations = [fitMe, infallible];
console.log(foundations);
var Lipstick = /** @class */ (function () {
    function Lipstick(brand, shade, price) {
        this.brand = brand;
        this.shade = shade;
        this.price = price;
        this.brand = brand;
        this.shade = shade;
        this.price = price;
    }
    return Lipstick;
}());
var colorRichie = new Lipstick('Loreal Color Richie', 'dark peach', 4.5);
var superStay = new Lipstick('Maybelline Super Stay', 'Seductress', 6.45);
var lipsticks = [colorRichie, superStay];
console.log(lipsticks);