import React from "react";
import { useState } from "react";

import { Topo } from "./components/Topo";

const menu = [
  {
    title: "Início",
    submenus: ["Botao 1", "Botao 2", "Botao 3"],
  },
  {
    title: "Combinações",
    submenus: ["Botao 4", "Botao 5", "Botao 6"],
  },
  {
    title: "Originações",
    submenus: [],
  },
  {
    title: "Clientes",
    submenus: [],
  },
  {
    title: "Investidores",
    submenus: [],
  },
  {
    title: "Agentes",
    submenus: [],
  },
  {
    title: "Ferramentas",
    submenus: [],
  },
];

function App() {
  const título = "Perguntas e Respotas Frequentes";

  const [search, setSearch] = useState("");

  const [UrlDoVideoInicial, setUrlDoVideoInicial] = useState(
    "https://www.youtube.com/embed/4PqECm1OA7U"
  );

  return (
    <div>
      <Topo título={título} search={search} setSearch={setSearch} />
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
                            href="s"
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
