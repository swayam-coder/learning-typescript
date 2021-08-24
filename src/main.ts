const val = 10 // by defualt it is an "any" type
const str = "hi" // automatically make str a string type same thing happens for 
let variable : number
let unionexample : number | string // this means that unionexample variable can have either number or string. The pipe like operator is called union

variable = 10  // if we assign anything other than a number then it will throw error in build time
