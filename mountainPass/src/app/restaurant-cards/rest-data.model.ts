export class RestData {
    Name: string ; 
    Description: string; 
    imagePath: string; 

    constructor({Name, Description, imagePath}:
        {Name:string , Description: string, imagePath: string}) {
            this.Name = Name; 
            this.Description = Description; 
            this.imagePath = imagePath; 
        }
}