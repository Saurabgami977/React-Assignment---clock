let hourHand = document.getElementById('hourHand');
let minuteHand = document.getElementById('minuteHand');
let secondHand = document.getElementById('secondHand');
let box = document.getElementById('box');

setInterval(() => {
    dt = new Date;
    let second = dt.getSeconds();
    let minute = dt.getMinutes();
    let hour = dt.getHours();
    let time = 'A.M.'
    if(hour < 12){
        time = "A.M."
    }else{
        time = "P.M.";
        hour = hour - 12;
    }
    
    let hourDegree = 30 * hour + minute/2;
    let minuteDegree = 6 * minute;
    let secondDegree = 6 * second;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    box.innerHTML = `<h1> ${hour}:${minute}:${second} ${time} </h1>`

},1000)