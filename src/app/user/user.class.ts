export class User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    reviewer: boolean;
    admin: boolean;

    constructor(){
        this.id=0;
        this.reviewer=false;
        this.admin=false;
    }
}