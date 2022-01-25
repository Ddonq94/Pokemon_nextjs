import { ucFirst } from "../services/pokemon";
import { Pokemon } from "../types";
import styles from "../styles/SubCard.module.css";
import { Stats } from "./Stats";
import { Types } from "./Types";
import { Moves } from "./Moves";
import Image from "next/image";

interface Props {
  details: Pokemon;
  onChangeDetails?: Function;
}

export function SubCard({ details, onChangeDetails }: Props) {
  return (
    <section className={styles.SubCard}>
      <div className={styles.SubCardHeader}>
        <span>
          <i> {ucFirst(details.name)}</i> Info
        </span>
        <span
          className={styles.Close}
          onClick={() => {
            onChangeDetails && onChangeDetails(undefined);
          }}
        >
          <Image
            className={styles.image}
            src={"/close.png"}
            alt={`${name} Avatar`}
            width={20}
            height={20}
          />
        </span>
      </div>

      <div className={styles.SubCardDetails}>
        <Image
          className={styles.image}
          src={details.image}
          alt={`${name} Avatar`}
          width={100}
          height={100}
        />
        <p>
          <u>Species:</u> {ucFirst(details.species.name)}
        </p>
        <p>
          <u>Weight:</u> {details.weight}
        </p>
        <Stats stats={details.stats} />

        <Types types={details.types} />

        <Moves moves={details.moves} />
      </div>
    </section>
  );
}
