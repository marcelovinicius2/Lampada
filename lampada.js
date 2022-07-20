const turnOn = document.getElementById ("turnOn");
const turnOff = document.getElementById ("turnoff");
const lamp = document.getElementById ("lamp");

function lampOn(){
    lamp.src = "./img/lampadaOn.jpg";
}
function lampOff(){
    lamp.src = "./img/lampadaOff.jpg";
}

function lampBroker(){
    lamp.src = "./img/lampadaQuebrada.jpg";
}

turnOn.addEventListener ("click", lampOn);
turnOn.addEventListener ("click", lampOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("dblclick", lampBroker);