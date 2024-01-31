import CardList from "./CardList";
import styles from "./cardContainer.module.css";

export default function CardContainer({ setCurrentScore }) {
  return (
    <div>
      <CardList setCurrentScore={setCurrentScore} />
    </div>
  );
}
