import { useState } from "react";


const Topo=({titulo, search, setSearch})=>{
  return(
  <div className="container-fluid">
    <div className="row">
      <div className="col-7">
        <h4 className="mt-3 ml-3 d-flex align-items-center d-flex gap-2"><i class="material-symbols-outlined">quiz</i><strong>FAQ STARK</strong></h4>
        <h6 className="ml-3">{titulo}</h6>
      </div>
      <div class="col-5 m-auto">
        <form class="form-inline">
          <input class="form-control w-50 m-auto" type="search" placeholder="Pesquisar" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
        </form>
        
      </div>
    </div>
  </div>
  )
}

function App() {

  const titulo='Perguntas e Respotas Frequentes'

  const [UrlDoVideoInicial, setUrlDoVideoInicial] = useState("https://www.youtube.com/embed/4PqECm1OA7U")

  const [search, setSearch] = useState("")

  const Início=()=>{
    return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <i className='material-icons'>home</i><strong>Início</strong>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><div className="btn btn-light" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/vKunxVcLv9g")}>Overview da Página Início</div></div>
              </div>
            </div>
    )
  }

  const Combinações=()=>{
    return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <i className='material-icons'>favorite</i><strong>Combinações</strong>
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><div className="btn btn-light" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/7ImJmtoq9X4")}>Overview da Página Combinações</div></div>
              </div>
            </div>
    )
  }

  const Originações=()=>{
    return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <i className='material-icons'>filter_alt</i><strong>Originações</strong>
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><div className="btn btn-light" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/8ssx41HC_sE")}>Overview da Página Originações</div></div>
              </div>
            </div>
    )
  }

  const Clientes=()=>{
    return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <i className='material-icons'>business</i><strong>Clientes</strong>
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><div className="btn btn-light" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/flaimScsHuc")}>Overview da Página Clientes</div></div>
              </div>
            </div>
    )
  }

  const Investidores=()=>{
    return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <i className='material-icons'>account_balance</i><strong>Investidores</strong>
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><div className="btn btn-light" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/GQW-li16PD8")}>Overview da Página Investidores</div></div>
              </div>
            </div>
    )
  }

  const Agentes=()=>{
    return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  <i className='material-icons'>groups</i><strong>Agentes</strong>
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><div className="btn btn-light" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/qU2d9kZMIr4")}>Overview da Página Agentes</div></div>
              </div>
            </div>
    )
  }

  const Ferramentas=()=>{
    return(
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSeven">
                <button className="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  <i className='material-icons'>construction</i><strong>Ferramentas</strong>
                </button>
              </h2>
              <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"><div className="btn btn-light" onClick={()=>setUrlDoVideoInicial("https://www.youtube.com/embed/PIer4oDDeRU")}>Overview da Página Ferramentas</div></div>
              </div>
            </div>
    )
  }

  const Video=()=>{
    return(
        <div className="col-9">
        <iframe width="1080" height="550" src={UrlDoVideoInicial} title="Vídeo Inicial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
  }

  return (

    <div>
      <Topo titulo={titulo} search={search} setSearch={setSearch}/>
    <hr/>

    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <div className="ml-3 border accordion accordion-flush rounded shadow-lg p-3 mb-5 bg-white rounded" id="accordionFlushExample">
            {"Início".toLowerCase().includes(search.toLowerCase()) && <Início/>}
            {"Combinações".toLowerCase().includes(search.toLowerCase()) && <Combinações/>}
            {"Originações".toLowerCase().includes(search.toLowerCase()) && <Originações/>}
            {"Clientes".toLowerCase().includes(search.toLowerCase()) && <Clientes/>}
            {"Investidores".toLowerCase().includes(search.toLowerCase()) && <Investidores/>}
            {"Agentes".toLowerCase().includes(search.toLowerCase()) && <Agentes/>}
            {"Ferramentas".toLowerCase().includes(search.toLowerCase()) && <Ferramentas/>}
          </div>
        </div>
        <Video UrlDoVideoInicial={UrlDoVideoInicial}/>
      </div>
    </div>
    </div>
  );
}

export default App;
