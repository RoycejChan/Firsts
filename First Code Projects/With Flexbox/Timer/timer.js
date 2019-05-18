let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
s = 0;
m = 0;
h = 0;
d = 0;
let body = document.getElementById("body");
let img;
function addsecond() {
    s++;
    if (second.value == 60) {
        return false;
    }
    second.value = s;
}

function subsecond() {
    s--;
    if (second.value == 0) {
        s++;
    }
    second.value = s;
}

function addday() {
    d++;
    day.value = d;

}

function subday() {
    d--;
  
    if (day.value == 0) {
        d++;
    } 
     day.value = d;
}

function addminute() {
    m++;
    if (minute.value == 60) {
        return false;
    }
    minute.value = m;

}

function subminute() {
    m--;
    if (minute.value == 0) {
        m++;
    }
    minute.value = m;
}


function addhour() {
    h++;
    if (hour.value == 24) {
        h--;
    }
    hour.value = h;

}

function subhour() {
    h--;
    if (hour.value == 0) {
        h++;
    }
    hour.value = h;
}

function start() {
    setInterval(countdown, 1000);
    let y = document.getElementById("plus");
    let q = document.getElementById("plus2");
    let w = document.getElementById("plus3");
    let e = document.getElementById("plus4");
    let x = document.getElementById("start");   
    x.style.display = "none";
    y.style.display = "none";
    e.style.display = "none";
    w.style.display = "none";
    q.style.display = "none";
    let z = document.getElementById("sub");
    let c = document.getElementById("sub2");
    let v = document.getElementById("sub3");
    let b = document.getElementById("sub4");
    z.style.display = "none";
    c.style.display = "none";
    v.style.display = "none";
    b.style.display = "none";
}

function countdown() {
 if (day.value == 0 && hour.value == 0 && minute.value == 0) {
        second.value--;
        //to keep it from being negative.   
        if (second.value < 0) {
            second.value = "0";
        }  
    } else {
        second.value--;
        if (second.value == 0) {
            second.value = 60;
            minute.value--;
            if (minute.value < 0) {
                minute.value++;
            }
        }
    }
   //other section 
    if (minute.value == 0) {
        hour.value--;
        //to keep it from being negative.   
        if (hour.value < 0) {
            hour.value = "0";
        }  
    }
   //last section 
    if (hour.value == 0) {
        day.value--;
        //to keep it from being negative.   
        if (day.value < 0) {
            day.value = "0";
        }  
    }
//bug fixing 

    if ( hour.value != 0 || hour.value == 0 && minute.value == 0 ) {
            minute.value = "60";
    }

    if ( day.value != 0 || day.value == 0 && minute.value == 0 && hour.value == 0) {
        minute.value = "60";
        hour.value = "24";
    } 

    if (second.value == 0 && day.value == 0 && hour.value == 0) {
        minute.value = "60";
    }

    if ( day.value == 0 && hour.value == 0 && minute.value == 0 && second.value == 0) {
        console.log("Youre finished");
        document.write("Timer Done");
    }
}