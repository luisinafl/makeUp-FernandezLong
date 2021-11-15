
class Client {
    constructor(

        public name: string,
        public isClient: boolean
    ){
        this.name = name,
        this.isClient = isClient
    }
}

let maria = new Client('maria', true);
let lucia = new Client('lucia', false)


let clients = [maria, lucia]
console.log(clients)
