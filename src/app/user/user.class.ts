export class User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor(){
        this.id=0;
        this.isReviewer=false;
        this.isAdmin=false;
        this.password = 'password';
    }
}