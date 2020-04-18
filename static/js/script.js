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


































