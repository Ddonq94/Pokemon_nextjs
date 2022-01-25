export function getPokemonDetails(url: string) {
  return fetch(url).then((data) => data.json());
}

export const getSprite = (sprites: any): string => {
  let retVal = "";
  for (let key of Object.keys(sprites)) {
    if (key === "other" || key === "versions") {
      continue;
    }
    if (sprites[key]) {
      retVal = sprites[key];
      break;
    }
  }

  return retVal;
};

export function ucFirst(str: string) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
