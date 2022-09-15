//DRY - dont repeat yourself

let player = { //creates player object.Contains two keys, name and chips
    name: "Per",
    chips: 200 
}
let cards = [] //creates a new array-cards
let sum = 0 //set to 0 by default
let hasBlackJack = false;
let isAlive = false; 
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let PlayerEl = document.getElementById("player-el") //grabs ahold if the player-el paragragh and stores it in a variable called playerE;
PlayerEl.textContent = player.name + ": $" + player.chips //Renders the players name and chips in playerEL

function getRandomCard(){ //creates function getRandomCard()
    let randomNumber = Math.floor(Math.random() * 13) + 1; //makes function return a random number between 1 and 13
    if (randomNumber > 10){// if 11-13 -> return 10
        return 10
    } else if (randomNumber === 1){ // if 1 -> return 11
        return 11
    } else{
    return randomNumber
    }
} 

function startGame(){ //creates a new function that called startGame() that calls renderGame()
    
    isAlive = true
    let firstCard = getRandomCard() //using getRandomCard() to set the value of the first card
    let secondCard = getRandomCard() //using getRandomCard() to set the value of the second card 
    cards = [firstCard, secondCard] //creates a new array-cards- that contains firstCard and secondCard
    sum = firstCard + secondCard; //sum contains firstCard and secondCard
    
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
        for( let i = 0 ; i < cards.length; i++){ //Creates a for loop that renders out all the cards instead of just two 
            cardsEl.textContent += cards[i] + " "
            } 
    sumEl.textContent = "Sum: " + sum //render out ALl THGE CARDS WE HAVE
    if (sum <= 20) {
        message = "Do you want to draw a new card?" 
    }else if(sum === 21){
        message = "You've got BlackJack!" 
        hasBlackJack = true;
    }else{
        message = "You're out of the game!"
        isAlive = false;
    }  
messageEl.textContent = message 

}

function newCard(){
    if (isAlive === true &&  hasBlackJack === false) {// Only allow player to get a new card if she IS alive and does NOT have blackJack
        let card = getRandomCard() //create a card variable, and using getRandomCard() to set the value of the card
        sum += card // add the new card to the sum variable
        cards.push(card) //pushes the card to the cards array
        renderGame()

    }
}




