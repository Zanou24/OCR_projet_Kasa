import "../assets/styles/Housing.sass";
import { useParams } from "react-router";
import Data from "../api.json";
import NotFound from "./NotFound";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Housing() {
  const { id } = useParams();
  const housing = Data.find((item) => item.id === id);

  if (housing === undefined) return <NotFound />;

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

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
        <div className="housing_right">
          <div className="housing_host">
            <p>{housing.host.name}</p>
            <img src={housing.host.picture} alt={housing.host.name} />
          </div>
          <div className="housing_rating">
            {stars.map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                className="rate_star"
                style={{
                  color:
                    star <= Number(housing.rating) ? "#FF6060" : "lightgrey",
                }}
              />
            ))}
          </div>
        </div>
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
