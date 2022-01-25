import { useRouter } from "next/router";
import styles from "../styles/Pagination.module.css";

interface Props {
  page: number;
  maxPage: number;
  onChangePage: Function;
}

export function Pagination({ page, maxPage, onChangePage }: Props) {
  const router = useRouter();

  const prev = () => {
    router.push(`/?page=${page - 1}`);
    onChangePage(undefined);
  };

  const next = () => {
    router.push(`/?page=${page + 1}`);
    onChangePage(undefined);
  };

  return (
    <footer className={styles.Pagination}>
      <button
        disabled={!(page > 1)}
        className={page > 1 ? styles.Button : styles.ButtonDisabled}
        onClick={prev}
      >
        Prev
      </button>

      <strong>Page: {page}</strong>

      <button
        disabled={page === Math.round(maxPage)}
        className={
          !(page === Math.round(maxPage))
            ? styles.Button
            : styles.ButtonDisabled
        }
        onClick={next}
      >
        Next
      </button>
    </footer>
  );
}
