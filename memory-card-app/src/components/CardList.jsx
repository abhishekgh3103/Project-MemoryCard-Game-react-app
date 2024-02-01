import { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import CardItem from "./CardItem";

export default function CardList() {
  const URL =
    "https://api.giphy.com/v1/stickers/packs/3138/children?api_key=tYEqQjQ9jJLiaYYYCW08l3eS958BIFEL";
  const [result, setResult] = useState([]);
  const [sortedResult, setSortedResult] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const resp = await fetch(URL);
      const data = await resp.json();
      data.data
        ? setResult((prevResult) => [...prevResult, ...data.data])
        : console.log("...Loading");
    }
    fetchApi();
  }, []);

  useEffect(() => {
    function shuffleArray(array) {
      const shuffledArray = [...array];
      const randomComparator = () => Math.random() - 0.5;

      const doneArray = shuffledArray.sort(randomComparator);
      setSortedResult([...doneArray]);
      console.log("currentList: ", currentList);
      console.log("sortedResult: ", sortedResult);
    }
    shuffleArray(result);
  }, [result, currentList]);

  return (
    <div className={styles.cardListDiv}>
      {sortedResult.length > 0 ? (
        sortedResult.slice(0, 12).map((item) => {
          if (
            item &&
            item.featured_gif &&
            item.featured_gif.images &&
            item.featured_gif.images.original
          ) {
            return (
              <CardItem
                key={item.id}
                cardId={item.id}
                imgSrc={item.featured_gif.images.original.url}
                displayName={item.display_name}
                setCurrentList={setCurrentList}
              />
            );
          }
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
