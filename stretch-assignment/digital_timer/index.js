console.log('I am working');
let count = 0;
let intervalSeconds = window.setInterval(counterSecond, 1000);
let intervalSingleDigitSeconds = window.setInterval(counterSingleDigitSeconds, 100);
let intervalHundreds = window.setInterval(counterHundreds, 100);
let intervalMilliSeconds = window.setInterval(counterMilliSeconds, 100);

function counterSecond() { 
  // Your code here
  if(count < 1){
    document.querySelector('#secondTens').textContent = ++count;    
  } else if(count > 1){
    count = 0;
    document.querySelector('#secondTens').textContent = ++count;   
  }   
}

function counterSingleDigitSeconds() { 
    // Your code here
    if(count < 9){
        document.querySelector('#secondOnes').textContent = ++count;    
    } else if(count >= 9){
        count = 0;
        document.querySelector('#secondOnes').textContent = ++count;   
    }
    
}

function counterHundreds() { 
    // Your code here
    if(count <= 9){
        document.querySelector('#msHundreds').textContent = ++count;   
    } else if(count > 9){
        count = 0;
        document.querySelector('#msHundreds').textContent = ++count;  
    }
}

function counterMilliSeconds() { 
    // Your code here
    if(count <= 9){
        document.querySelector('#msTens').textContent = ++count;    
    } else if(count > 9){
        count = 0;
        document.querySelector('#msTens').textContent = ++count;   
    }
}


