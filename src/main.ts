const val = 10 // by defualt it is an "any" type
const str = "hi" // automatically make str a string type same thing happens for 
let variable : number
let unionexample : number | string  // this means that unionexample variable can have either number or string. The pipe like operator is called union
let arrString : string[] = ['a', 'b', 'c']  // declares an array of string type
let mixedarr: (string| number| boolean)[] = ["example", 10, true]  // declares a mixed array type with can accept string, number and boolean 
let arrTup: [string, number] = ["should be a string", 10]  // this rray can contain only two values, not more or less than it, in which arrTup[0] should be a string and arrTup[1] shouldbe a number
let arrTup2: [string, number, string] = ["a", 3, "23"]  // this tuple can contain 3 values, not more or less than it
type stringOrNum = string | number  // this will create an alias name for a string | number, useful if we are frequently using unions

let varusingalias: stringOrNum
let varmixedarrayusingalias: (stringOrNum) [] = ["string", 20]

arrTup = ["another string", 4]

variable = 10  // if we assign anything other tan a number then it will throw error in build time

function fun(a: number, b: number): number {  // "number" after : (colon) means that function must return a number nad "number" with the variable means it can accept a number only 
    return a + b
} 

let fun2 : (a: number, b: number) => number // statement i (function prototype)
let fun3 : (a: number, b: number) => void // will throw an error if try to return any non-void variable
let functionwithoptionalparams: (a: number, b: number, c?: number) => number // while calling this function it is not neccessary to pass the third parameter as it is optional 

fun2 = (first, second) => {  // here we dont need to specify the types a we defined it earlie in statement i
    return first + second
}

fun3: fun2 = (first, second) => {  // fun3 function of fun2 type
    return first + second
}

functionwithoptionalparams = (first, second, third) => {
    return 10
}

functionwithoptionalparams(3,4)
functionwithoptionalparams(4,5,6)
// both work fine

// interfaces
interface swayam {  // this can be used to define an object so that the elements inside the object are of strictly swayam type
    name: string,
    age: number
}

const obj = {  // a normal object independent of swayam interface
    name: "swayam",
    age: "12",
    sex: "M"
}

const interfaceobj : swayam = {  // this is an object in type swayam
    name: "swayam",
    age: 19  // suppose I try to assign age with a string say "19" then we will see an error because we have defined age as number in swayam interface
} // the no. of properties in interfaceobj should also be same as in the swayam interface

// classes without interfaces

   function generateRandom(length: number): string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}

class swayamClass {
    private name: string  // here private members can be read by members function only (by default they are public)
    readonly age: number  // here mutations are not allowed for age outside of the class but it is visible outside the class though
    sex?: string  // public member but it is optional
    nationality: string  // public member
    protected password?: string

    constructor (a: string, b: number, c: string){
        this.name = a;
        this.age = b
        this.nationality = c
        this.password = generateRandom(5)
    }

    fun(): string {
        return `Hi from ${this.name} of age ${this.age} from ${this.nationality}`
    }

    getPassword() {
        return this.password
    }
}

const swayamobj = new swayamClass("swayam", 19, "indian");

swayamobj.fun() 

// class with interfaces
interface swayamInt {
    age: number  // here mutations are not allowed for age outside of the class but it is visible outside the class though
    sex?: string  // public member but it is optional
    nationality: string  // public member
}

class swayamIntClass implements swayamInt {

    private name: string
    protected password?: string
    // private and protected members have to be declared separately and cant be declared direcly in the constructor arguments given below

    constructor (a: string, readonly age: number, public nationality: string, public sex?: string, p?: string){ 
        this.name = a
        this.password = generateRandom(5) 
    }  // this is a short hand way of defining and initializing class members at the same time, it can be used with classes with not interface implemented too

    fun(): string {
        return `Hi from ${this.name} of age ${this.age} from ${this.nationality}`
    }

    getPassword() {
        return this.password
    }
}

const randObj = new swayamIntClass("swayam", 19, "indian", "M")

randObj.fun()

// dom manipulation
const inputName = document.querySelector("#name") as HTMLInputElement
const inputAge = document.querySelector("#age") as HTMLInputElement
const inputNationality = document.querySelector("#nationality") as HTMLInputElement
const inputSex = document.querySelector("#sex") as HTMLInputElement
const divelement = document.querySelector(".maindiv") as HTMLDivElement
const inputForm = document.querySelector("#test") as HTMLFormElement

inputForm?.addEventListener("submit", (e) => {   // here we can avoid the '?' after the inputForm variable if we write a ! after const inputForm = document.querySelector("#test")
    e.preventDefault()
    const ob = new swayamIntClass(inputName.value, inputAge.valueAsNumber, inputNationality.value, inputSex.value)  // valueAsNUmber cuz in an input of number type actually returns a number as a string type like (5 -> "5")
    divelement.innerText = ob.fun();

    inputForm.reset()
})

// Generics :- If we dont't know before hand what type of data we want to assign then we use generics 

// Generics in function arguments

const generic = <T>(b: T, a: number) => {  // T can except any type
    return {...b, somekey: a};  // assuming b may be an object
}

generic<number>(20, 2)

// we could have used any too instead of generics but in that case the function can accept any value which reduces type safety 


// Generics in interfaces
interface genericinterface<T> {
    key1: number,
    key2: number,
    key3: T
}

const someobj: genericinterface<string> = {  // so we have to write the name of the type we are assigning below beside the interface name
    key1: 10,
    key2: 110,
    key3: "string"
}

// Enumeration
enum enumobj { a, b, c }

console.log(enumobj.a);  //will show 0
console.log(enumobj.b);  //will show 1
console.log(enumobj.c);  //will show 2
