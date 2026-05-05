import { useParams } from "react-router";
import Data from "../api.json";

export default function Housing() {
  const { id } = useParams();
  const housing = Data.find((item) => item.id === id);

  if (!housing) return <NotFound />;

  return (
    <div>
      <h1>{housing.title}</h1>
      <img src={housing.cover} alt={housing.title} />
      {/* autres infos */}
    </div>
  );
}
