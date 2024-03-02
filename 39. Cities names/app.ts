function city_country(city : string , country : string){
      return ` ${city} , ${country}` ;
}

// Calling the function with three different city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Tokyo", "Japan");
let city3 = city_country("New York", "United States");

console.log(city1); // Output: Lahore, Pakistan
console.log(city2); // Output: Tokyo, Japan
console.log(city3); // Output: New York, United States
