//basic types
let personName : string = 'John';
let age : number = 25;
let isStudent : boolean = true;

//Special types
let notSure : any = 4;
notSure = "maybe a string";
notSure = false;

//array types
let numbers : number[] = [1,2,3,4,5];
let strings : Array<string> = ["hello", "world"];

//tuple
let tuple : [string, number] = ["age", 25];

//enum
enum Color{
    Red,
    Green,
    Blue
}
let myColor : Color = Color.Green; 
// void and null
let unsurable : void = undefined;
let nullValue : null = null;

console.log("types demonstration:");
console.log({ personName, age, isStudent, notSure, numbers, strings, tuple, myColor, unsurable, nullValue });