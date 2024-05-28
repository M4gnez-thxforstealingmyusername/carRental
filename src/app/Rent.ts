export class Rent{
    id! : number;
    userId! : number;
    carId! : number;
    startDate! : string;
    endDate! : string;

    constructor(carId: number, startDate: string, endDate: string){
        this.carId = carId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}