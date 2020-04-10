export class User {
    _id?: string;
    first_name: string;
    last_name: string;
    password?: string;
    email: string;
    role: string;
    tickets?: any;

    constructor(_id: string ,  first_name: string , last_name: string , email: string ,
                role: string , tickets: any) {
        this._id = _id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.role = role;
        this.tickets = tickets;


    }
}
