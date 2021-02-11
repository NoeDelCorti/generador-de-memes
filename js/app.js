
/////////////////// CONSTANTES ///////////////////

// HEADER
const header = document.getElementById('header'); // header
/* const imgNavHeader = document.getElementById('img-nav-header'); */ // pestaña imagen - nav header
const textNavHeader = document.getElementById('text-nav-header'); // pestaña texto - nav header
const darkMoodNavHeader = document.getElementById ('dark-mood-nav-header'); // pestaña modo oscuro - nav header
const ligthMoodHeader = document.getElementById('ligth-mood-nav-header') // opción modo claro nav del header

// MAIN
const imgCenterSection = document.getElementById('img-center-section'); // imagen meme - section
const textForm = document.getElementById('text-form'); // formulario texto - pestaña texto - aside
const firstTextSection = document.getElementById('first-text-section'); // campo texto superior - section
const secondTextSection = document.getElementById('second-text-section'); // campo texto inferior - section
const bottomInput = document.getElementById('bottom-input'); // input texto inferior - aside
const downloadMemeButton = document.getElementById('download-meme-button'); // boton de descarga de meme - debajo de section - main
const darkMood = document.getElementById('dark-mood'); // modo oscuro body
const ligthMood = document.getElementById('ligth-mood'); // modo claro var css

// ASIDE

// PANEL TEXTO
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
const space = document.getElementById('space'); // espaciado
const interlinear = document.getElementById('interlinear'); // interlineado
// BOTONES DE CONTORNO
const none = document.getElementById('none');
const ligthButton = document.getElementById('ligth-button'); // boton contorno claro
const darkButton = document.getElementById('dark-button'); // boton contono oscuro

// PANEL IMAGEN
const imgForm = document.getElementById('img-form'); // formulario imagen - pestaña imagen -aside
const urlImg = document.getElementById('url-img'); // input url imagen - pestaña imagen - aside
const imgFondo = document.getElementById('img-fondo'); // input tipo color para cambiar fondo de imagen panel imagen - aside
const effect = document.getElementById('effect'); // id del select que despliega las opciones de efectos de fondo
// FILTROS EFECTOS IMAGEN
const opacity = document.getElementById('opacity'); // filtro de opacidad
const light = document.getElementById('light'); // filtro brillo
const contrast = document.getElementById('contrast'); // filtro contraste
const blur = document.getElementById('blur'); // filtro desenfoque
const greyScale = document.getElementById('grey-scale'); // filtro escala de grises
const sepia = document.getElementById('sepia'); // filtro sepia
const hue = document.getElementById('hue'); // filtro hue
const saturation = document.getElementById('saturation'); // filtro de saturación
const negative = document.getElementById('negativ'); // filtro negativo
const resetButton = document.getElementById('reset-button'); // boton de restablecer filtros

// -------------------------------------------------------------------------------------------------//

// Funciondes del HEADER - para cambiar pestañas

imgNavHeader = document.getElementById('img-nav-header');


// PESTAÑA IMAGEN

imgNavHeader.addEventListener('click', () =>{
    imgForm.style.display='block';
    textForm.style.display='none';
}); // Elegir opción panel de imagen


// PESTAÑA DE TEXTO

textNavHeader.addEventListener('click', () =>{
    textForm.style.display='block';
    imgForm.style.display='none';
}); // Elegir opción panel de texto


// CAMBIO DE TAMAÑO FUENTE

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

// EVENTO QUE MODIFCA LA FUENTE DEL TEXTO

option.addEventListener('change', () =>{
    firstTextSection.style.fontFamily = `${option.value}`;
    secondTextSection.style.fontFamily = `${option.value}`;
})


// EVENTOS PARA FORMULARIO IMAGEN - poner una imagen url

urlImg.addEventListener('keyup', () =>{
    /* consol.log(urlImg) */
    const imagenCenter = urlImg.value;
    imgCenterSection.style.backgroundImage=`url('${imagenCenter}')`;
    imgCenterSection.style.backgroundSize= 'cover';
    imgCenterSection.style.backgroundRepeat= 'no-repeat';
    imgCenterSection.style.backgroundPosition= 'center';
})

// FUNCIONALIDAD DE BOTONES TEXT-ALIGN (IZQUIERDA-CENTRAR-DERECHA)

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

// OPCIÓN CAMBIO COLOR LETRAS DE TEXTO

color.addEventListener('input', (e) =>{
    const inputColorValue = e.target.value
    firstTextSection.style.color = inputColorValue
    secondTextSection.style.color = inputColorValue
})

// OPCIÓN CAMBIO COLOR DE FONDO TEXTOS

back.addEventListener('input', (e) =>{
    const inputBackValue = e.target.value
    firstTextSection.style.backgroundColor = inputBackValue
    secondTextSection.style.backgroundColor = inputBackValue
})

// OPCIÓN ESPACIADO LETRAS

space.addEventListener('change', (e) =>{
    const spacing = e.target.value;
    firstTextSection.style.letterSpacing = `${spacing}px`;
    secondTextSection.style.letterSpacing = `${spacing}px`;
})

// OPCIÓN DE INTERLINEADO

interlinear.addEventListener('change', () =>{
    firstTextSection.style.lineHeight = interlinear.value
    secondTextSection.style.lineHeight = interlinear.value
})


// OPCIONES (SIN TEXTO SUPERIOR - SIN TEXTO INFERIOR)

const verifyCheck = () => {
    if(topCheckOne.checked && topCheckTwo.checked){
        imgCenterSection.style.height = '100vh'
    }
    else if(topCheckOne.checked || topCheckTwo.checked){
        imgCenterSection.style.height = '65vh'
    }
    else{
        imgCenterSection.style.height = '50vh'
    }
}

topCheckOne.addEventListener('click', () => {
    firstTextSection.classList.toggle('hidden');
    verifyCheck
})
topCheckTwo.addEventListener('click', () =>{
    secondTextSection.classList.toggle('hidden');
    verifyCheck
})



// MODO OSCURO - DARK MOOD
 
function changeLigthMood(){
    document.body.classList.remove('dark-mood');
    document.body.classList.add('ligth-mood');
}

function changeDarkMood(){
    document.body.classList.remove('ligth-mood');
    document.body.classList.add('dark-mood');
}       


// FUNCIÓN PARA QUITAR EL EVENTO REFRESH QUE LOS BOTONES TRAEN POR DEFAULT

function stopDefAction(evt) {
  evt.preventDefault();
}

// FUNCIONALIDAD DE LOS FILTRO - RANGOS

const filtro = () => {
    imgCenterSection.style.filter = `brightness(${light.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${greyScale.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturation.value}%) invert(${negativ.value})` 
};


light.addEventListener('change', filtro);
opacity.addEventListener('change', filtro);
contrast.addEventListener('change', filtro);
blur.addEventListener('change', filtro);
greyScale.addEventListener('change', filtro);
sepia.addEventListener('change', filtro);
hue.addEventListener('change', filtro);
saturation.addEventListener('change', filtro);
negativ.addEventListener('change', filtro);

// BOTONES CONTORNO

darkButton.addEventListener('click', () =>{
    firstTextSection.classList.toggle('contorno-oscuro');
    secondTextSection.classList.toggle('contorno-oscuro');
})

ligthButton.addEventListener('click', () =>{
    firstTextSection.classList.toggle('contorno-claro');
    secondTextSection.classList.toggle('contorno-claro');
})

none.addEventListener('click', () =>{
    firstTextSection.classList.remove('contorno-oscuro');
    secondTextSection.classList.remove('contorno-oscuro');
    firstTextSection.classList.remove('contorno-claro');
    secondTextSection.classList.remove('contorno-claro');
    
})