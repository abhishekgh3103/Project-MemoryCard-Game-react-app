import styles from "./header.module.css";

export default function Header({ currentScore, bestScore }) {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.h1Div}>
        <h1>Memory Card Game</h1>
      </div>
      <div className={styles.scoreDiv}>
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}
