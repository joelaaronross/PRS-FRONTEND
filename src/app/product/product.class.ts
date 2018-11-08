import { Vendor } from '../vendor/vendor.class';

export class Product {
    id: number;
    partName: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    vendor: string;
    

    constructor(){
        this.id=0;
        this.price = 0;
    }
}