import styles from "./cardItem.module.css";

export default function CardItem({ imgSrc, displayName }) {
  console.log(displayName);
  return (
    <div className={styles.itemDiv}>
      <img src={imgSrc} alt={displayName} />
    </div>
  );
}
