function orderSandwich(...items: string[]): void {
    const sandwich = `I ordered a sandwich with: ${items.join(`,`)}`;
   console.log(sandwich);
   
}
console.log("ORDERED SANDWICH!");

// Call the function three times with different numbers of arguments
orderSandwich('sauce', 'Lettuce', 'Tomato');
orderSandwich('Ham', 'Cheese', 'Mustard', 'Pickles');
orderSandwich('Peanut Butter', 'Jelly');

