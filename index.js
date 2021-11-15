var Client = /** @class */ (function () {
    function Client(name, isClient) {
        this.name = name;
        this.isClient = isClient;
        this.name = name,
            this.isClient = isClient;
    }
    return Client;
}());
var maria = new Client('maria', true);
var lucia = new Client('lucia', false);
var clients = [maria, lucia];
console.log(clients);
