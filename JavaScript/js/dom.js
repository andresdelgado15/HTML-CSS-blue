let h1 = document.getElementById("titulo");
// console.log(h1.innerHTML);
h1.style.color = "red";
h1.style.background = "yellowgreen";
let parrafo = document.getElementById("parrafo");
// console.log(parrafo.textContent);
parrafo.style.color = "greenS";
parrafo.style.background = "yellow";
parrafo.style.width = "100px";

var boton = document.getElementById("boton");
// vamos a crear eventos y para eso usamos add.
/*para eso usamos el evento que queremos que seria click 
    1. identificamos con get elementbyid
    2. creamos el eventpo add 
    3. creamos la funcion*/
boton.addEventListener("click", function () {
  boton.style.background = "yellow";
  console.log("me diste un click");
});
// cuando pasas por encima se llama mouseover
boton.addEventListener ('mouseover',function(){
    boton.style.background = "red";
  console.log("Pase el mouse por encima");
})

boton.addEventListener ('mouseout',function(){
    boton.style.background = "none";
  console.log("Pase el mouse por encima");
  
})

let cambioFondo = document.getElementById ("ulio");
console.log("cambioFondo");
cambioFondo.style.background = "red";


let cambiarColor = document.getElementById("color" );
cambiarColor.style.color = "aqua";
console.log(cambiarColor.textContent);



let cl = document.getElementById("cl");
cl.style.color = "aqua";
console.log(cl.textContent);


let cl2 = document.getElementsByClassName("cl2");
cl2.style.color = "aqua";
console.log(cl2.textContent);
// boton.onclick = function (){

//     parrafo.style.color = "tomato";
// }
