
/////////////////// CONSTANTES ///////////////////

// HEADER
const header = document.getElementById('header'); // header
/* const imgNavHeader = document.getElementById('img-nav-header'); */ // pestaña imagen - nav header
const textNavHeader = document.getElementById('text-nav-header'); // pestaña texto - nav header
const darkMoodNavHeader = document.getElementById ('dark-mood-nav-header'); // pestaña modo oscuro - nav header
const ligthMoodHeader = document.getElementById('ligth-mood-nav-header')
// MAIN
const urlImg = document.getElementById('url-img'); // input url imagen - pestaña imagen - aside
const imgCenterSection = document.getElementById('img-center-section'); // imagen meme - section
const textForm = document.getElementById('text-form'); // formulario texto - pestaña texto - aside
const imgForm = document.getElementById('img-form'); // formulario imagen - pestaña imagen -aside
const firstTextSection = document.getElementById('first-text-section'); // campo texto superior - section
const secondTextSection = document.getElementById('second-text-section'); // campo texto inferior - section
const bottomInput = document.getElementById('bottom-input'); // input texto inferior - aside
const downloadMemeButton = document.getElementById('download-meme-button'); // boton de descarga de meme - debajo de section - main

// ASIDE
const asidePanel = document.getElementById('aside-panel'); // aside
const topInput = document.getElementById('top-input'); // input texto superior pestaña texto - aside
const topCheckOne = document.getElementById('top-check-1'); // input opción sin texto superior - aside
const bottInput = document.getElementById('bott-input'); // input texto inferior pestaña texto - aside
const topCheckTwo = document.getElementById('top-check-2'); // input opción sin texto inferior - aside
const option = document.getElementById('option'); // select con opciones de fuente -aside
const inputSize = document.getElementById('input-size'); // input tamaño de fuente -aside
const left = document.getElementById('left'); // boton alinear a la izquierda panel texto - aside
const center = document.getElementById('center'); // boton de centrar panel texto - aside
const right = document.getElementById('right'); // boton alinear a la derecha panel texto - aside
const color = document.getElementById('color'); // opción de color en pestaña texto - aside
const back = document.getElementById('back');
const transparent = document.getElementById('transparent'); // input tipo checkbox fondo transparente
const transparente = document.getElementById('transparente'); // label transparente
// FALTA DECLARAR CONSTANTES DE BOTONES NINGUNO - CLARO - OSCURO
const space = document.getElementById('space');
const interlinear = document.getElementById('interlinear');


// Funciondes del HEADER - para cambiar pestañas

imgNavHeader = document.getElementById('img-nav-header');
// Pestaña de Imagen
imgNavHeader.addEventListener('click', () =>{
    imgForm.style.display='block';
    textForm.style.display='none';
}); // Elegir opción panel de imagen

// Pestaña de Texto
textNavHeader.addEventListener('click', () =>{
    textForm.style.display='block';
    imgForm.style.display='none';
}); // Elegir opción panel de texto


// Cambio de tamaño fuente

inputSize.addEventListener('keyup', () => {
    firstTextSection.style.fontSize = `${inputSize.value}px`
    secondTextSection.style.fontSize = `${inputSize.value}px`
})
inputSize.addEventListener('click', () => {
    firstTextSection.style.fontSize = `${inputSize.value}px`
    secondTextSection.style.fontSize = `${inputSize.value}px`
})

// EVENTOS FORMULARIO TEXTO - para ingresar textos

topInput.addEventListener('keyup', () =>{
    const topInputValue = topInput.value
    firstTextSection.innerHTML=topInputValue;
}); 

bottInput.addEventListener('keyup', () =>{
    const bottInputValue = bottInput.value
    secondTextSection.innerHTML=bottInputValue
});

option.addEventListener('change', () =>{
    firstTextSection.style.fontFamily = `${option.value}`;
    secondTextSection.style.fontFamily = `${option.value}`;
})


// EVENTOS PARA FORMULARIO IMAGEN - poner una imagen url

urlImg.addEventListener('keyup', () =>{
    /* consol.log(urlImg) */
    const imagenCenter = urlImg.value;
    imgCenterSection.style.backgroundImage=`url('${imagenCenter}')`
})

left.addEventListener('click', () =>{
    firstTextSection.style.textAlign = 'left'
    secondTextSection.style.textAlign = 'left'
})

center.addEventListener('click', () =>{
    firstTextSection.style.textAlign = 'center'
    secondTextSection.style.textAlign = 'center'
})

right.addEventListener('click', () =>{
    firstTextSection.style.textAlign = 'right'
    secondTextSection.style.textAlign = 'right'
}) 

color.addEventListener('input', (e) =>{
    const inputColorValue = e.target.value
    firstTextSection.style.color = inputColorValue
    secondTextSection.style.color = inputColorValue
})

back.addEventListener('input', (e) =>{
    const inputBackValue = e.target.value
    firstTextSection.style.backgroundColor = inputBackValue
    secondTextSection.style.backgroundColor = inputBackValue
})

space.addEventListener('change', (e) =>{
    const spacing = e.target.value;
    firstTextSection.style.letterSpacing = `${spacing}px`;
    secondTextSection.style.letterSpacing = `${spacing}px`;
})

interlinear.addEventListener('change', () =>{
    firstTextSection.style.lineHeight = interlinear.value
    secondTextSection.style.lineHeight = interlinear.value
})




/* // MODO OSCURO - DARK MOOD ///////// preguntar a John /////
 
function changeLigthMood(){
    document.body.classList.remove('dark-mood');
    document.body.classList.add('ligth-mood');
}

function changeDarkMood(){
    document.body.classList.remove('ligth-mood');
    document.body.classList.add('dark-mood');
}       
//////////////////// preguntar a John ////////////// */

// Función que saca el evento refresh de los botones dados por default
function stopDefAction(evt) {
  evt.preventDefault();
}