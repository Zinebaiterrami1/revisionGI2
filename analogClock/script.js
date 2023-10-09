let h = document.querySelector("#polyline387");
let m = document.querySelector("#polyline392");
let s = document.querySelector("#polyline397");


function updateClock()
{
    let d = new Date ();
    let hr = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    
    
    //let hd = 0;
    let md = min*6;
    console.log(md);
    let sd = sec*6;
    console.log(sd);
    
    m.style.transform = `rotate(${md}deg)`;
    s.style.transform = `rotate(${sd}deg)`;
    }

I = setInterval(updateClock,1000);
//clearInterval(I);
