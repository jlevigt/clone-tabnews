import React, { useState } from "react";

function Home() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <title> Site </title>
      <h1>Organização dos PGs</h1>
      <p>Esta é a página 1 do site.</p>
      <div className="container">
        <button className="meu-botao" onClick={toggleMessage}>
          Clique aqui
        </button>

        {showMessage && (
          <div className="message-box">
            <p>Começando os trabalhos</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .container {
          text-align: center;
        }

        .meu-botao {
          background-color: black;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .meu-botao:hover {
          background-color: gray;
        }

        h1 {
          font-size: 24px; /* Tamanho da tipografia */
        }

        .message-box {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          padding: 10px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default Home;
