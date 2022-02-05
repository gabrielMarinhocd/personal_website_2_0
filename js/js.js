
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

const insertCarosel = () => {
  const caroselHTML = document.querySelector('#carrosel');
  let gradeHTML = '';
  menu.forEach(({ id, titulo, link, img }) => {
      gradeHTML += ` <div id="${id}" class="mySlides">
                        <div class="slide">
                          <img id="img-${id}" class="img-fluid" src="${img}" alt="${titulo}">
                          <div class="icon-slide">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                              <span class="icone-git-hub">
                                <i class="fab fa-github"></i>
                              </span>
                            </a>
                            <a href="${link}" target="_blank" rel="noopener noreferrer">
                              <span class="icon-open">
                                <i class="fas fa-external-link-alt"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <span id="title-${id}" >${titulo} </span>
                      </div>`;
  });
  

  caroselHTML.innerHTML = gradeHTML;

};

const insertCaroselTrabalhos = () => {
  const caroselHTML = document.querySelector('#carosel-work');

  let gradeHTML = '';
  menuTrabalhos.forEach(({ id, titulo, link, img, subTitulo }) => {
    gradeHTML += ` <div id="${id}" class="slide-work">
                      <div class="slide">
                        <img class="img-fluid" src="${img}" alt="">
                        <div class="icon-slide">
                          <a href="${link}" target="_blank" rel="noopener noreferrer">
                            <span class="icone-git-hub">
                              <i class="fab fa-github"></i>
                            </span>
                          </a>
                          <a href="${link}" target="_blank" rel="noopener noreferrer">
                            <span class="icon-open">
                              <i class="fas fa-external-link-alt"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                      <span id="title-${id}">${titulo} </span>
                      <br />
                      <span id="sub-title-${id}">${subTitulo} </span>
                    </div>`;
  });

  caroselHTML.innerHTML = gradeHTML;
};


insertCarosel();
insertCaroselTrabalhos();


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