// Version that passes the if test
let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log('player just earned 5 points!');
}

// Version that fails the if test (no output)
alien_color = 'red';

if (alien_color === 'green') {
  // No output will be produced since the condition is false
}
