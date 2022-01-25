import { ucFirst } from "../services/pokemon";
import { Type } from "../types";

interface Props {
  types: Type[];
}

export function Types({ types }: Props) {
  return (
    <section>
      <u>Types:</u>
      {types.map((type: any, ind: number) => {
        return (
          <div key={`type${ind}`}>
            Name: {ucFirst(type.type.name)} | Slot: {type.slot}
          </div>
        );
      })}
    </section>
  );
}
