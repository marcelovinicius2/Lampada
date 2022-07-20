const turnOn = document.getElementById ( "turnOn" );
const turnOff = document.getElementById ( "turnOff" );
const lamp = document.getElementById ("lamp");
const turnNova= document.getElementById ("turnNova");


function islampBrokrer (){
    return lamp.src.indexOf ( 'lampadaQuebrada') > -1
}

function lampOn(){
    if (!islampBrokrer()){
        lamp.src = "./img/lampadaOn.jpg";
    }
}

function lampOff(){
    if (!islampBrokrer()){
    lamp.src = "./img/lampadaOff.jpg";
    }
}

function lampBroker(){
    lamp.src = "./img/lampadaQuebrada.jpg";
}
function lampadaNova(){
    if (islampBrokrer()){
    lamp.src = "./img/lampadaNova.jpg";
}
}


turnOn.addEventListener ( "click", lampOn );
turnOff.addEventListener ( "click", lampOff );
turnNova.addEventListener ( "click", lampadaNova);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener ("dblclick", lampBroker);