const clickEducation = () => {
  for (let i = 1; i <= 5; i++) {
    let education = document.querySelector(`#ed-0${i}`);

    education.addEventListener("click", () => {
      let iten = document.querySelector(`.iten-0${i}`);
      let event = iten.style.display;
      if (event == "none") {
        iten.style.display = "block";
        education.style.transform = "rotate(180deg)";
      } else {
        iten.style.display = "none";
        education.style.transform = "rotate(0deg)";
      }
    });
  }
};

const insertCarosel = () => {
  const caroselHTML = document.querySelector("#carrosel");
  let gradeHTML = "";
  menu.forEach(({ id, titulo, link, img, github }) => {
    let aContent = "";
    let gContet = "";
    if (github == "diseable") {
      gContent = `<a class="diseable-pointer" >    <span class="icone-git-hub ">
      <i class="fab fa-github"></i>
    </span> </a>`;
    } else {
      gContent = `<a class="active-icon" href="${github}" target="_blank" rel="noopener noreferrer >
                    <span class="icone-git-hub ">
                      <i class="fab fa-github"></i>
                    </span>
                  </a>`;
    }

    if (link == "diseable") {
      aContent = ` <a class="diseable-pointer"> <span class="icon-open">
      <i class="fas fa-external-link-alt"></i>
    </span> </a>`;
    } else {
      aContent = `<a class="active-icon" href="${link}" target="_blank" rel="noopener noreferrer >
          <span class="icon-open">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>`;
    }

    gradeHTML += ` <div id="${id}" class="mySlides">
                        <div class="slide">
                          <img id="img-${id}" class="img-fluid" src="${img}" alt="${titulo}">
                          <div class="icon-slide">
                          ${gContent}
                          ${aContent}
                          </div>
                        </div>
                        <span id="title-${id}" >${titulo} </span>
                      </div>`;
  });

  caroselHTML.innerHTML = gradeHTML;
};

const insertCaroselTrabalhos = () => {
  const caroselHTML = document.querySelector("#carosel-work");

  let gradeHTML = "";
  menuTrabalhos.forEach(({ id, titulo, link, img, subTitulo, github }) => {
    let aContent = "";
    let gContet = "";
    if (github == "diseable") {
      gContent = `<a class="diseable-pointer" >    <span class="icone-git-hub ">
      <i class="fab fa-github"></i>
    </span> </a>`;
    } else {
      gContent = `<a class="active-icon" href="${github}" target="_blank" rel="noopener noreferrer >
                    <span class="icone-git-hub ">
                      <i class="fab fa-github"></i>
                    </span>
                  </a>`;
    }

    if (link == "diseable") {
      aContent = ` <a class="diseable-pointer"> <span class="icon-open">
      <i class="fas fa-external-link-alt"></i>
    </span> </a>`;
    } else {
      aContent = `<a class="active-icon" href="${link}" target="_blank" rel="noopener noreferrer >
          <span class="icon-open">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>`;
    }

    gradeHTML += ` <div id="${id}" class="slide-work">
                      <div class="slide">
                        <img class="img-fluid" src="${img}" alt="">
                        <div class="icon-slide">
                          ${gContent}
                           ${aContent}
                           
                        </div>
                      </div>
                      <span id="title-${id}">${titulo} </span>
                      <br />
                      <span id="sub-title-${id}">${subTitulo} </span>
                    </div>`;
  });

  caroselHTML.innerHTML = gradeHTML;
};

clickEducation();
insertCarosel();
insertCaroselTrabalhos();

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

let slideWork = 1;
showDivsWork(slideWork);

function plusDivsWork(n) {
  showDivsWork((slideWork += n));
}

function showDivsWork(n) {
  let i;
  let x = document.getElementsByClassName("slide-work");
  if (n > x.length) {
    slideWork = 1;
  }
  if (n < 1) {
    slideWork = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideWork - 1].style.display = "block";
}

const divFeedback = document.querySelector("#feedback");
const feedback = async (event) => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const menssagem = document.querySelector("#message").value;
  console.log(stars);

  if (name !== "" && email !== "" && menssagem !== "" && stars !== 0) {
    const preeloader = `<div class="center"> 
    <h3 class="title-sobre">Deixe seu feedback</h3>
      <br>
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    <div>`;

    divFeedback.innerHTML = preeloader;

    const data = new Date();

    const sendFeedback = await fetch(
      `https://gabrielmarinho.herokuapp.com?name=${name}&email=${email}&menssagem=${menssagem}&nota=${stars}&data=${data}`,
      {
        method: "POST",
      }
    );
    await agradecimento(sendFeedback.ok);
  } else {
    alert("Preencha todos os campos");
  }
};

const agradecimento = (res) => {
  if (res) {
    const feedbackCadastrado = `<div class=" animate__animated animate__jackInTheBox  ">
              <h3 class="title-sobre"> Obrigado pelo feedback</h3>
              <img class="like-img" src="./images/like.png" alt="like" />
            </div>`;
    divFeedback.innerHTML = feedbackCadastrado;
  }
};

const inputValue = document.querySelector("#form");
inputValue.addEventListener("submit", (event) => event.preventDefault());

const body = document.querySelector("#body");

const closeCurriculum = () => {
  document.querySelector(".modal-curriculum").className = "none-modal";
};

const modalCurriculum = () => {
  document.querySelector(".none-modal").className = "modal-curriculum";
  $("#modal-mobile").modal("hide");
};

const insertYear = () => {
  const newData = new Date();
  document.querySelector("#year").innerHTML = `${newData.getFullYear()}`;
};

function alterLenguage(i) {
  if (i == 1) {
    body.innerHTML = englishBody;
  } else {
    body.innerHTML = ptBr;
  }
  clickEducation();
  insertCarosel();
  insertCaroselTrabalhos();
  showDivs(slideIndex);
  showDivsWork(slideWork);
  Avaliar();
  insertYear();
}

insertYear();

// document.querySelector('#usa').addEventListener('click', () => {
//   body.innerHTML = englishBody;
//   clickEducation()
//   insertCarosel();
//   insertCaroselTrabalhos();
//   showDivs(slideIndex);
//   showDivsWork(slideWork);
//   console.log('usa');
// })

// document.querySelector('#br').addEventListener('click', () => {
//   body.innerHTML = ptBr;
//   clickEducation()
//   insertCarosel();
//   insertCaroselTrabalhos();
//   showDivs(slideIndex);
//   showDivsWork(slideWork);
//   console.log('br');
// })

// const openEducation = () =>{
//     education.style.display = 'none';
// }
