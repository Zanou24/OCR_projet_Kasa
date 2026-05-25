import "../assets/styles/Home.sass";
import HomeHousing from "../components/Card";
import Data from "../api.json";


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
        <HomeHousing key={housing.id} {...housing} />
      ))}
    </section>
    </>
  );
}
