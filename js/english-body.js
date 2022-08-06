const englishBody = `
<div class="mobile">
<nav class="navbar navbar-light  shadow">
  <div class="container">
    <span class="navbar-brand mb-0 h1"><img class=" img-fluid logo" src="./images/Logo/logo-gm-ondas.png"
        alt=""></span>

    <button class="open-menu" type="button" data-bs-toggle="modal" data-bs-target="#modal-mobile">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</nav>
</div>

<div class="container background-body">

<div class="language none">
  <span class="brazil" >
    <img  class="img-fluid" id="br" src="./images/icones/brazil-flag.png" alt="portuguese"  onclick="alterLenguage(2)">
  </span>
  <span class="usa" >
    <img class="img-fluid" id="usa" src="./images/icones/united-states.png" alt="english" onclick="alterLenguage(1)">
  </span>
</div>
<div class="container ">

  <div class="container overflow-hidden body  desktop">
    <div class="row ">
      <div class="col-4 ">
        <div class="menu desktop-menu">
          <div class="logo center">
            <img src="./images/Logo/logo-gm-ondas.png" alt="logo ondas - Gabriel Marinho" width="100px">
            <div class="center">GABRIEL MARINHO DOS SANTOS</div>
          </div>
          <div class="link-menu">
            <ul>
              <li><a href="#home"  rel="noopener noreferrer">Home</a></li>
              <li><a href="#education"  rel="noopener noreferrer">Academic education</a></li>
              <li><a href="#project"  rel="noopener noreferrer">Projects</a></li> 
              <li><a href="#work"  rel="noopener noreferrer">Works</a></li> 
              <li> <a href="#gallery" rel="noopener noreferrer">Gallery</a> </li>
              <li><a href="./docs/Curriculo_Desenvolvedor-GABRIEL_MARINHO_DOS_SANTOS.pdf" target="_blank" rel="noopener noreferrer">curriculum <i id="icon-download" class="fas fa-download"></i></a></li> 
              <li><a href="#contact"  rel="noopener noreferrer">Contact</a></li> 
            </ul>
          </div>
          
          <div class=" container search">
            <div class="input-group mb-3">
              <input id="input-search" type="text" class="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon1">
              <div class="input-group-append  container">
                <button class="submit-lente" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="container higthlights center ">
            <div class="title-menu">
              <h3>
                
                  Recent Highlights
              </h3>
              <br/>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#work"  rel="noopener noreferrer">
                  <img src="./images/projetos-img/studiojo.png" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  
                  <img src="./images/projetos-img/teige.png" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  
                  <img src="./images/projetos-img/martelinho-de-ouro.png" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  
                  <img src="./images/projetos-img/assistencia_awp.png" alt="">
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img src="./images/projetos-img/controlhe-finaceiro.jpg" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">

                  <img src="./images/projetos-img/pokedex.jpg" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">     
                </a>
                <img src="./images/projetos-img/tabela-brasileiro.jpg" alt="">
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">                     
                  <img src="./images/projetos-img/app-mata-mosquito.jpg" alt="">
                </a>
              </div>
            </div>
          </div>

          <div class="container social-midia">
            <div class="title-menu">
              <h3>
               Social Midia
              </h3>
              <br/>
            </div>
            <div class="row ">
              <div class="col-1">
                <a href="https://api.whatsapp.com/send?phone=5561993672608&text=Ol%C3%A1%2C%20visitei%20o%20seu%20site%20podemos%20conversar" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="https://www.instagram.com/gabrielmsantos_dev/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="https://github.com/gabrielMarinhocd/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="http://www.linkedin.com/in/gabriel-marinho-bsb" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="mailto:gabrielmarinhodossantoscd@gmail.com"  rel="noopener noreferrer">
                  <i class="far fa-envelope"></i>
                </a>                
              </div>
            </div>

          </div>
          

        </div>

      </div>
      <div class="col-8 center  conteudo ">

        <div id="home" class="home">
          <div class="fundo-tecnologias">
            <img class="img-fluid" src="./images/fundo-tecnologias.jpg
            " alt="Fundo Tecnologias">
          </div>
          <div class="foto-gabriel">
            <img  id="foto-gabriel" src="./images/foto-gabriel.png" alt="Foto Gabriel">
          </div>
          <div class="content">
            <h1>Systems Analyst</h1>
            <h3>Web developer</h3>
            <h3>Computer Technician</h3>
            <h3>Web Designer </h3>
          </div>
        </div>

        <div id="education" class=" container education">
          <h2 class="title">
            Academic education</h2>

          <div class="box">
            <div class="box-title">
              <h4> 
                Studying MBA - Multiplatform Mobile Developer IGTI<span id="ed-04" class="rigth ed"><i  class="fas fa-chevron-down"></i></span></h4>
            </div>
            <div class="box-content iten-04">
              <span class="sub-title">
                Studying MBA - Multiplatform Mobile Developer IGTI</span>
              <br/>
              <a href="https://www.igti.com.br/" target="_blank" rel="noopener noreferrer">
                
                Visit Website
              </a>  
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>Technologist in Systems Analysis and Development <span id="ed-03" class="rigth ed"><i  class="fas fa-chevron-down"></i></span></h4>
            </div>
            <div class="box-content iten-03">
              <span class="sub-title">UNIP - Brasilia</span>
              <br/>
              <a href="https://www.unip.br/" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>  
            </div>
          </div>

          <div class="box">
            <div class="box-title">
              <h4>Computer Technician <span id="ed-02" class="rigth ed"><i  class="fas fa-chevron-down"></i></span></h4>
            </div>
            <div class="box-content iten-02">
              <span class="sub-title">ETB -
                Technical School of Brasilia</span>
              <br/>
              <a href="http://www.etb.com.br/" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>  
            </div>
          </div>  

          <div class="box">
            <div class="box-title">
              <h4>High school <span id="ed-01" class="rigth ed"><i  class="fas fa-chevron-down"></i></span></h4>
            </div>
            <div class="box-content iten-01">
              <span class="sub-title">CED 06 - Cêilandia</span>
              <br/>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>  
            </div>
          </div>         

          <div class="box">
            <div class="box-title">
              <h4>Other courses <span id="ed-05" class="rigth ed"><i  class="fas fa-chevron-down"></i></span></h4>
            </div>
            <div class="box-content iten-05">
              <span class="sub-title">Taking English classes - CILT </span>
              <br/>
              <span class="sub-title">
                Full Stack Javascript Developer - IGTI </span>
            </div>
          </div>

        </div>

        <div id="project" class="container project ">
          <h2 class="title">Projects</h2>
          
          <div class="container">
          
          <div class="carrosel-project">

            <div class="row">
              <div class="col-1 ">
                <span class="pointer" onclick="plusDivs(+1)">
                  <i class="fas fa-arrow-left rigth"></i>
                  
                </span>
              </div>
              <div id="carrosel" class="col-10">

              </div>
              <div class="col-1">
                <span class="pointer" onclick="plusDivs(-1)" >
                  <i class="fas fa-arrow-right"></i>                     
                </span>
              </div>
            </div>
          
          </div>
          </div>
        </div>

        <div id="work" class="container work">
          <h2 class="title"> Works</h2>
          <div class="container">
            <div class="carrosel-work">

              <div class="row">
                <div class="col-1 ">
                  <span class="pointer" onclick="plusDivsWork(+1)">
                    <i class="fas fa-arrow-left rigth"></i>
                    
                  </span>
                </div>
                <div id="carosel-work" class="col-10">

                </div>
                <div class="col-1">
                  <span class="pointer" onclick="plusDivsWork(-1)" >
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
            <div class="col-4">
              <img src="./images/Galeria/img (1).jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Mix7">
              <img src="./images/Galeria/img (2).jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="mix7">
              <img src="./images/Galeria/img (3).jpeg" class="w-100 shadow-1-strong rounded mb-4" alt="Teige Brasil">
            </div>

            <div class="col-4">
              <img
                src="./images/Galeria/img (4).jpeg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Teige Brasil"
              />
              <img
                src="./images/Galeria/img (5).jpeg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="bus"
              />
              <img
                src="./images/Galeria/img (6).jpeg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="ETB"
              />
            

            </div>

            <div class="col-4" id="gellery-desktop">
              <img
                src="./images/Galeria/turma-uniplan.jpeg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="UNIP"
                width=""
              />

              <img
                src="./images/Galeria/formatura-ced06.jpeg"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />

              <img
              src="./images/Galeria//interclasse.jpeg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Escola"
            />
            </div>
          </div>

        </div>

        <div id="contact" class="container contact">
          <div class="container nopadding">
            <div class="row ">
              <div class="container col-6 content-social-midia">
                <h3>Contact</h3>
                <ul class="nopadding">
                  <li class="social"><span class="icon-contato"> <i class="fab fa-whatsapp"></i> </span> (61) 99367-2608</li>
                  <li class="social" ><span class="icon-contato"><i class="fab fa-instagram"></i> </span> gabrielmsantos.dev</li>
                  <li class="social"><span class="icon-contato"> <i class="far fa-envelope"></i> </span> gabrielmarinhodossantoscd@gmail.com</li>
                  <li class="social"><span class="icon-contato"><i class="fab fa-linkedin-in"></i> </span> gabriel-marinho-bsb</li>
                  <li class="social"><span class="icon-contato"><i class="fab fa-github"></i> </span> gabrielMarinhocd</li>
                </ul>
                <div class="frase center">
                  <!-- <span id="frase-name">" O certo pelo certo sempre <br/> vai da certo "</span>
                  <br/>
                  <span id="text-name">Gabriel M. Santos</span> -->
                </div>
              </div>


              <div id="feedback" class="container col-6 blue">
                <h3>
                  Leave your feedback</h3>
                <form onsubmit="feedback()" id="form">
                  <div>
                    <input type="text" name="name" id="name" placeholder="Name" required>
                  </div>
                  <div>
                    <input type="email" name="email" id="email" placeholder="email" required>
                  </div>
                  <div>
                    <textarea  id="message" rows="3" placeholder="Leave your message" required></textarea>
                  </div>

                  <div class="center stars">            
                    Website review
                    <br>
                    <a  onclick="Avaliar(1)" href="#">
                      <i id="star-01" class="far fa-star"></i>
                    </a>
                    <a onclick="Avaliar(2)" href="#">
                      <i id="star-02" class="far fa-star"></i>
                    </a>
                    <a onclick="Avaliar(3)" href="#">
                      <i id="star-03" class="far fa-star"></i>
                    </a>
                    <a  onclick="Avaliar(4)" href="#">
                      <i id="star-04" class="far fa-star"></i>
                    </a>
                    <a onclick="Avaliar(5)" href="#">
                      <i id="star-05" class="far fa-star"></i>
                    </a>
                    <br>
                    <span id="avaliacao" class="avaliacao">

                    </span>
                  </div>
                  <div class="center">
                    <input  id="submit" type="submit" value="SEND"/>
                  </div>
                </form>
              </div>

              <div class="col-12 center copyrigth-content ">
                  <span class="copyrigth"> <i class="far fa-copyright"></i> 
                    Copyrigth 2022 all rights reserved</span>
                  <br/>
                  <span class="name" >GABRIEL MARINHO</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>


<div class="modal modal-menu true" id="modal-mobile" tabindex="-1" aria-labelledby="modal-mobile"
  aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="menu">
          <div class="logo-modal center">
            <img class="img-fluid" src="./images/Logo/logo-gm-ondas.png" alt="logo ondas - Gabriel Marinho" >
            <div class="center">GABRIEL MARINHO DOS SANTOS</div>
          </div>
      
          <div class="link-menu">
            <ul>
              <li><a href="#home"  rel="noopener noreferrer">Home</a></li>
              <li><a href="#education"  rel="noopener noreferrer">Formação Acâdemica</a></li>
              <li><a href="#project"  rel="noopener noreferrer">Portifólio</a></li> 
              <li><a href="#work"  rel="noopener noreferrer">Trabalhos</a></li> 
              <li> <a href="#gallery" rel="noopener noreferrer">Galeria</a> </li>
              <li><a href="./docs/Curriculo_Desenvolvedor-GABRIEL_MARINHO_DOS_SANTOS.pdf" target="_blank" rel="noopener noreferrer">Crurriculo <i id="icon-download" class="fas fa-download"></i></a></li> 
              <li><a href="#contact"  rel="noopener noreferrer">Contato</a></li> 
            </ul>
          </div>
          
          <div class=" container search">
            <div class="input-group mb-3">
              <input id="input-search" type="text" class="form-control" placeholder="Search" aria-label="Buscar" aria-describedby="basic-addon1">
              <div class="input-group-append  container">
                <button class="submit-lente" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="container higthlights center ">
            <div class="title-menu">
              <h3>
                Destaques recentes
              </h3>
              <br/>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#work"  rel="noopener noreferrer">
                  <img with= "" src="./images/projetos-img/studiojo.png" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  
                  <img src="./images/projetos-img/teige.png" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  
                  <img src="./images/projetos-img/martelinho-de-ouro.png" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#work" rel="noopener noreferrer">
                  
                  <img src="./images/projetos-img/assistencia_awp.png" alt="">
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">
                  <img src="./images/projetos-img/controlhe-finaceiro.jpg" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">

                  <img src="./images/projetos-img/pokedex.jpg" alt="">
                </a>
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">     
                </a>
                <img src="./images/projetos-img/tabela-brasileiro.jpg" alt="">
              </div>
              <div class="col-2">
                <a href="#project" rel="noopener noreferrer">                     
                  <img src="./images/projetos-img/app-mata-mosquito.jpg" alt="">
                </a>
              </div>
            </div>
          </div>

          <div class="container social-midia">
            <div class="title-menu">
              <h3>
                Redes Sociais
              </h3>
              <br/>
            </div>
            <div class="row ">
              <div class="col-1">
                <a href="https://api.whatsapp.com/send?phone=5561993672608&text=Ol%C3%A1%2C%20visitei%20o%20seu%20site%20podemos%20conversar" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="https://www.instagram.com/gabrielmsantos_dev/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="https://github.com/gabrielMarinhocd/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="http://www.linkedin.com/in/gabriel-marinho-bsb" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div class="col-1">
                <a href="mailto:gabrielmarinhodossantoscd@gmail.com"  rel="noopener noreferrer">
                  <i class="far fa-envelope"></i>
                </a>                
              </div>
            </div>

          </div>
        

          </div>

        </div>

      </div>

    </div>

    <div class="language ">
      <span class="brazil" >
        <img  class="img-fluid" id="br" src="./images/icones/brazil-flag.png" alt="portuguese"  onclick="alterLenguage(2)">
      </span>
      <span class="usa" >
        <img class="img-fluid" id="usa" src="./images/icones/united-states.png" alt="english" onclick="alterLenguage(1)">
      </span>
    </div>

  </div>
</div>
`