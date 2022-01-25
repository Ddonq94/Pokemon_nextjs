import { ucFirst } from "../services/pokemon";
import { Stat } from "../types";

interface Props {
  stats: Stat[];
}

export function Stats({ stats }: Props) {
  return (
    <section>
      <u>Stats:</u>
      {stats.map((stat: Stat, ind: number) => {
        return (
          <div key={`stat${ind}`}>
            Name: {ucFirst(stat.stat.name)} | Base: {stat.base_stat} | Effort:
            {stat.effort}
          </div>
        );
      })}
    </section>
  );
}
