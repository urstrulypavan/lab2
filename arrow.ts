
const greet = (name?:string)=>{
    return `Hello ${name|| 'Guest'}!`;
};

const multiplyWithDefault=(x:number,y: number=1)=>x*y;

const sum=(...numbers:number[])=>{
    return numbers.reduce((total,num)=>total+num,0);
};

const processItems = (required : string , optional?: string, ...rest: string[])=>{
    console.log('Required:',required);
    console.log('Optional:',optional);
    console.log('Rest:',rest);
};

console.log("Arrow Functions Demonstration");
console.log(greet());
console.log(multiplyWithDefault(5));
console.log(multiplyWithDefault(5,2));
console.log(sum(1,2,3,4,5));
processItems("First","Second","Third","Fourth","Fifth");


