import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const título='Perguntas e Respotas Frequentes'
  const Topo=()=>{
    return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-7">
          <h4 className="mt-3"><svg className="ml-3 bi bi-chat-right-text" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg> <strong>FAQ STARK</strong></h4>
          <h6 className="ml-3">{título}</h6>
        </div>
        <div class="col-5 m-auto">
          <form class="form-inline">
            <input class="form-control w-50 m-auto" type="search" placeholder="Pesquisar" aria-label="Search"/>
          </form>
          
        </div>
      </div>
    </div>
    )
  }

  const [UrlDoVideoInicial, setUrlDoVideoInicial] = useState("https://www.youtube.com/embed/4PqECm1OA7U")

  return (
    <div>
      <Topo></Topo>
    <hr/>

    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <div className="ml-3 border accordion accordion-flush" id="accordionFlushExample">

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Início
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><a href="#" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/vKunxVcLv9g")}>Overview da Página Início</a></div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Combinações
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><a href="#" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/7ImJmtoq9X4")}>Overview da Página Combinações</a></div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Originações
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><a href="#" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/8ssx41HC_sE")}>Overview da Página Originações</a></div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Clientes
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><a href="#" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/flaimScsHuc")}>Overview da Página Clientes</a></div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Investidores
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><a href="#" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/GQW-li16PD8")}>Overview da Página Investidores</a></div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  Agentes
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><a href="#" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/qU2d9kZMIr4")}>Overview da Página Agentes</a></div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  Ferramentas
                </button>
              </h2>
              <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><a href="#" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/PIer4oDDeRU")}>Overview da Página Ferramentas</a></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9">
        <iframe width="1080" height="550" src={UrlDoVideoInicial} title="Vídeo Inicial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
