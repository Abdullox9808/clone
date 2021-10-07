const info = document.querySelector('.malumot__window');
const active = document.querySelector('.active');
const animation =document.querySelector('.animation')
const Gsm = document.querySelector('.GSM-malumot');
const Chek = document.querySelector('.warning')
const GsmChek =document.querySelector('.Gsm-warning')
const menu = document.querySelector('.menu')
const Paket = document.querySelector('.Apaketlar')
document.getElementById('Kbtn').onclick=function(){
    var myinput = document.getElementById('input000').value;
    if(myinput === '1'){
        info.classList.remove('active')
        Gsm.classList.add('active')
    }else if(myinput === '2'){
        Chek.classList.add('active')
    }
}
document.getElementById('Nextbtn').onclick = function(){
    var infoInp =document.getElementById('input001').value;
    if (infoInp === '1') {
        menu.classList.add('active')
        Gsm.classList.remove('active')
    }else if(infoInp === '2'){
        Paket.classList.add('active')
        Gsm.classList.remove('active')
    }else if(infoInp === '3'){
        Chek.classList.add('active')
    }else if(infoInp === '4'){
        Chek.classList.add('active')
    }
}  
document.getElementById('Backbtn').onclick =function(){
    var infoInp =document.getElementById('input001').value;
    if (infoInp === '9') {
        Gsm.classList.remove('active')
       
        info.classList.add('active')
    }else if( infoInp !== '9'){
        GsmChek.classList.add('active')
        Gsm.classList.add('animation')
    }
}
document.getElementById('Backbtn2').onclick = function(){
    menu.classList.remove('active')
    Gsm.classList.add('active')
}
document.getElementById('Backbtn3').onclick = function(){
    Paket.classList.remove('active')
    Gsm.classList.add('active')
}






  