// index.js

import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>
        Vai ouvir{" "}
        <a
          href="https://music.youtube.com/watch?v=z_VnfSWLBbk&si=UzYO88adeJdNQ4A1"
          target="_blank"
          rel="external"
        >
          CASTELO TRISTE
        </a>
      </h1>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: black;
          color: white;
          font-family: "Arial", sans-serif;
          font-weight: bold;
          text-align: center;
          margin: 0;
          padding: 0;
        }

        h1 {
          font-size: 24px; /* Tamanho da tipografia */
        }

        a {
          color: white;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

function teste() {
  console.log("teste");
}

function teste2() {
  console.log("teste2");
}

export default Home;
