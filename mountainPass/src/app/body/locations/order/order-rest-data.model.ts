export class OrderRestData {
    Food: string;
    Price: number;
    
    constructor({Food, Price}:
    { Food: string, Price: number}) {
        this.Food = Food;
        this.Price = Price;
    }    
}