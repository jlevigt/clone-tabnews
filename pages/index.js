import React from "react";

function Home() {
  return (
    <div>
      <title> Site </title>
      <h1>Organização dos PGs</h1>
      <p>Esta é a página 1 do site.</p>
      <button className="meu-botao">Clique aqui</button>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }

        .meu-botao {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
        }
        .meu-botao:hover {
          background-color: gray;
        }

        h1 {
          font-size: 24px; /* Tamanho da tipografia */
        }
      `}</style>
    </div>
  );
}

export default Home;
