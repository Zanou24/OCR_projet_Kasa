import "../assets/styles/Housing.sass";
import { useParams } from "react-router";
import Data from "../api.json";
import NotFound from "./NotFound";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/collapses";

export default function Housing() {
  const { id } = useParams();
  const housing = Data.find((item) => item.id === id);

  if (housing === undefined) return <NotFound />;

  let index = 0;

  return (
    <section className="housing">
      <div className="slideshow">
        <Slideshow pictures={housing.pictures} alt={housing.title} />
      </div>
      <div className="housing_content">
        <div className="housing_left">
          <h2>{housing.title}</h2>
          <p>{housing.location}</p>
          <div className="housing_tags">
            {housing.tags.map((tag, index) => (
              <span key={index} className="housing_tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="housing_right"></div>
      </div>
      <div className="collapses">
        <Collapse title="Description" content={housing.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {housing.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
}
