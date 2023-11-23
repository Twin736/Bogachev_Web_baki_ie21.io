let a = ''; // first number
let b = ''; // secont number
let sign = ''; // знак операции
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '+/-', '%'];

// экран 
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; // first number and result
    b = ''; // second number 
    sign = ''; // знак
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a += key;
            
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b , sign);
        return;
    }

     // если нажата клавиша + - / *
     if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b , sign);
        return;
    }

    // нажата =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
                    case "+/-" :
                    if (a !== '') {
                        a = String(-a);
                        out.textContent = a;
                    } else {
                        b = String(-b);
                        out.textContent = b;
                    }
                    break;

                    case "%" :
                    if (a !== '') {
                        a = String(a / 100);
                        out.textContent = a;
                    } else {
                        b = String(b / 100);
                        out.textContent = b;
                    }    

        }
        finish = true;
        out.textContent = a;
        console.table(a, b , sign);
    }

}

// document.getElementById("nt").addEventListener("click", function() {
//     var calc = document.querySelector('.calc');
//     if (calc.style.background === "#f0adad") {
//       calc.style.background = "#333";
//       calc.style.color = "#fff";
//     } else {
//       calc.style.background = "#f0adad";
//       calc.style.color = "#000";
//     }
//   });

function darkmode() {
    const body =document.body
    const wasDarkmode = localStorage.getItem('darkmode') ==='true'

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('dark-mode', !wasDarkmode)
}

document.querySelector('.nt').addEventListener('click',darkmode)

function onload(){
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') ==='true')
}

document.addEventListener('DOMContentLoaded',onload)