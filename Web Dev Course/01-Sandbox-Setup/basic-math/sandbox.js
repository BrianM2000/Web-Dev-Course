let x = 10;
let y = 5;

let val = x + y;
console.log(`${x} + ${y} is ${val}`);

val = x - y;
console.log(`${x} - ${y} is ${val}`);

val = x * y;
console.log(`${x} * ${y} is ${val}`);

val = x / y;
console.log(`${x} / ${y} is ${val}`);

y = 3;
val = x % y;
console.log(`${x} % ${y} is ${val}`);

let valid_input = false;
let num_rolls, input;

while(!valid_input) {
    input = window.prompt("How many dice rolls should we make?");

    num_rolls = Number(input);

    if (!isNaN(num_rolls) && num_rolls > 0) {
        valid_input = true;
    }
}

let rolls = [0,0,0,0,0,0,0,0,0,0,0];
           //2,3,4,5,6,7,8,9,10,11,12

let die1, die2, roll;

for(let i = 0; i < num_rolls; ++i){
    die1 = Math.floor(Math.random()*6) + 1;
    die2 = Math.floor(Math.random()*6) + 1;
    roll = die1 + die2;

    rolls[roll-2]++;
}

console.log(`We rolled the dice ${num_rolls} times...`);
for(let i = 0; i < rolls.length; i++) {
    let num = i+2;
    let count = rolls[i];
    let pct = Math.round(count / num_rolls * 100);

    console.log(`${num} was rolled ${count} times (${pct}%)`)
}