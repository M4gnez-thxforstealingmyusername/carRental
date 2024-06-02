import { Car } from "./Car";
import { Rent } from "./Rent";

export class RentGroup{
    key! : Car;
    values! : Rent[];

    constructor(key : Car, values : Rent[]){
        this.key = key;
        this.values = values;
    }
}