//DAY 36 
//TASK 1 (using logical operators to find out a leap year )
//This function checks if a year is a leap year 
function isleapyear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 ===0;
}
console.log(isleapyear(2020)); //Result true
console.log(isleapyear(2023)); //Result false
console.log(isleapyear(1999)); //Result false
console.log(isleapyear(2000)); //Result true
//We can easily get output of leap year to using this comparison method.

//TASK 2 (Using function and logical operator to check number is divisible by 2 and 3 or not)
//This function checks if a no is divisible by both 2 and 3 
function isdivisibleornot(number:number): boolean {
    return number %2 === 0 && number % 3===0;
}
console.log(isdivisibleornot(12)); //Result true
console.log(isdivisibleornot(9)); //Result false 
//We can easily get output using logical operators 

//TASK 3 (Compare two strings in uppercase/lowercase) ignoring case sensitivity
//This function compares two strings
function arestringequal(str1: string , str2:string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(arestringequal("coding","Coding")); //Result true
console.log(arestringequal("life","Lifey")); //Result false
//We can easily get output of comparison of two strings