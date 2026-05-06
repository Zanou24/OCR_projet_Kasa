import about from "../assets/img/about.jpg";
import "../assets/styles/About.sass";
import Collapses from "../components/collapses";

const items = [
  {
    id: 1,
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  { id: 2, title: "Respect", content: "..." },
  { id: 3, title: "Service", content: "..." },
  { id: 4, title: "Sécurité", content: "..." },
];

export default function About() {
  return (
    <section className="about">
      <img
        src={about}
        alt="Image de présentation de la page à propos"
        className="about_intro"
      />
      <div className="collapses">
        {items.map((item) => (
          <Collapses
            key={item.id}
            title={item.title}
            content={item.content}
            className="about_collapses"
          />
        ))}
      </div>
    </section>
  );
}
