let Guest_list : string [] = ["Rabeea","Ayesha","Wareesha"];

let message: string = "Come and join me at a dinner party at my place on coming sunday at 6:30 in evening.";

for(let i = 0; i<Guest_list.length; i++){
    console.log( Guest_list[i] + " " + message);
}

//CHANGING GUEST LIST//

let New_Guest: string = "Mahrunnisa";
let Old_guest: string = "Wareesha";

Guest_list[2] = New_Guest 

for(let i=0; i<Guest_list.length; i++){
    console.log(Guest_list[i] + " " + message);
}

console.log(`${Old_guest}, is not comming. `);





