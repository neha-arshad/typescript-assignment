let current_users: string[] = ['user1', 'ADMIN', 'guest', 'john', 'player'];
let new_users: string[] = ['User2', 'admin', 'visitor', 'john', 'champion'];

current_users = current_users.map(user => user.toLowerCase()); // Convert to lowercase for case insensitive comparison

new_users.forEach(newUser => {
    if (current_users.includes(newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});
