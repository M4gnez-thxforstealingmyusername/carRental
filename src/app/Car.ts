export class Car{
    id : number;
    producer : string;
    make : string;
    year : number;
    milage : number
    fuel : string;
    price : number;
    imageUrl : string|null;

    public constructor(id: number, producer : string, make : string, year : number, milage : number, fuel : string, price : number, imageUrl : string|null){
        this.id = id;
        this.producer = producer;
        this.make = make;
        this.year = year;
        this.milage = milage;
        this.fuel = fuel;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}