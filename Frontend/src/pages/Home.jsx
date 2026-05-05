import "../assets/styles/Home.sass";
import Data from "../api.json";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="home_intro">
        <h1>
          Chez vous, <br /> partout et ailleurs
        </h1>
      </section>
      <section className="home_housing">
        {Data.map((housing) => (
          <article key={housing.id} className="home_housing_card">
            <Link to={`/housing/${housing.id}`}>
              <img src={housing.cover} alt={housing.title} />
              <h2>{housing.title}</h2>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
