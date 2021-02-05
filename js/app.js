// const primerTexto = document.getElementById(top-input);



/* const urlImg = document.getElementById(url-img);
const imgCenterSection = document.getElementById(img-center-section);

urlImg.addEventListener("keyup", () =>{
    const src = urlImg.value;
    imgCenterSection.style.backgroundImage = `url('${src}')`;
}) */

// *****************************
// botones se convierten en pestañas del header

const imgNavHeader = document.getElementById('img-nav-header');
const textNavHeader = document.getElementById('text-nav-header');
/* const darkMoodNavHeader = document.getElementById ('dark-mood-nav-header'); */
const textForm = document.getElementById('text-form');
const imgForm = document.getElementById('img-form');
const firstTextSection = document.getElementById('first-text-section');
const topInput = document.getElementById('top-input');
const secondTextSection = document.getElementById('second-text-section');
const bottomInput = document.getElementById('bottom-input');

// EVENTOS PALABRAS DEL NAV DEL HEADER (IMAGEN-TEXTO-MODO OSCURO)

imgNavHeader.addEventListener('click', () =>{
    imgForm.style.display='block'
    textForm.style.display='none'
});

textNavHeader.addEventListener('click', () =>{
    textForm.style.display='block'
    imgForm.style.display='none'
});

// EVENTOS FORMULARIO TEXTO

topInput.addEventListener('keyup', () =>{
    const topInputValue = topInput.value
    firstTextSection.innerHTML=topInputValue;
})
bottomInput.addEventListener('keyup', () =>{
    const bottomInputValue = bottomInput.value
    secondTextSection.innerHTML=bottomInputValue;
})