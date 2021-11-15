class Client {
    constructor(
        public name: string,
        public isClient: boolean
    ) {
        this.name = name
        this.isClient = isClient
    }
}

let maria = new Client("maria", true);
let lucia = new Client("lucia", false);

let clients = [maria, lucia];
console.log(clients);

class Foundation {

    constructor(
        public brand: string,
        public shade: string | number,
        public coverage: string,
        public price: number
    ) {
        this.brand = brand
        this.shade = shade
        this.coverage = coverage
        this.price = price
    }

}

let fitMe = new Foundation('Maybelline FitMe', 280, 'full', 23.95);
let infallible = new Foundation('Loreal Infallible', 'Golden beige', 'medium', 54)

let foundations = [fitMe, infallible];
console.log(foundations);

class Lipstick {
    constructor(
        public brand: string,
        public shade: string,
        public price: number
    ) {
        this.brand = brand
        this.shade = shade
        this.price = price
    }
}

let colorRichie = new Lipstick('Loreal Color Richie', 'dark peach', 4.5);
let superStay = new Lipstick('Maybelline Super Stay', 'Seductress', 6.45);

let lipsticks = [colorRichie, superStay];
console.log(lipsticks);
