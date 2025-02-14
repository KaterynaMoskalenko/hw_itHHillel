/* ==== 1. === */
// let firstNum = parseInt(prompt('enter number', 9));
// let secondNum = parseInt(prompt('enter number', 7));

// if (firstNum >secondNum) {
//     console.log(` ${firstNum} is bigger`)
// }
// if (firstNum === secondNum) {
//     console.log(` ${firstNum} is equal ${secondNum}`)
// }
// else if ( secondNum > firstNum) {
//     console.log(` ${secondNum}is bigger `)
// }


/* === 2. === */
let distanceInKm = 1;
let distanceInFout = 1;

distanceInFout = 0.305/1000;
if(distanceInFout < distanceInKm){
   console.log(`${distanceInKm} is bigger on ${distanceInKm-distanceInFout}`)
}

/* === 3. === */

// let b = prompt('enter ...',10);
// let a = prompt('enter ...',2);

// console.log(10/2 ? 'yes a is dilnyk': 'no')

// if (10/2){
//     console.log('yes a is dilnyk')
// }
// else{ console.log('no')}


/* === 4. === */

// let numberAth = prompt('enter number', 12345);

// let lastNum = numberAth.split('').slice(-1);
// console.log(lastNum);
// console.log(lastNum % 2===0 ? 'even' : 'odd');


/* === 5. ===*/

// let twoDigitNum = prompt('enter please two digit number', 13);

// let arrTwoDigitNum = twoDigitNum.split('');
// console.log(arrTwoDigitNum);
// console.log(arrTwoDigitNum[0] > arrTwoDigitNum[1] ? 'First number is bigger' : 'second number is bigger')


/* === 6. === */

// let thirdDigitNum = prompt('enter please thirdo digit number', 131);  

// let lastNum = thirdDigitNum %10 ;
// console.log(lastNum);
// let sum = 0;
// sum=sum+lastNum;
// let num2 = (thirdDigitNum - lastNum)% 100 /10
// console.log(num2)
// sum = sum + num2;
// let num1 = (thirdDigitNum - lastNum - num2*10) % 1000 /100
// console.log(num1);
// sum = sum + num1;
// console.log(sum)
// console.log(sum %2 ===0 ? 'odd' :'even')
// console.log(sum %5 !==0 ? 'no, not a multiple of five' :'multiple')

// let multiple = 1;
// multiple = lastNum*num2**num1;
// console.log(multiple);
// console.log(multiple<100 ? 'less 100' : 'more 100')

// console.log(lastNum === num1 && lastNum === num2)
// console.log(lastNum === num1 || lastNum === num2)


/* === 7. === */

// let sixDigitNum = prompt('Specify please six digit number ', 123321);

// let sixDigitNum2 =  sixDigitNum.split('').slice(0,3);
// sixDigitNum = sixDigitNum.split('').slice(3,6)
// console.log(sixDigitNum);
// console.log(sixDigitNum2) 
// console.log(
//     (sixDigitNum[0] === sixDigitNum2[2] && sixDigitNum[1] === sixDigitNum2[1] && sixDigitNum[2] === sixDigitNum2[0]) ?
// 'Yes, it is a six-digit number Mirror' : 'No,  it is not a six-digit number Mirror' )


/* === ДЗ 4.1. Робота з prompt === */
// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

// let nameUser = prompt('Specify please your name', "Kate");
// alert (`Hello, ${nameUser}! How are you?` );


/* === ДЗ 4.2. Перевірка числа === */

// Дано тризначне число, яке надае користувач, потрибно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

// let userNumber = prompt('Specify please third-digit number');

// console.log(userNumber.length !== 3 ? 'specify please just third-digit number' : 'good your number is third-digit number');
// if (userNumber[0] === userNumber[1] && userNumber[0] === userNumber[2]) {
//     console.log('and all three digits in this number are the same')
// } else if(userNumber[0] === userNumber[1] || userNumber[0] === userNumber[2] || userNumber[1] === userNumber[2]){

//     console.log( 'and two digits in this number are the same' );
// }else console.log('noone')



/* === ДЗ 4.3. Портрет користувача === */

// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

// його вік;
// "Ти живеш у столиці..." живеш у місті…”
// Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. повідомлення “Круто! Хочеш стати …? і  на місце точок ім'я та прізвище 

// Все це має бути відображено в одному вікні (алерті).

//  “Шкода, що Ви не захотіли ввести свій(ю) …” 


let userBirth =prompt("Enter your  year of birth please");
const currentYear = new Date().getFullYear();
let userBirthMessage = `Your age is ${currentYear-userBirth} `;
let   userMessage = 'Unfortunately, you did not enter the data';
let userCard;

if (userBirth === null) {
    alert('we clicked cancel you do not want to continue playinge');     
    userBirthMessage = userMessage;
}
else if (!userBirth) {
    alert('It is a pity you did not want to enter your age'); 
    userBirthMessage = userMessage;
}
else { userBirthMessage;
}

userCard = `
${userBirthMessage} 

`;
let userLocation = prompt('What place are you in?');

let objCity = {
    'Kyiv': 'Ukraine',
    'Washington': 'USA',
    'London': 'Great Britian',
    'Paris': 'France',
    'Berlin': 'Germany',
}
let userLocationMessage = `You live in the capital ${objCity[userLocation]}`;
if (userLocation === null) {
    alert('we clicked cancel you do not want to continue playinge');  
    userLocationMessage = userMessage;

}
else if (!userLocation) {
    alert('It is a pity you did not want to enter your city'); 
    userLocationMessage = userMessage;
}
else { userLocationMessage;
};

if (userBirthMessage !== userLocationMessage ){
    userCard = `
    ${userBirthMessage} 
    ${userLocationMessage}
    `;
}


let userHobby = prompt('What is your favorite sport?');

let objKindOfSport = {'ridding' : 'Henrik van Eckerman',
     'swimming' : ' Michael Phelps', 
     'jogging' : 'I am'};

let userHobbyMessage = `“Cool! Do you want to become ${objKindOfSport[userHobby]}?`;

     if (userHobby === null) {
        alert('we clicked cancel you do not want to continue playinge');  
        userHobbyMessage = userMessage;
    }
    else if (!userHobby) {
        alert('It is a pity you did not want to enter your hobby'); 
        userHobbyMessage = userMessage;
    }
    else { userHobbyMessage;
    }
   
    if (userLocationMessage !== userHobbyMessage || userBirthMessage !== userHobbyMessage){
        userCard = `
        ${userBirthMessage} 
        ${userLocationMessage}
        ${userHobbyMessage}
        `;
    };    

alert(userCard);


