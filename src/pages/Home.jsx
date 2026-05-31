import "../assets/styles/Home.sass";
import HomeHousing from "../components/Card";
import Data from "../api.json";
import Banner from "../components/Banner";
import HomeImage from "../assets/img/Home_image.jpg";

export default function Home() {
  return (
    <>
      <Banner
        text="Chez vous, partout et ailleurs"
        opacity={0.5}
        bgUrl={HomeImage}
      />
      <section className="home_housing">
        {Data.map((housing) => (
          <HomeHousing key={housing.id} {...housing} />
        ))}
      </section>
    </>
  );
}
