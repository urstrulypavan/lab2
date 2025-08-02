// functions parameter and return types

// function with parameter types and return type
function add(x: number, y: number): number {
    return x + y;
}

// function with object parameter
function printPerson(person: {name: string; age: number}) : void {
    console.log(`${person.name} is ${person.age} years old`);
}

//function type definition
type mathOperation = (x : number, y : number) => number;
let mulOpertion : mathOperation = (x, y) => x * y;
let total : mathOperation = (x, y) => x + y;

// interface for function parameter
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let searchString: SearchFunc = (source, subString) => {
    return source.indexOf(subString) !== -1;
};

console.log("function demonstration:");
console.log(add(1,2));
printPerson({name: "Alice", age: 30});
console.log(mulOpertion(9,9));
console.log(total(9,9));
console.log(searchString("hello world", "world"));
