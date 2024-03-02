//Tests for equality and inequality with strings//
            //EQUALITY TEST//
console.log("Test for equality with string: " ,"Red rose" === "Red rose");
           //INEQUALITY TEST//
console.log("Test for inequality with string: ", "Red rose" != "Red rose");

//Tests using the lower case function//
let rose_1 : string = "ROSE"
let rose_2 : string = "rose"
console.log("Test for lowercase fuction: ",  rose_1.toLowerCase() == rose_2);

// Numerical tests involving equality and inequality,
         //EQUALITY TEST//
console.log("Equality test with number: ", 10 == 10);
       //INEQULITY TEST//
console.log("Inequality test with number: ", 10 != 10);

//Test for greater than//
let a : number = 5;
let b : number = 2;
console.log(" `a` greter than `b`: ", a > b ); 

//Test for less than,//
console.log(" `a` less than `b`: ", a < b );

// greater than or equal to,//
console.log("Test with greater than or equal to: ", a >= b);

//less than or equal to//
console.log("Test with less than or equal to: ", a <= b );

//Tests using && operator//
console.log("Test with && operator: ", 5===5 && 5!=5);
console.log("Test with && operator: ", 5===5 && 5===5);

// "or" operators//
console.log("Test with || operator: ",a==b || a==b );
console.log("Test with || operator: ", a != b || a == b);

//• Test whether an item is in a array//
let flower: string[]= ["Red rose", "Pink rose", "White rose"];
console.log("red rose is in array: ", flower.includes ("Red rose"));

//• Test whether an item is not in a array//
console.log("lily is not in array: ", flower.includes("lily"));















