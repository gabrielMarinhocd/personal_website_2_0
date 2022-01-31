
for (let i = 1; i <= 5; i++){
    let education = document.querySelector(`#ed-0${i}`);
    
    education.addEventListener('click', () =>{
        let iten = document.querySelector(`.iten-0${i}`);
        let event = iten.style.display;
        if (event == 'none'){
            iten.style.display = "block";
            education.style.transform = 'rotate(180deg)';
        }else{
            iten.style.display = "none";
            education.style.transform = 'rotate(0deg)';
        }
        
    })
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

let slideWork = 1;
showDivsWork(slideWork);

function plusDivsWork(n) {
  showDivsWork(slideWork += n);
}

function showDivsWork(n) {
  let i;
  let x = document.getElementsByClassName("slide-work");
  if (n > x.length) {slideWork = 1}
  if (n < 1) {slideWork = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideWork-1].style.display = "block";
}




// const openEducation = () =>{
//     education.style.display = 'none';
// }