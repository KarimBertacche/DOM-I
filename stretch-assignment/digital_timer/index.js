console.log('I am working');


const tens = document.querySelector('#secondTens');
const ones = document.querySelector('#secondOnes');
const hundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const digits = document.querySelectorAll('.digit');

tens.textContent = 0;
ones.textContent = 0;
hundreds.textContent = 0;
msTens.textContent = 0;
let count = 0;
let countH = 0;
let countO = 0;
let countT = 0;

function counter() { 
  // Your code here
    if(countT !== 1){
        if(count < 10){
            msTens.textContent = ++count; 
            if(count >= 10){
                msTens.textContent = 0; 
                hundreds.textContent = ++countH;
                count = 0;
                if(countH >= 10){
                    hundreds.textContent = 0;
                    ones.textContent = ++countO;
                    count = 0;
                    countH = 0;
                    if(countO >= 10){
                        ones.textContent = 0;
                        tens.textContent = ++countT;
                        count = 0;
                        countH = 0;
                        countO = 0;
                    }
                }
            } 
        } 
    } else {
        digits.forEach(el => el.style.color = 'red');
        return countT;
    }
}

const btn = document.createElement('button');
btn.textContent = 'Start Timer';
btn.style.cursor = 'pointer';
btn.style.padding = '.5rem';
btn.style.margin = '1rem';
btn.style.borderRadius = '5px';
const dig = document.querySelector('div');
dig.insertAdjacentElement('afterend', btn);

btn.addEventListener('click', function(event){
    let intervalSeconds = window.setInterval(counter, 10);
})




