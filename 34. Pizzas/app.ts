//let pizza : string [] = ["Afghani feast","Habanero kick","Dancing fajita"]

//for(let i =0; i<=pizza.length; i++){
  //  console.log( "i like " + pizza[0] + " pizza.")//
//}

// Sure! Let's create a TypeScript program that accomplishes the tasks you described.

// Step 1: Define an array of favorite pizza names
let favoritePizzas: string[] = ["Habanero kick", "Dancing fajita", "Afghani feast"];

// Step 2: Print the name of each pizza using a for loop
console.log("My favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Step 3: Modify the loop to print a sentence for each pizza
for (let pizza of favoritePizzas) {
    console.log(`\nI like ${pizza} pizza.`);
}

// Step 4:
console.log("\nI really love pizza!");
