import MyPicCard from "./MyBottomCard/MyPicCard";

export default function BottomCardContainer() {
  return (
    <div className="tour-cards-container d-flex justify-around">
      <article className="tour-card">
        <MyPicCard town="Alaska" />
      </article>

      <article className="tour-card">
        <MyPicCard town="New York" />
      </article>

      <article className="tour-card">
        <MyPicCard town="Vilnius" />
      </article>
    </div>
  );
}
