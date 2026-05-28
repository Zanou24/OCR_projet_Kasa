import "../components/styles/banner.sass";

export default function Banner({ text, opacity = 1, bgUrl = "" }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${bgUrl})`,
      }}
    >
      <h1>{text}</h1>
    </section>
  );
}
