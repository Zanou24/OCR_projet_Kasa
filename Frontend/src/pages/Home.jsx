import "../assets/styles/Home.sass";
import HomeHousing from "../components/homeHousing";

export default function Home() {
  return (
    <>
      <section className="home_intro">
        <h1>
          Chez vous, <br /> partout et ailleurs
        </h1>
      </section>
      <HomeHousing />
    </>
  );
}
