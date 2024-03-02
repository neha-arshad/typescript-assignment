function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
    console.log(magician);
  }
}

//Call function
//const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
//show_magicians(magicianNames);//

// GREAT MEGICIANS//
function make_great(magicians: string[]): void{
    // Create a new array with modified magician names
    for(let i =0; i<magicians.length; i++){
        magicians[i] = magicians[i]  + ` the great  `;
   }
}

// call function
const magiciansArray: string[] = ["Merlin", "Houdini", "Gandalf"];

// Call show_magicians() to see the modified list
//make_great(magiciansArray);
//show_magicians(magiciansArray);

//unchanged magicians//
function make_great2(magicians: string[]): string[] {
    const magiciansArray: string[] =[];   
    for(let i =0; i<magicians.length; i++){
        magiciansArray.push(magicians[i] + ` the great `);
       }
       return magiciansArray;
}
//call function//
const magician3: string[] = ["Merlin", "Houdini", "Gandalf"];
const magiciansArray2: string[] = make_great2(magician3);
show_magicians(magician3);
show_magicians(magiciansArray2);
