// how the my model recipe should look like this model show the name,Description
// and imagepath

export class recipe{
    public name: string;
    public description: string;
    public imagepath: string;


    constructor(name: string,description: string,imagepath: string){
        this.name= name;
        this.description= description;
        this.imagepath= imagepath;
        
    }
}
//this can also be written as
// export class recipe{
//     constructor(public name:string,public description:string,public imagepath:string){}
// }