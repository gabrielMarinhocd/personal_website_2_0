const ptBr = `<div class="mobile">
<nav class="navbar navbar-light shadow">
  <div class="container">
    <span class="navbar-brand mb-0 h1"
      ><img
        class="img-fluid logo"
        src="./images/logo-gm-ondas.png"
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
      src="./images/icons/brazil-flag.png"
      alt="portuguese"
      onclick="alterLenguage(2)"
    />
  </span>
  <span class="usa">
    <img
      class="img-fluid"
      id="usa"
      src="./images/icons/united-states.png"
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
              src="./images/logo-gm-ondas.png"
              alt="logo ondas - Gabriel Marinho"
              width="100px"
            />
            <div class="center">GABRIEL MARINHO DOS SANTOS</div>
          </div>
          <div class="link-menu">
            <ul>
              <li>
                <a href="#home" rel="noopener noreferrer">Home</a>
              </li>
              <li>
                <a href="#education" rel="noopener noreferrer"
                  >Formação Acâdemica</a
                >
              </li>
              <li>
                <a href="#project" rel="noopener noreferrer"
                  >Portifólio</a
                >
              </li>
              <li>
                <a href="#work" rel="noopener noreferrer">Trabalhos</a>
              </li>
              <li>
                <a href="#gallery" rel="noopener noreferrer">Galeria</a>
              </li>
              <li onclick="modalCurriculum()">
                <a href="#" rel="noopener noreferrer"
                  >Crurriculo
                  <i id="icon-download" class="fas fa-download"></i
                ></a>
              </li>
              <li>
                <a href="#contact" rel="noopener noreferrer">Contato</a>
              </li>
            </ul>
          </div>

          <div class="container search">
            <div class="input-group mb-3">
              <input
                id="input-search"
                type="text"
                class="form-control"
                placeholder="Buscar"
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
              <h3>Destaques recentes</h3>
              <br />
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/studiojo.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img src="./images/projects-imgs/teige.png" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/martelinho-de-ouro.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/assistencia_awp.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/controlhe-finaceiro.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img src="./images/projects-imgs/pokedex.jpg" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer"> </a>
                <img
                  src="./images/projects-imgs/tabela-brasileiro.jpg"
                  alt=""
                />
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/app-mata-mosquito.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="container social-midia">
            <div class="title-menu">
              <h3>Redes Sociais</h3>
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
              src="./images/gallery/perfil-radios.png"
              alt="Foto Gabriel"
            />
          </div>
          <div class="content">
            <h1>Desenvolvedor Full Stack</h1>
            <h3>Analista de Sistemas</h3>
            <h3>Desenvolvedor WEB</h3>
            <h3>Técnico em Informática</h3>
            <h3>Web Designer</h3>
          </div>
        </div>

        <div id="education" class="container education">
          <h2 class="title">Formação Acâdemica</h2>

          <div class="box">
            <div class="box-title">
              <h4>
                Cursando MBA - Desenvolvedor Mobile Multiplataformas
                IGTI
                <span id="ed-04" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-04">
              <span class="sub-title"
                >Cursando MBA - Desenvolvedor Mobile Multiplataformas
                IGTI</span
              >
              <br />
              <a
                href="https://www.igti.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar site
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                Tecnologo em Análise e Desenvolvimento de Sistemas
                <span id="ed-03" class="rigth ed"
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
                Visitar site
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                Técnico em Informática
                <span id="ed-02" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-02">
              <span class="sub-title"
                >ETB - Escola Técnica de Brasilia</span
              >
              <br />
              <a
                href="http://www.etb.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar site
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                Segundo Grau
                <span id="ed-01" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-01">
              <span class="sub-title">CED 06 - Cêilandia</span>
              <br />
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar site
              </a>
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>
                Outros Cursos
                <span id="ed-05" class="rigth ed"
                  ><i class="fas fa-chevron-down"></i
                ></span>
              </h4>
            </div>
            <div class="box-content iten-05">
              <span class="sub-title">Cursando Inglês - CILT </span>
              <br />
              <span class="sub-title"
                >Desenvolvedor Full Stack Javascript - IGTI
              </span>
            </div>
          </div>
        </div>

        <div id="project" class="container project">
          <h2 class="title">Portifólio</h2>

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
          <h2 class="title">Trabalhos</h2>
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

        <div id="gallery" class="gallery">
          <h2 class="title">Galeria</h2>

          <div class="container row images-gallery">
            <div class="row">
              <div class="col-md-4">
                <a
                  href="./images/gallery/escritorio.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/escritorio.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/tcc-etb.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/tcc-etb.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/mascara-bus.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/mascara-bus.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/equipe-teigebrasil.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/equipe-teigebrasil.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/gallery/equipe-mix7.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/equipe-mix7.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/friends-terceirao.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/friends-terceirao.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/gallery/friends.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/friends.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/gallery/formatura-ced06.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/formatura-ced06.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/gallery/frineds-etb.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/frineds-etb.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/turma-uniplan.jpeg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/turma-uniplan.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/familia.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/familia.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/praia-barra-lagoa.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/praia-barra-lagoa.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/praia-santonho-vista.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/praia-santonho-vista.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/praia-ingleses.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/praia-ingleses.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/praia-joaquina.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/praia-joaquina.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/praia-santinho-happy.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/praia-santinho-happy.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/gallery/forte.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/forte.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/praia-armacao.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/praia-armacao.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="./images/gallery/home.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/home.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/terno-igreja.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/terno-igreja.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/praca-ktz.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/praca-ktz.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/img-brasilia.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/img-brasilia.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/balneario-2.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/balneario-2.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-4">
                <a
                  href="./images/gallery/balneario.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/balneario.jpg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mix7"
                    data-lightbox="photos"
                  />
                </a>
              </div>
              <div class="col-md-12">
                <a
                  href="./images/gallery/paisagem-praia-santinho.jpg"
                  data-lightbox="photos"
                >
                  <img
                    src="./images/gallery/paisagem-praia-santinho.jpg"
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
                <h3>Contato</h3>
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
                <div class="phrase center">
                    <span id="phrase-name">
                      <i class="fa-solid fa-quote-left"></i>
                          Corrida Hoje,<br /> Vitória Amanhã!
                      <i class="fa-solid fa-quote-right"></i>
                    </span>
                    <br />
                    <span id="text-name" style="margin-top: 20px; font-size: 10px;">
                      Racionais NX Zero
                    </span>
                  </div>
              </div>

              <div id="feedback" class="container col-6 blue">
                <h3>Deixe seu feedback</h3>
                <form onsubmit="feedback()" id="form">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
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
                      placeholder="Deixe sua menssagem"
                      required
                    ></textarea>
                  </div>

                  <div class="center stars">
                    Avaliação do site
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
                    <input id="submit" type="submit" value="ENVIAR" />
                  </div>
                </form>
              </div>

              <div class="col-12 center copyrigth-content">
                <span class="copyrigth">
                  <i class="far fa-copyright"></i> Copyrigth 2022 todos
                  os direitos reservados</span
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
              src="./images/logo-gm-ondas.png"
              alt="logo ondas - Gabriel Marinho"
            />
            <div class="center">GABRIEL MARINHO DOS SANTOS</div>
          </div>

          <div class="link-menu">
            <ul>
              <li>
                <a href="#home" rel="noopener noreferrer">Home</a>
              </li>
              <li>
                <a href="#education" rel="noopener noreferrer"
                  >Formação Acâdemica</a
                >
              </li>
              <li>
                <a href="#project" rel="noopener noreferrer"
                  >Portifólio</a
                >
              </li>
              <li>
                <a href="#work" rel="noopener noreferrer">Trabalhos</a>
              </li>
              <li>
                <a href="#gallery" rel="noopener noreferrer">Galeria</a>
              </li>
              <li
                onclick="modalCurriculum()"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <a href="#" rel="noopener noreferrer"
                  >Crurriculo
                  <i id="icon-download" class="fas fa-download"></i
                ></a>
              </li>
              <li>
                <a href="#contact" rel="noopener noreferrer">Contato</a>
              </li>
            </ul>
          </div>

          <div class="container search">
            <div class="input-group mb-3">
              <input
                id="input-search"
                type="text"
                class="form-control"
                placeholder="Buscar"
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
              <h3>Destaques recentes</h3>
              <br />
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    with=""
                    src="./images/projects-imgs/studiojo.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img src="./images/projects-imgs/teige.png" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/martelinho-de-ouro.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/assistencia_awp.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/controlhe-finaceiro.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img src="./images/projects-imgs/pokedex.jpg" alt="" />
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer"> </a>
                <img
                  src="./images/projects-imgs/tabela-brasileiro.jpg"
                  alt=""
                />
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img
                    src="./images/projects-imgs/app-mata-mosquito.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="container social-midia">
            <div class="title-menu">
              <h3>Redes Sociais</h3>
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
                src="./images/icons/brazil-flag.png"
                alt="portuguese"
                onclick="alterLenguage(2)"
              />
            </span>
            <span class="usa">
              <img
                class="img-fluid"
                id="usa"
                src="./images/icons/united-states.png"
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
</div>

<div class="none-modal">
<h5>Curriculo:</h5>
<div class="close" id="closeCurriculum">
  <a
    id="closeCurriculum"
    type="button"
    class="btn-close"
    onclick="closeCurriculum()"
  ></a>
</div>
<a
  href="./docs/curriculo_desenvolvedor_gabriel_marinho-dos_santos-21-01-2025.pdf"
  target="_blank"
>
  <img class="icon-model" src="./images/icons/brazil-flag.png" />
  Português</a
>
||
<a
  href="./docs/english-curriculo_desenvolvedor-GABRIEL_MARINHO_DOS_SANTOS-13-04-2024.pdf"
  target="_blank"
>
  <img class="icon-model" src="./images/icons/united-states.png" />
  English</a
>
</div>
</div>`;
