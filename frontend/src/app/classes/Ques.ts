export class Ques{
    id:number;
    Questions:String;
    option = []
    
    constructor(id:number,Questions,option){
     this.id=id;
     this.Questions=Questions;
     this.option=option;

    }
}