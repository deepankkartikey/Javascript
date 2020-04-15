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





































