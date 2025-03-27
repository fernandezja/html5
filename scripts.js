
//No intrusivo
//var form = document.getElementsByClassName("form-contacto");

//form.addEventListener("submit", enviar());


//No intrusivo
var btn2 = document.getElementById("btn2");

btn2.addEventListener('click', function(){
    console.log('click en bton 2');
    enviar();
})

function enviar(){
    alert('enviando...');   

}