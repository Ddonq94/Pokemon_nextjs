import styles from "../styles/Card.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPokemonDetails, getSprite, ucFirst } from "../services/pokemon";
import { IPokemon, Pokemon } from "../types";

interface Props extends IPokemon {
  onChangeDetails?: Function;
}

export function Card({ name, url, onChangeDetails }: Props) {
  const [img, setImg] = useState<string>("");
  const [details, setDetails] = useState<Pokemon>();

  useEffect(() => {
    if (url) {
      getPokemonDetails(url).then((res) => {
        let image = getSprite(res.sprites);
        setImg(image);
        let details = {
          name: res.name,
          image,
          species: res.species,
          stats: res.stats,
          types: res.types,
          weight: res.weight,
          moves: res.moves,
        };
        setDetails(details);
      });
    }
  }, [url]);

  const toggleDetails = () => {
    onChangeDetails && onChangeDetails(details);
  };

  return (
    <div className={styles.card} onClick={toggleDetails}>
      {img && details && (
        <Image
          className={styles.image}
          src={img}
          alt={`${name} Avatar`}
          width={"100%"}
          height={"100%"}
        />
      )}

      <div className={styles.cardContainer}>
        <h4>
          <b>{ucFirst(name)}</b>
        </h4>
      </div>
    </div>
  );
}
