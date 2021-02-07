
/////////////////// CONSTANTES ///////////////////

// HEADER
const header = document.getElementById('header'); // header
const imgNavHeader = document.getElementById('img-nav-header'); // pestaña imagen - nav header
const textNavHeader = document.getElementById('text-nav-header'); // pestaña texto - nav header
const darkMoodNavHeader = document.getElementById ('dark-mood-nav-header'); // pestaña modo oscuro - nav header

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
const rigth = document.getElementById('rigth'); // boton alinear a la derecha panel texto - aside
const color = document.getElementById('color'); // opción de color en 
















///////////////////// FUNCIONES //////////////////////////

// Funciondes del HEADER

// Pestaña de Imagen
imgNavHeader.addEventListener('click', () =>{
    imgForm.style.display='block'
    textForm.style.display='none'
}); // Elegir opción panel de imagen

// Pestaña de Testo
textNavHeader.addEventListener('click', () =>{
    textForm.style.display='block'
    imgForm.style.display='none'
}); // Elegir opción panel de texto




// EVENTOS FORMULARIO TEXTO

topInput.addEventListener('keyup', () =>{
    const topInputValue = topInput.value
    firstTextSection.innerHTML=topInputValue;
}); 

bottInput.addEventListener('keyup', () =>{
    const bottInputValue = bottInput.value
    secondTextSection.innerHTML=bottInputValue
});

// EVENTOS PARA FORMULARIO IMAGEN

imgCenterSection.addEventListener('keyup', () =>{
    consol.log(urlImg)
    const imgCenterSection = urlImg.value
    imgCenterSection.style.backgroundImage=`url('${src}')`;
})
