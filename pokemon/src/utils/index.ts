export const formatPokemonId = (id: number = 0) => {
  let formatedId = "";

  for (let i = 4; i > 0; i--) {
    if (i > id.toString().length) {
      formatedId += 0;
    }
  }

  return `N. ${formatedId}${id}`;
};

export const formatPokemonName = (name: string = "0000") => {
  return `${name[0].replace(name[0], name[0].toUpperCase())}${name.slice(1)}`;
};

export const formatPokemonInfo = (info: string = "0000") => {
  const beforeDot = info.substring(0, info.length - 1);
  const afterDot = info.substring(info.length - 1, info.length);
  return beforeDot + "." + afterDot;
};
