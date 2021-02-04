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


imgNavHeader.addEventListener('click', () =>{
    imgForm.style.display='block'
    textForm.style.display='none'
});

textNavHeader.addEventListener('click', () =>{
    textForm.style.display='block'
    imgForm.style.display='none'
});