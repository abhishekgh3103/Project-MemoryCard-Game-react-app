import styles from "./cardItem.module.css";

export default function CardItem({
  cardId,
  imgSrc,
  displayName,
  setCurrentList,
}) {
  const handleClick = () => {
    console.log("Clicked :", cardId);
    setCurrentList((prevResult) => [...prevResult, cardId]);
  };
  return (
    <div className={styles.itemDiv} onClick={handleClick}>
      <img src={imgSrc} alt={displayName} />
    </div>
  );
}
