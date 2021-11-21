//TODO: averiguar como crear muchos objetos en la misma declaracion new

class Client {
    constructor(
        public name: string,
        public isClient: boolean
    ) {
        this.name = name
        this.isClient = isClient
    }
}

const maria = new Client("maria", true);
const lucia = new Client("lucia", false);

let clients = [maria, lucia];


class BaseContent {
    constructor (
        public brand: string,
        public shade: string | number,
        public price: number
    ) {
        this.brand = brand
        this.shade = shade
        this.price = price
    }
}


class Foundation extends BaseContent{

    constructor(
        public brand: string,
        public shade: string | number,
        public coverage: string,
        public price: number
    ) {
        super (brand, shade, price)
        this.coverage = coverage
    }

}

const fitMe = new Foundation('Maybelline FitMe', 280, 'full', 23.95);
const infallible = new Foundation('Loreal Infallible', 'Golden beige', 'medium', 54)

let foundations = [fitMe, infallible];

class Lipstick extends BaseContent {
    constructor(
        public brand: string,
        public shade: string,
        public price: number
    ) {
        super (brand, shade, price)
    }
}

const colorRichie = new Lipstick('Loreal Color Richie', 'dark peach', 4.5);
const superStay = new Lipstick('Maybelline Super Stay', 'Seductress', 6.45);

let lipsticks = [colorRichie, superStay];

// console.table(clients)
// console.table(foundations)
// console.table(lipsticks);

const buy = (Client, Foundation, Lipstick) =>{
    console.log(
        'Cliente: ' + Client.name, '\n',
        'Base: ' + Foundation.brand, Foundation.shade, '\n',
        'Labial: ' + Lipstick.brand, Lipstick.shade, '\n', '\n',)
}

buy(maria, colorRichie, fitMe);
buy(lucia, colorRichie, superStay);