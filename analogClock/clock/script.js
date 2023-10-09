let h = document.querySelector(".heures");
let m = document.querySelector(".minutes");
let s = document.querySelector(".secondes");


let cm = document.querySelector(".cmin");
let cs = document.querySelector(".csecondes");
let cds = document.querySelector(".cmsec");

let ctrl = document.querySelector("#ctrl");
let reset = document.querySelector("#reset");

let I;
let I2;
function updateClock()
{
    let d = new Date ();
    let hr = ((d.getHours()+11) % 12 +1);
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hd = hr * 30;
    let md = min*6;
    let sd = sec*6;
   
    
    m.style.transform = `rotate(${md-180}deg)`;
    s.style.transform = `rotate(${sd-180}deg)`;
    h.style.transform = `rotate(${hd-180}deg)`;
    }

I = setInterval(updateClock,1000);
//clearInterval(I);

let t=0;
function updateChrono()
{
    
    let md = 0.001;
    let sd = 0.006;
    let dsd = 3.6;
   
    
    cm.style.transform = `rotate(${md*t-180}deg)`;
    cs.style.transform = `rotate(${sd*t-180}deg)`;
    cds.style.transform = `rotate(${dsd*t-180}deg)`;

    t+= 10;
} 
let pause= true;
ctrl.addEventListener("click", () => {
    if(pause){
        I2 = setInterval(updateChrono,10);
        ctrl.value = "stop";
    }
    else{
        clearInterval(I2);
        ctrl.value = "start";
    }
    pause=!pause;
});
reset.addEventListener("click", () =>{
    clearInterval(I2);
    t=0;
    updateChrono();
    ctrl.value = "start";
    pause= true;
    t=0;
});


