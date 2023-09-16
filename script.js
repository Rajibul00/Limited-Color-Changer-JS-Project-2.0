let i = 0
let colors = ['red','aqua','brown','orange','grey','purple','pink'];
function changecolor(){
    document.body.style.backgroundColor = colors[i++];
    document.querySelector('button').style.backgroundColor = colors[i+2];
    if(i==7){
        i = 0
    }
}