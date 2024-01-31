import { useEffect, useState } from "react";
import styles from "./cardList.module.css";
import CardItem from "./CardItem";

export default function CardList() {
  const URL =
    "https://api.giphy.com/v1/stickers/packs/3138/children?api_key=tYEqQjQ9jJLiaYYYCW08l3eS958BIFEL";
  const [result, setResult] = useState([]);
  const res = [];
  useEffect(() => {
    async function fetchApi() {
      const resp = await fetch(URL);
      const data = await resp.json();
      console.log(data);
      data ? setResult(...result, data.data) : console.log("...Loading");
      data
        ? console.log(data.data[0].featured_gif.images.original.url)
        : console.log("...Loading");
    }
    fetchApi();
  }, []);
  console.log(result);
  return (
    <div>
      {result ? (
        result.map((item) => {
          item ? (
            <CardItem
              key={item.id}
              imgSrc={item.featured_gif.images.original.url}
              displayName={item.display_name}
            />
          ) : (
            console.log("Null Value")
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
