var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BaseContent = /** @class */ (function () {
    function BaseContent(brand, shade, price) {
        this.brand = brand;
        this.shade = shade;
        this.price = price;
        this.brand = brand;
        this.shade = shade;
        this.price = price;
    }
    return BaseContent;
}());
var Foundation = /** @class */ (function (_super) {
    __extends(Foundation, _super);
    function Foundation(brand, shade, coverage, price) {
        var _this = _super.call(this, brand, shade, price) || this;
        _this.brand = brand;
        _this.shade = shade;
        _this.coverage = coverage;
        _this.price = price;
        _this.coverage = coverage;
        return _this;
    }
    return Foundation;
}(BaseContent));
var fitMe = new Foundation('Maybelline FitMe', 280, 'full', 23.95);
var infallible = new Foundation('Loreal Infallible', 'Golden beige', 'medium', 54);
var foundations = [fitMe, infallible];
console.log(foundations);
var Lipstick = /** @class */ (function (_super) {
    __extends(Lipstick, _super);
    function Lipstick(brand, shade, price) {
        var _this = _super.call(this, brand, shade, price) || this;
        _this.brand = brand;
        _this.shade = shade;
        _this.price = price;
        return _this;
    }
    return Lipstick;
}(BaseContent));
var colorRichie = new Lipstick('Loreal Color Richie', 'dark peach', 4.5);
var superStay = new Lipstick('Maybelline Super Stay', 'Seductress', 6.45);
var lipsticks = [colorRichie, superStay];
console.log(lipsticks);
