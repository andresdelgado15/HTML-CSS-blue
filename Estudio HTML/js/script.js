function accion(){
    //esto es para hacer pruebas en js por consola
    console.log('esta funcionando mi funcion')
    var ancla = document.getElementsByClassName('nav-enlace');
    for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
        
    }
}