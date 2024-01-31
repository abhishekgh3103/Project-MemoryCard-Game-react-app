import CardList from "./CardList";
import styles from "./cardContainer.module.css";

export default function CardContainer({ setCurrentScore }) {
  return (
    <div className={styles.containerDiv}>
      <CardList setCurrentScore={setCurrentScore} />
    </div>
  );
}
