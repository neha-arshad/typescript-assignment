let Guest_list = ["Rabeea","Ayesha","Wareesha"];

let message: string = "Come and join me at a dinner party at my place on coming sunday at 6:30 in evening.";

//for(let i = 0; i<Guest_list.length; i++){
   // console.log( Guest_list[i] + " " + message)
//}

//CHANGING GUEST LIST//

let New_Guest: string = "Mahrunnisa";
let Old_guest: string = "Wareesha";

Guest_list[2] = New_Guest 

//for(let i=0; i<Guest_list.length; i++){
   // console.log(Guest_list[i] + " " + message)
//}

//console.log(`${Old_guest}, is not comming. `);

//MORE GUEST//

Guest_list.unshift("Nageen");
Guest_list.splice(2, 0, "Hera");
Guest_list.push("Sahanila");

//for(let i = 0; i<Guest_list.length; i++){
    //console.log(Guest_list[i] + " " + message)
//}

console.log("Hello Everyone, I found a bigger dinner table.");

//SHRIKING GUEST LIST//

console.log("I can invite only two people for dinner.");

while(Guest_list.length > 2){
    let remove_Guest = Guest_list.pop()
    console.log(`sorry, ${remove_Guest} I cant invite you to Dinner. `)
}

for(let i =0; i<Guest_list.length; i++){
    console.log(`Hi, `+ Guest_list[i] +`  you are still invited to dinner.`)
}




