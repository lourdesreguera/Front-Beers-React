import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="b-home">
      <h1 className="b-home__heading">¿Te apetece una buena cerveza y no sabes cuál elegir?</h1>
      <p className="b-home__subheading">
        Te ofrecemos una amplia selección de cervezas para que elijas la que más
        te apetezca hoy. Puedes filtrar por tipo, procedencia y graduación
        alcohólica. Tras probarla, podrás puntuarla y así ayudar al resto de personas con su elección.
      </p>
      <Link className="btn-home" to="/beers">Carta de cervezas</Link>
    </div>
  );
};

export default Home;
