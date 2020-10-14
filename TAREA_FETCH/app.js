/*
  Fetch API: herramienta disponible en los navegadores que me permite 
  pedir/guardar datos a un servidor local o remoto. 
  Generalmente es un intercambio de mensajes HTTP + JSON pero no es obligatorio el uso de JSON.

 Para hacer:
 1-ok-Crear un input de tipo texto para que el usuario ingrese un nombre de pokemon.
 2-ok-Cuando haga click sobre el boton, tomar el valor del input y armar la url.
 3-Realizar el fetch para traer los datos usando la pokeapi. 
 (Todo lo que esta funcionando debería seguir haciendo lo mismo).
 4-BONUS: Agregar un elemento checkbox "mostrar JSON". 
 Si esta activo mostrar el JSON recibido en pantalla. Si no esta activo, no mostrar el JSON.
*/

//1-DOM
const btn               =document.querySelector(".btn");
const respuestaJson     =document.querySelector(".respuesta_json");   //color rojo
const respuesta         =document.querySelector(".respuesta");        //color verde
const input             =document.querySelector(".aqui");             //color azul

//2-Eventos
btn.addEventListener("click", clickHandler);

//3-Callbacks
function clickHandler(){
  const url             =`https://pokeapi.co/api/v2/pokemon/${input.value}`;//color azul
  
  fetch(url)
    .then(function(response){
      if(response.status!==200){
        respuesta.innerText = "Error: No encontramos tu Pokemon :(";    
      }
      return response.json();
    })
    .then(function(data){//JSON.stringify() para convertir OBJETOS JS a cód JSON 
      //Mostrar respuesta en JSON
      respuestaJson.innerText=JSON.stringify(data, null,3);          //color rojo
      //Crear/Mostrar imagen
 //     respuesta.appendChild(createDiv(data.moves[2].move.name));
      respuesta.appendChild(createImg(data.sprites.front_default,"pokemon"));// color verde
      console.log(data);
    })
    .then(data=>{

    })

}

//4-Funciones auxiliares
function createImg(imgURL, name){
  const img     =document.createElement("img");
  img.src       =imgURL;
  img.alt       =name;
  return img;
}
/*
function createDiv(){
  const div     =document.createElement("div");
  div.innerHTML =`
  Uno de sus movientos es: ${data.moves[2].move.name} 
  `
}
*/





