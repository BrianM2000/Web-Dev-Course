let max = 0;
let toGuess = 0;
let guesses = [];

function getMax(){
    max = 0;
    let bool = true;

    while((Object.is(max, NaN) || (max <= 1))){
        max = prompt("Enter highest possible value")
        max = parseInt(max);
        bool = (Object.is(max, NaN) || (max <= 1));
    }

    changeHTML(`Range: <br> 1 - ${max}`, ".minToMax", 0);

    toGuess = (Math.round((Math.random()) * (max-1)) + 1);
    console.log(toGuess);
}

function guess(){
    let guess = document.getElementById('guess').value;
    guess = parseInt(guess);
    console.log(guess);

    if(guesses.includes(guess)){
        //document.getElementById('guess').value = "Enter a new number!";
        changeHTML("Enter a new number!", ".Error", 0)
    }
    else if(guess > max || guess < 1){
        //document.getElementById('guess').value = "That number is not in range, try again.";
        changeHTML("That number is not in range, try again.", ".Error", 0)
    }
    else if(!Object.is(guess, NaN)){
        guesses.push(guess);
        changeHTML("", ".Error", 0)

        if(guess === toGuess){
            changeHTML(`You got it! It took you ${guesses.length} tries and your guesses were ${guesses}`, ".HigherOrLower", 0)
        }
        if(guess < toGuess){
            changeHTML(`${guesses} <br> Higher `, ".HigherOrLower", 0)
            changeHTML("<img src=Images/higher.png style=width:23vw;height:auto;>", ".image", 0)
            document.getElementById('leftBorder').style.backgroundColor = "green";
            document.getElementById('rightBorder').style.backgroundColor = "green";
        }
        if(guess > toGuess){
            changeHTML(`${guesses} <br> Lower `, ".HigherOrLower", 0)
            changeHTML("<img src=Images/lower.png style=width:23vw;height:auto;>", ".image", 0)
            document.getElementById('leftBorder').style.backgroundColor = "red";
            document.getElementById('rightBorder').style.backgroundColor = "red";
        }
        document.getElementById('guess').value = "";
    }
    else{
        //document.getElementById('guess').value = "That is not a number!";
        changeHTML("That is not a number!", ".Error", 0)
    }
    
}

function changeHTML(changeTo, where, num){
    let div = document.querySelector(where);
    div.removeChild(div.getElementsByTagName("p")[num]);

    let newNode = document.createElement("p");
    newNode.innerHTML = changeTo;
    div.appendChild(newNode);
}

