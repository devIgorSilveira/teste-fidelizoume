import { IPokemonInterface } from "@/interfaces";
import { api } from "@/services/api";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PokemonType from "./pokemonType";
import { useRouter } from "next/router";

interface IPropInterface {
  name: string;
}

const PokemonCard = ({ name }: IPropInterface) => {
  const [pokemon, setPokemon] = useState<IPokemonInterface>(
    {} as IPokemonInterface
  );

  const router = useRouter();

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const pokes = await api.get(`/${name}`);

    setPokemon(pokes.data);
  };

  const formatPokemonId = (id: number = 0) => {
    let formatedId = "";

    for (let i = 4; i > 0; i--) {
      if (i > id.toString().length) {
        formatedId += 0;
      }
    }

    return `N. ${formatedId}${id}`;
  };

  const formatPokemonName = (name: string = "0000") => {
    return `${name[0].replace(name[0], name[0].toUpperCase())}${name.slice(1)}`;
  };

  return (
    <Card
      w={"205px"}
      _hover={{ transform: "scale(1.01)", boxShadow: "0px 0px 5px 1px gray" }}
      cursor={"pointer"}
      onClick={() => router.push(`/pokemon/${name}`)}
    >
      <CardHeader w={"205px"} h={"205px"} bg={"gray.100"}>
        <Image src={pokemon.sprites?.front_default} w={"100%"} />
      </CardHeader>
      <CardBody display={"flex"} flexDirection={"column"} gap={"5px"}>
        <Text fontSize={"xs"}>{formatPokemonId(pokemon.id)}</Text>
        <Heading fontSize={"x-large"}>
          {formatPokemonName(pokemon.name)}
        </Heading>
        <PokemonType types={pokemon.types} />
      </CardBody>
    </Card>
  );
};

export default PokemonCard;
