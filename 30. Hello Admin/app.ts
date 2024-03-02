let users : string [] = ["Admin", "Eric", "John", "Adamfreeman","john elia"];
    for ( let user of users)
        if (user === 'Admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
         else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    


