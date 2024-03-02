function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
    console.log(magician);
    }
}

// Call function
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magicians(magicianNames);
