const englishBody = `<div class="mobile">
<nav class="navbar navbar-light shadow">
  <div class="container">
    <span class="navbar-brand mb-0 h1"
      ><img
        class="img-fluid logo"
        src="./images/Logo/logo-gm-ondas.png"
        alt=""
    /></span>

    <button
      class="open-menu"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#modal-mobile"
    >
      <i class="fas fa-bars"></i>
    </button>
  </div>
</nav>
</div>

<div class="container background-body">
<div class="language none">
  <span class="brazil">
    <img
      class="img-fluid"
      id="br"
      src="./images/icones/brazil-flag.png"
      alt="portuguese"
      onclick="alterLenguage(2)"
    />
  </span>
  <span class="usa">
    <img
      class="img-fluid"
      id="usa"
      src="./images/icones/united-states.png"
      alt="english"
      onclick="alterLenguage(1)"
    />
  </span>
</div>
<div class="container">
  <div class="container overflow-hidden body desktop">
    <div class="row">
      <div class="col-4">
        <div class="menu desktop-menu">
          <div class="logo center">
            <img
              src="./images/Logo/logo-gm-ondas.png"
              alt="logo ondas - Gabriel Marinho"
              width="100px"
            />
            <div class="center">GABRIEL MARINHO DOS SANTOS</div>
          </div>
          <div class="link-menu">
            <ul>
              <li><a href="#home" rel="noopener noreferrer">Home</a></li>
              <li>
                <a href="#education" rel="noopener noreferrer"
                  >Academic education</a
                >
              </li>
              <li>
                <a href="#project" rel="noopener noreferrer">Projects</a>
              </li>
              <li><a href="#work" rel="noopener noreferrer">Works</a></li>
              <li>
                <a href="#gallery" rel="noopener noreferrer">Gallery</a>
              </li>
              <li onclick="modalCurriculum()">
                <a href="#" rel="noopener noreferrer"
                  >Curriculum
                  <i id="icon-download" class="fas fa-download"></i
                ></a>
              </li>
              <li>
                <a href="#contact" rel="noopener noreferrer">Contact</a>
              </li>
            </ul>
          </div>

          <div class="container search">
            <div class="input-group mb-3">
              <input
                id="input-search"
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Buscar"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-append container">
                <button class="submit-lente" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="container higthlights center">
            <div class="title-menu">
              <h3>Recent Highlights</h3>
              <br />
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img src="./images/projetos-img/studiojo.png" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img src="./images/projetos-img/teige.png" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/martelinho-de-ouro.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/assistencia_awp.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/controlhe-finaceiro.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img src="./images/projetos-img/pokedex.jpg" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer"> </a>
                <img
                  src="./images/projetos-img/tabela-brasileiro.jpg"
                  alt=""
                />
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/app-mata-mosquito.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="container social-midia">
            <div class="title-menu">
              <h3>Social Midia</h3>
              <br />
            </div>
            <div class="row">
              <div class="col-1">
                <a
                  href="https://api.whatsapp.com/send?phone=5561993672608&text=Ol%C3%A1%2C%20visitei%20o%20seu%20site%20podemos%20conversar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="https://www.instagram.com/gabrielmsantos_dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="https://github.com/gabrielMarinhocd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="http://www.linkedin.com/in/gabriel-marinho-bsb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="mailto:gabrielmarinhodossantoscd@gmail.com"
                  rel="noopener noreferrer"
                >
                  <i class="far fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 center conteudo">
        <div id="home" class="home">
          <div class="fundo-tecnologias">
            <img
              class="img-fluid"
              src="./images/fundo-tecnologias.jpg
          "
              alt="Fundo Tecnologias"
            />
          </div>
          <div class="foto-gabriel">
            <img
              class="img-fluid perfil"
              src="./images/Galeria/perfil-radios.png"
              alt="Foto Gabriel"
            />
          </div>
          <div class="content">
            <h1>Full Stack Developer</h1>
            <h3>Systems Analyst</h3>
            <h3>Web developer</h3>
            <h3>Computer Technician</h3>
            <h3>Web Designer</h3>
          </div>
        </div>

        <div id="education" class="container education">
          <h2 class="title">Academic education</h2>

          <div class="box">
            <div class="box-title">
              <h4>
                MBA - Multiplatform Mobile Developer IGTI
                <span id="ed-04" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-04">
              <span class="sub-title"
                > MBA - Multiplatform Mobile Developer IGTI
                IGTI</span
              >
              <br />
              <a
                href="https://www.igti.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                Technologist in Systems Analysis and Development<span
                  id="ed-03"
                  class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-03">
              <span class="sub-title">UNIP - Brasilia</span>
              <br />
              <a
                href="https://www.unip.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                Computer Technician
                <span id="ed-02" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-02">
              <span class="sub-title"> Technical School of Brasilia</span>
              <br />
              <a
                href="http://www.etb.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                High school
                <span id="ed-01" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-01">
              <span class="sub-title">CED 06 - Cêilandia</span>
              <br />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                Other courses
                <span id="ed-05" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-05">
              <span class="sub-title">Taking English classes - CILT </span>
              <br />
              <span class="sub-title"
                >Full Stack Javascript Developer - IGTI</span
              >
            </div>
          </div>
        </div>

        <div id="project" class="container project">
          <h2 class="title">Projects</h2>

          <div class="container">
            <div class="carrosel-project">
              <div class="row">
                <div class="col-1">
                  <span class="pointer" onclick="plusDivs(+1)">
                    <i class="fas fa-arrow-left rigth"></i>
                  </span>
                </div>
                <div id="carrosel" class="col-10"></div>
                <div class="col-1">
                  <span class="pointer" onclick="plusDivs(-1)">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="work" class="container work">
          <h2 class="title">Works</h2>
          <div class="container">
            <div class="carrosel-work">
              <div class="row">
                <div class="col-1">
                  <span class="pointer" onclick="plusDivsWork(+1)">
                    <i class="fas fa-arrow-left rigth"></i>
                  </span>
                </div>
                <div id="carosel-work" class="col-10"></div>
                <div class="col-1">
                  <span class="pointer" onclick="plusDivsWork(-1)">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="gallery" class="container gallery">
          <h2 class="title">Gallery</h2>

          <div class="container row images-gallery">
            <div class="row">
              <div class="col-md-4">
                <a
                  href="./images/Galeria/escritorio.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/escritorio.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a href="./images/Galeria/tcc-etb.jpg" data-lightbox="photos">
                  <img
                    src="./images/Galeria/tcc-etb.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/mascara-bus.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/mascara-bus.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/equipe-teigebrasil.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/equipe-teigebrasil.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/Galeria/equipe-mix7.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/equipe-mix7.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/friends-terceirao.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/friends-terceirao.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a href="./images/Galeria/friends.jpg" data-lightbox="photos">
                  <img
                    src="./images/Galeria/friends.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/Galeria/formatura-ced06.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/formatura-ced06.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/Galeria/frineds-etb.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/frineds-etb.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/turma-uniplan.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/turma-uniplan.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a href="./images/Galeria/familia.jpg" data-lightbox="photos">
                  <img
                    src="./images/Galeria/familia.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/praia-barra-lagoa.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/praia-barra-lagoa.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/praia-santonho-vista.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/praia-santonho-vista.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/praia-ingleses.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/praia-ingleses.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/praia-joaquina.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/praia-joaquina.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/praia-santinho-happy.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/praia-santinho-happy.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a href="./images/Galeria/forte.jpg" data-lightbox="photos">
                  <img
                    src="./images/Galeria/forte.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/praia-armacao.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/praia-armacao.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a href="./images/Galeria/home.jpg" data-lightbox="photos">
                  <img
                    src="./images/Galeria/home.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/terno-igreja.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/terno-igreja.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/praca-ktz.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/praca-ktz.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/img-brasilia.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/img-brasilia.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/balneario-2.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/balneario-2.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/Galeria/balneario.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/balneario.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-12">
                <a
                  href="./images/Galeria/paisagem-praia-santinho.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/Galeria/paisagem-praia-santinho.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" class="container contact">
          <div class="container nopadding">
            <div class="row">
              <div class="container col-6 content-social-midia">
                <h3>Contact</h3>
                <ul class="nopadding">
                  <li class="social">
                    <span class="icon-contato">
                      <i class="fab fa-whatsapp"></i>
                    </span>
                    (61) 99367-2608
                  </li>
                  <li class="social">
                    <span class="icon-contato"
                      ><i class="fab fa-instagram"></i>
                    </span>
                    gabrielmsantos.dev
                  </li>
                  <li class="social">
                    <span class="icon-contato">
                      <i class="far fa-envelope"></i>
                    </span>
                    gabrielmarinhodossantoscd@gmail.com
                  </li>
                  <li class="social">
                    <span class="icon-contato"
                      ><i class="fab fa-linkedin-in"></i>
                    </span>
                    gabriel-marinho-bsb
                  </li>
                  <li class="social">
                    <span class="icon-contato"
                      ><i class="fab fa-github"></i>
                    </span>
                    gabrielMarinhocd
                  </li>
                </ul>
                <div class="frase center">
                  <span id="frase-name">
                    "O futuro será a consequência do presente, parasita
                    hoje, um coitado amanhã. <br />
                    Corrida hoje, <b>vitória amanhã.</b>"
                  </span>
                  <br />
                  <span id="text-name" style="margin-top: 20px">
                    Racionais NX Zero
                  </span>
                </div>
              </div>

              <div id="feedback" class="container col-6 blue">
                <h3>Leave your feedback</h3>
                <form onsubmit="feedback()" id="form">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      rows="3"
                      placeholder="Leave your mensage"
                      required
                    ></textarea>
                  </div>

                  <div class="center stars">
                    Website review
                    <br />
                    <a onclick="Avaliar(1)" href="#">
                      <i id="star-01" class="far fa-star"></i>
                    </a>
                    <a onclick="Avaliar(2)" href="#">
                      <i id="star-02" class="far fa-star"></i>
                    </a>
                    <a onclick="Avaliar(3)" href="#">
                      <i id="star-03" class="far fa-star"></i>
                    </a>
                    <a onclick="Avaliar(4)" href="#">
                      <i id="star-04" class="far fa-star"></i>
                    </a>
                    <a onclick="Avaliar(5)" href="#">
                      <i id="star-05" class="far fa-star"></i>
                    </a>
                    <br />
                    <span id="avaliacao" class="avaliacao"> </span>
                  </div>
                  <div class="center">
                    <input id="submit" type="submit" value="SEND" />
                  </div>
                </form>
              </div>

              <div class="col-12 center copyrigth-content">
                <span class="copyrigth">
                  <i class="far fa-copyright"></i> Copyrigth <span id="year"> </span>  all rights
                  reserved</span
                >
                <br />
                <span class="name">GABRIEL MARINHO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="modal modal-menu true"
  id="modal-mobile"
  tabindex="-1"
  aria-labelledby="modal-mobile"
  aria-hidden="true"
>
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="menu">
          <div class="logo-modal center">
            <img
              class="img-fluid"
              src="./images/Logo/logo-gm-ondas.png"
              alt="logo ondas - Gabriel Marinho"
            />
            <div class="center">GABRIEL MARINHO DOS SANTOS</div>
          </div>

          <div class="link-menu">
            <ul>
              <li><a href="#home" rel="noopener noreferrer">Home</a></li>
              <li>
                <a href="#education" rel="noopener noreferrer"
                  >Academic Education</a
                >
              </li>
              <li>
                <a href="#project" rel="noopener noreferrer">Projects</a>
              </li>
              <li><a href="#work" rel="noopener noreferrer">Works</a></li>
              <li>
                <a href="#gallery" rel="noopener noreferrer">Gallery</a>
              </li>
              <li
                onclick="modalCurriculum()"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <a href="#" rel="noopener noreferrer"
                  >Curriculum
                  <i id="icon-download" class="fas fa-download"></i
                ></a>
              </li>
              <li>
                <a href="#contact" rel="noopener noreferrer">Contact</a>
              </li>
            </ul>
          </div>

          <div class="container search">
            <div class="input-group mb-3">
              <input
                id="input-search"
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Buscar"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-append container">
                <button class="submit-lente" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="container higthlights center">
            <div class="title-menu">
              <h3>Recent Highlights</h3>
              <br />
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    with=""
                    src="./images/projetos-img/studiojo.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img src="./images/projetos-img/teige.png" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/martelinho-de-ouro.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/assistencia_awp.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/controlhe-finaceiro.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img src="./images/projetos-img/pokedex.jpg" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer"> </a>
                <img
                  src="./images/projetos-img/tabela-brasileiro.jpg"
                  alt=""
                />
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projetos-img/app-mata-mosquito.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="container social-midia">
            <div class="title-menu">
              <h3>Social Midia</h3>
              <br />
            </div>
            <div class="row">
              <div class="col-1">
                <a
                  href="https://api.whatsapp.com/send?phone=5561993672608&text=Ol%C3%A1%2C%20visitei%20o%20seu%20site%20podemos%20conversar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="https://www.instagram.com/gabrielmsantos_dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="https://github.com/gabrielMarinhocd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="http://www.linkedin.com/in/gabriel-marinho-bsb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div class="col-1">
                <a
                  href="mailto:gabrielmarinhodossantoscd@gmail.com"
                  rel="noopener noreferrer"
                >
                  <i class="far fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="language">
            <span class="brazil">
              <img
                class="img-fluid"
                id="br"
                src="./images/icones/brazil-flag.png"
                alt="portuguese"
                onclick="alterLenguage(2)"
              />
            </span>
            <span class="usa">
              <img
                class="img-fluid"
                id="usa"
                src="./images/icones/united-states.png"
                alt="english"
                onclick="alterLenguage(1)"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="none-modal">
  <h5>Curriculum:</h5>
  <div class="close" id="closeCurriculum">
    <a
      id="closeCurriculum"
      type="button"
      class="btn-close"
      onclick="closeCurriculum()"
    ></a>
  </div>
  <a
    href="./docs/curriculo_desenvolvedor_gabriel_marinho-dos_santos-13-04-2024.pdf"
    target="_blank"
  >
    <img class="icon-model" src="./images/icones/brazil-flag.png" />
    Português</a
  >
  ||
  <a
    href="./docs/english-curriculo_desenvolvedor-GABRIEL_MARINHO_DOS_SANTOS-13-04-2024.pdf"
    target="_blank"
  >
    <img class="icon-model" src="./images/icones/united-states.png" />
    English
  </a>
</div>
</div>
`;
