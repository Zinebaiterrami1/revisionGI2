console.log('test script');
let root = document.getElementById("root");
let bttn = document.getElementById("btn");

let cttl = document.getElementById("cttl");

let I;
let i = 0;
let start = false ;

function createDiv(e){
    i=0;
    root.innerHTML="";

    let nbr = document.getElementById("val").value;
    let nb= parseInt(nbr);

    for(let i=0;i<nb;i++){ 
        let elm = document.createElement('div');
        elm.classList.add("element");
        root.appendChild(elm);
    }

}

bttn.addEventListener("click",createDiv);

function ctlcbck(e){
    start = !start
    if(start)
    {
        cttl.value = "Stop";
        I = setInterval(anim,100);
    }
    else
    {
        cttl.value = "Start";
        clearInterval(I);

    }
}



cttl.addEventListener("click",ctlcbck);


function anim(){
    root.children.item(i).classList.toggle("active");
    i = (i+1)%root.children.length;
} 