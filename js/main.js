let second_hand = document.querySelector(".second");
let minute_hand = document.querySelector(".minute");
let hour_hand = document.querySelector(".hour");

setInterval(clock, 1000);



function clock(){
    // console.log("hello time")
     let date = new Date();
     let second = date.getSeconds() / 60;
     let minute = (second + date.getMinutes()) / 60;
     let hour =(minute + date.getHours()) / 12;
    // console.log(date);

    second_hand.style.transform = `translate(-50%) rotate(${second * 360}deg)`;
    minute_hand.style.transform = `translate(-50%) rotate(${minute * 360}deg)`;
    hour_hand.style.transform = `translate(-50%) rotate(${hour * 360}deg)`;
    
}

clock();