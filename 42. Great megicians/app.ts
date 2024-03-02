
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
    console.log(magician);
    }
}

//Call function
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
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
make_great(magiciansArray);
show_magicians(magiciansArray);
