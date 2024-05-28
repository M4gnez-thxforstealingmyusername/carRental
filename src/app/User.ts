export class User{
    id : number | null;
    name : string | null;
    lastName : string | null;
    email : string | null;
    phone : string | null;

    constructor(id : number | null, name : string, lastName : string, email : string, phone : string){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}