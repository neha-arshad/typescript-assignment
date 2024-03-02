let places: string[] = ["Hyde park", "London eye", "Eiffel tower","Naran kagan","Kite Beach"];
  
  // Print the array in its original order
  console.log(`original order: `+  places);

  // Print the array in alphabetical order without modifying the actual list
  console.log(`Alphabetical order without modifying:`+ [...places].sort());

  // Show that the array is still in its original order by printing it
 console.log(`original order: `+ places);
  
  // Print the array in reverse alphabetical order without changing the order of the original list
  console.log(`reverse alphabetical order: `+ [...places].sort().reverse());
  
  // Show that the array is still in its original order by printing it again
  console.log(`orginal order: `+  places);
  
  // Reverse the order of the list and print the array to show that its order has changed
  console.log(`orginal order: `+ places.reverse());
  
  // Reverse the order of the list again and print the list to show it's back to its original order
  console.log(`orginal order: `+ places.reverse());
  
  // Sort the array so it's stored in alphabetical order and print the array to show that its order has been changed
  console.log(`orginal order: `+ places.sort());
  
  // Sort to change the array so it's stored in reverse alphabetical order and print the list to show that its order has changed
  console.log(`orginal order: `+ places.sort().reverse());
  