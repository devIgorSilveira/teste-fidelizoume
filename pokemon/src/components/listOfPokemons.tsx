import { IListOfPokemonsInterface } from "@/interfaces";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Flex, SimpleGrid } from "@chakra-ui/react";
import PokemonCard from "./pokemonCard";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const ListOfPokemons = () => {
  const [pokemons, setPokemons] = useState<IListOfPokemonsInterface[]>(
    [] as IListOfPokemonsInterface[]
  );

  const [nextPageUrl, setNextPageUrl] = useState<string>("");
  const [previousPageUrl, setPreviousPageUrl] = useState<string>("");

  useEffect(() => {
    getPokemons("");
  }, []);

  const getPokemons = async (url: string) => {
    const pokes = await api.get(url);

    setNextPageUrl(pokes.data.next);
    setPreviousPageUrl(pokes.data.previous);

    setPokemons(pokes.data.results);
  };

  const handleNextPage = () => {
    if (nextPageUrl != null) {
      getPokemons(nextPageUrl);
    }
  };

  const handlePreviousPage = () => {
    if (previousPageUrl != null) {
      getPokemons(previousPageUrl);
    }
  };

  return (
    <>
      <SimpleGrid
        as={"ul"}
        columns={4}
        spacing={5}
        maxW={"80%"}
        m={"2rem auto"}
      >
        {pokemons.map((pokemon) => (
          <PokemonCard name={pokemon.name} key={pokemon.name} />
        ))}
      </SimpleGrid>

      {previousPageUrl && (
        <Button
          bg={"red.500"}
          color={"white"}
          size={"sm"}
          _hover={{ backgroundColor: "red.600" }}
          position={"fixed"}
          top={"50%"}
          left={"1rem"}
          leftIcon={<ArrowBackIcon />}
          onClick={handlePreviousPage}
        >
          Voltar
        </Button>
      )}
      {nextPageUrl && (
        <Button
          bg={"red.500"}
          size={"sm"}
          color={"white"}
          _hover={{ backgroundColor: "red.600" }}
          position={"fixed"}
          top={"50%"}
          right={"1rem"}
          rightIcon={<ArrowForwardIcon />}
          onClick={handleNextPage}
        >
          Avançar
        </Button>
      )}
    </>
  );
};

export default ListOfPokemons;
