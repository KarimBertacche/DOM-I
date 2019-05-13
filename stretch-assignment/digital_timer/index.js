console.log('I am working');
let countS = 0;
let countH = 0;
let intervalSeconds = window.setInterval(counterSecond, 1000);
const tens = document.querySelector('#secondTens');
// let intervalSingleDigitSeconds = window.setInterval(counterSingleDigitSeconds, 1000);
let intervalHundreds = window.setInterval(counterHundreds, 100);
// let intervalMilliSeconds = window.setInterval(counterMilliSeconds, 100);
console.log(intervalSeconds);

function counterSecond() { 
  // Your code here
    if(countS < 9){
        document.querySelector('#secondOnes').textContent = ++countS;    
    } else if(count = 10){
        countS = 0; 
        document.querySelector('#secondTens').textContent = 1; 
    }  
    return count;  
}

function counterHundreds() { 
    // Your code here
    if(countH <= 9){
        document.querySelector('#msHundreds').textContent = ++countH; 
        document.querySelector('#msTens').textContent = ++countH;   
    } else if(countH > 9){
        countH = 0;
        document.querySelector('#msHundreds').textContent = 0;  
        document.querySelector('#msTens').textContent = 0;  
    }
}


