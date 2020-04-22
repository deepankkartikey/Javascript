// CHALLENGE 1: YOUR AGE IN DAYS
function calculateAgeInDays(){
    var birthYear = prompt('Enter Birth year: ');
    var ageInDays = (2020-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(`You are ${ageInDays} days old.`);
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


// CHALLENGE 2: CAT GENERATOR
function generateCat(){
    var img = document.createElement('img');
    img.setAttribute('src','https://sweetytextmessages.com/wp-content/uploads/2018/02/Funny-Cat-Gifs-for-Laugh-2.gif');
    img.setAttribute('alt','cat');
    img.setAttribute('style','width:150px');
    document.getElementById('flex-cat-gen').appendChild(img);
}


// CHALLENGE 3: ROCK, PAPER, SCISSORS
function rpsGame(yourChoice){
    console.log(yourChoice)
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    results = decideWinner(humanChoice, botChoice); 
    console.log('Computer choice: ', botChoice);
    console.log(results);
    message = finalMessage(results); //{'message':'You Won!','color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore  === 0){
        return {'message':'You lost!','color':'red'};
    }else if(yourScore === 0.5){
        return {'message':'You tied!','color':'yellow'};
    }
    else{
        return {'message':'You won!','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //let's remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+
    imagesDatabase[humanImageChoice]+"' height=150px width=150px "+
    "style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+"; font-size: 60px; padding: 30px; '>"+finalMessage['message']+"</h1>";
    botDiv.innerHTML = "<img src='"+
    imagesDatabase[botImageChoice]+"' height=150px width=150px  "+  
    "style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

} 

// CHALLENGE 4: CHANGE COLOR OF ALL BUTTONS
var all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    } else if(buttonThingy.value === 'green'){
        buttonsGreen();
    } else if(buttonThingy.value === 'reset'){
        buttonsColorReset();
    } else{
        buttonsColorRandom();
    }
}

function buttonsRed(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsColorRandom(){
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    for(let i=0; i<all_buttons.length; i++){
        let randomInt = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomInt]);
    }
}


//CHALLENGE 5: BLACKJACK GAME
let blackjackGame={
    'you': {'scoreSpan':'#your-blackjack-result', 'div':'#your-box', 'score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score':0},
    'cards': ['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'J':10,'K':10,'Q':10},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'isTurnsOver':false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const CARDS = blackjackGame['cards'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3')
const lostSound = new Audio('static/sounds/aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);

function blackjackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCard();
        showCard(card,YOU);
        updateScore(card,YOU);
        //console.log(YOU['score']);
        showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return CARDS[randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score']<=21){
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        //console.log(cardImage.src);
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal(){

    if(blackjackGame['isTurnsOver']===true){

        blackjackGame['isStand'] = false;

        // let winner = computeWinner();
        // showResult(winner);

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        
        for(let i=0;i<yourImages.length;i++)
            yourImages[i].remove();

        for(let i=0;i<dealerImages.length;i++)
            dealerImages[i].remove();

        YOU['score']=0;
        DEALER['score']=0;

        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').textContent=0;
        document.querySelector('#your-blackjack-result').style.color='white';
        document.querySelector('#dealer-blackjack-result').style.color='white';

        document.querySelector('#blackjack-result').textContent="Let's Play!";
        document.querySelector('#blackjack-result').style.color="black";

        blackjackGame['isTurnsOver']=true;
    }
}

function updateScore(card, activePlayer){

    if(card === 'A'){
        newScore = activePlayer['score']+blackjackGame['cardsMap'][card][1];
        // If ACE is selected and on adding 11 score is under 21, add 11. 
        //Otherwise add 1.
        if(newScore<21){
            activePlayer['score']+=blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score']+=blackjackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score']+=blackjackGame['cardsMap'][card];
    }  
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color='red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){
    blackjackGame['isStand']=true;

    while(DEALER['score']<16 && blackjackGame['isStand']===true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    // Bot logic to trigger compute winner
    blackjackGame['isTurnsOver']=true;
    let winner=computeWinner();
    showResult(winner);
}

// compute WINNER method
// update wins, losses, draws
function computeWinner(){
    let winner;

    if(YOU['score']<=21){
        // condition: higher score than dealer or dealer busts
       if(YOU['score']>DEALER['score'] || DEALER['score']>21){
         //console.log("YOU WON!...");
         blackjackGame['wins']++;
         winner=YOU;
       }
       else if(YOU['score']<DEALER['score']){
           //console.log("DEALER WON!...");
           blackjackGame['losses']++;
           winner=DEALER;
       }
       else if(YOU['score']===DEALER['score']){
           //console.log("IT'S A DRAW!...");
           blackjackGame['draws']++;
       }
    }
    // condition: when you bust and dealer doesn't
    else if(YOU['score']>21 && DEALER['score']<=21){
        //console.log("YOU LOST!...");
        blackjackGame['losses']++;
        winner=DEALER;
    }
    // condition: both you and dealer busts
    else if(YOU['score']>21 && DEALER['score']>21){
        //console.log("IT'S A DRAW!...")
        blackjackGame['draws']++;
    }

    result=`WINS: ${blackjackGame['wins']} LOSSES: ${blackjackGame['losses']} DRAWS: ${blackjackGame['draws']}`
    console.log(result)
    return winner;
}
        
function showResult(winner){
    let message, messageColor;

    if(blackjackGame['isTurnsOver']===true){
        if(winner === YOU){
            document.querySelector('#wins').textContent=blackjackGame['wins'];
            message='You Won !';
            messageColor='green';
            winSound.play();

        }else if(winner === DEALER){
            document.querySelector('#losses').textContent=blackjackGame['losses'];
            message='You Lost !';
            messageColor='red';
            lostSound.play();

        }else{
            document.querySelector('#draws').textContent=blackjackGame['draws'];
            message='You Drew !';
            messageColor='black';
        }

        document.querySelector('#blackjack-result').textContent=message;
        document.querySelector('#blackjack-result').style.color=messageColor;
    }
}
































