import { useParams } from "react-router";
import Data from "../api.json";
import NotFound from "./NotFound";

export default function Housing() {
  const { id } = useParams();
  const housing = Data.find((item) => item.id === id);

  // if (housing === undefined) return <NotFound type="housing" />;

  let index = 0;

  return (
    <div>
      <h1>{housing.title}</h1>
      <div>
        <img src={housing.pictures[index]} alt={housing.title} />
      </div>
    </div>
  );
}
