
let timeDisplay = document.getElementById("time-display");
let message = document.getElementById("message");
let img = document.getElementById("img");
let button = document.getElementById("partyTimeButton");

let wakeup = 7;
let lunch = 12;
let nap = 3;

function getTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let zone = "AM";

    if (currentHour => 12) {
        zone = "PM";
        currentHour = currentHour -12;
    }  

    if (currentMinute < 10)
    {
        currentMinute = "0" + currentMinute;
    }
 
    if (currentSecond < 10)
    {
        currentSecond = "0" + currentSecond;
    }
    let Display = currentHour + ":" + currentMinute + ":" + currentSecond + zone;
    timeDisplay.innerHTML = Display;
    setInterval(getTime, 1000);
}    
getTime();
function changeImg() {
    let currentTime = new Date();
    let hour = 3;
    let imgs;
    let txtMsge;
    let zones = "PM";
    let x = 3;
    //nap gif
    if (hour > 12) {
        imgs = "https://thumbs.gfycat.com/NimbleReliableAztecant-size_restricted.gif";
        txtMsge = "It's Lunch Time Fatty!";
        zones= "PM";
    } 
   
    //lunch gif
    if ( hour => 3) {
        imgs = "https://cdn.acidcow.com/pics/20130205/gifs_10.gif";
        txtMsge = "Nap Time Sleep Head!";
        zones= "PM";
    }
    
    //wake gif
    if ( hour => 7 && x > 2 ) {
        imgs = "https://xeniaboutique.files.wordpress.com/2018/02/gregariousevilcygnet-max-1mb.gif";
        txtMsge = " Wake up Sleepy Head!";
    }
    
    //sleep gif
    if ( hour => 7 ) {
        imgs = "https://thumbs.gfycat.com/NimbleReliableAztecant-size_restricted.gif";
        txtMsge = "Sleep Time Sleepy Head!";
        zones= "PM";
    } 
    img.src = imgs;
    message.innerHTML = txtMsge;
}
changeImg();

button.addEventListener('click', party);

function party() {
    button.style.backgroundColor = "Red";
   let imgs = "https://media1.tenor.com/images/5aa1cf496e032d63f8bb71865eaca196/tenor.gif?itemid=5367695";
    img.src = imgs;
    message.style.fontSize = "3em";
    message.innerHTML = "AHH GO CRAZY AHH GO CRAZY!";
}