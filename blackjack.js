let playerEl=document.getElementById("player-el");
let player = {
    name:"Shishir",
    chips:300
}
playerEl.textContent=player.name+ "--> " + "$" + player.chips;
let cards=[];
let sum=0;
let message="";
let isAlive=true;
let hasBlackJack=false;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
function startgame(){
    let firstCard=getrandomcard();
    let secondCard=getrandomcard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    rendergame();
}
function rendergame(){
    if(sum<=20){
        message="Do you want to draw a new Card?";
        isAlive=true;
        hasBlackJack=false;
        
    }
    else if (sum===21){
        message="You've got a blackjack";
        hasBlackJack=true;
        isAlive=true;

    }
    else{
        message="You are out of the game!!!";
        isAlive=false;
        hasBlackJack=false;
    }
messageEl.textContent=message;
sumEl.textContent="sum: "+sum;
cardsEl.textContent="Cards: ";
for(let i=0; i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" ";
}
}
function getrandomcard(){
    randomCard=Math.floor(Math.random()*14);
    if(randomCard==1){
        return 11;
    }
    else if(randomCard>10){
        return 10;
    }
    else {
        return randomCard;
    }
}
function newcard(){
    if(hasBlackJack==false && isAlive==true)
    {
    let newCard=getrandomcard();
    sum+=newCard;
    cards.push(newCard);
    rendergame();
}
}