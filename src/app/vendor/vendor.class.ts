export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    isPreapproved: boolean;
    phone: string;
    email: string;
    active: boolean;
    

    constructor() {
        this.id=0;
        this.isPreapproved=false;
        this.active = true;
    }
}