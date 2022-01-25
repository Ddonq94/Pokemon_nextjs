import { ucFirst } from "../services/pokemon";
import { Move } from "../types";

interface Props {
  moves: Move[];
}

export function Moves({ moves }: Props) {
  return (
    <section>
      <u>Moves:</u> <br />
      {moves.map((move: Move, ind: number) => {
        return (
          <span key={`move${ind}`}>
            {ind !== moves.length - 1
              ? ` ${ucFirst(move.move.name)}, `
              : ucFirst(move.move.name)}
          </span>
        );
      })}
    </section>
  );
}
