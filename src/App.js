import { useState } from "react";

const menu = [
  {
    title: "Início",
    submenus: ["Overview da Página Início"],
  },
  {
    title: "Combinações",
    submenus: ["Overview da Página Combinações"],
  },
  {
    title: "Originações",
    submenus: ["Overview da Página Originações"],
  },
  {
    title: "Clientes",
    submenus: ["Overview da Página Clientes"],
  },
  {
    title: "Investidores",
    submenus: ["Overview da Página Investidores"],
  },
  {
    title: "Agentes",
    submenus: ["Overview da Página Agentes"],
  },
  {
    title: "Ferramentas",
    submenus: ["Overview da Página Ferramentas"],
  },
];

const Topo = ({ titulo, search, setSearch }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-7">
          <h4 className="mt-3">
            <svg
              className="ml-3 bi bi-chat-right-text"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
            </svg>{" "}
            <strong>FAQ STARK</strong>
          </h4>
          <h6 className="ml-3">{titulo}</h6>
        </div>
        <div className="col-5 m-auto">
          <form className="form-inline">
            <input
              className="form-control w-50 m-auto"
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

function App() {
  const titulo = "Perguntas e Respotas Frequentes";

  const [search, setSearch] = useState("");

  const [UrlDoVideoInicial, setUrlDoVideoInicial] = useState(
    "https://www.youtube.com/embed/4PqECm1OA7U"
  );

  return (
    <div>
      <Topo título={titulo} search={search} setSearch={setSearch} />
      <hr />

      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div
              className="ml-3 border accordion accordion-flush"
              id="accordionFlushExample"
            >
              {menu
                .filter(
                  (item) =>
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.submenus.filter((submenu) =>
                      submenu.toLowerCase().includes(search.toLowerCase())
                    ).length > 0
                )
                .map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h2
                      className="accordion-header"
                      id={"flush-headingOne-" + index}
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#flush-collapseOne-" + index}
                        aria-expanded="false"
                        aria-controls={"flush-collapseOne-" + index}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={"flush-collapseOne-" + index}
                      className="accordion-collapse collapse"
                      aria-labelledby={"flush-headingOne-" + index}
                      data-bs-parent="#accordionFlushExample"
                    >
                      {item.submenus.map((submenu, indexM) => (
                        <div key={indexM} className="accordion-body">
                          <a
                            href="#"
                            onClick={() =>
                              setUrlDoVideoInicial(
                                "https://www.youtube.com/embed/vKunxVcLv9g"
                              )
                            }
                          >
                            {submenu}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-9">
            <iframe
              width="1080"
              height="550"
              src={UrlDoVideoInicial}
              title="Vídeo Inicial"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
