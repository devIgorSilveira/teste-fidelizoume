import Header from "@/components/header";
import { IPokemonInterface } from "@/interfaces";
import { api } from "@/services/api";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { formatPokemonId, formatPokemonInfo, formatPokemonName } from "@/utils";
import PokemonType from "@/components/pokemonType";
import Loading from "@/components/loading";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<IPokemonInterface | null>(
    {} as IPokemonInterface
  );
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const router = useRouter();

  const { name } = router.query;

  useEffect(() => {
    if (name) {
      getPokemon();
    }
  }, [name]);

  const getPokemon = async () => {
    try {
      setIsLoading(true);
      const pokes = await api.get(`/${name}`);

      setPokemon(pokes.data);
    } catch (error) {
      console.error(error);
      setPokemon(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      {pokemon == null ? (
        <Box as={"main"} bg={"gray.100"} h={"100vh"}>
          <Header />
          <Flex
            w={"100%"}
            h={"80%"}
            justify={"center"}
            align={"center"}
            direction={"column"}
            gap={"8px"}
          >
            <WarningTwoIcon fontSize={"xxx-large"} />
            <Heading w={"50%"} textAlign={"center"}>
              Esse Pokemon não existe
            </Heading>
            <Text w={"50%"} textAlign={"center"} fontSize={"large"}>
              Tente buscar outro nome ou clique no botão abaixo para voltar a
              lista de pokemons.
            </Text>
            <Button
              bg={"red.500"}
              color={"white"}
              _hover={{ backgroundColor: "red.600" }}
              onClick={() => router.push("/")}
              mt={"2rem"}
            >
              Voltar para a lista
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box as={"main"} bg={"gray.100"} pb={"2rem"}>
          <Header />
          <Box maxW={"80%"} margin={"2rem auto"}>
            <Flex justify={"space-between"}>
              <Box w={"45%"} textAlign={"center"}>
                <Image
                  src={pokemon.sprites?.front_default}
                  w={"100%"}
                  borderRadius={"8px"}
                  bg={"gray.200"}
                />
              </Box>
              <Flex
                w={"45%"}
                bg={"gray.200"}
                borderRadius={"8px"}
                direction={"column"}
                gap={"2rem"}
                p={"1rem"}
              >
                <Flex align={"baseline"} gap={"1rem"} justify={"center"}>
                  <Text>{formatPokemonId(pokemon.id)}</Text>
                  <Heading>{formatPokemonName(pokemon.name)}</Heading>
                </Flex>
                <Flex align={"center"} w={"50%"} gap={"1rem"}>
                  <Heading fontSize={"sm"}>Tipo(s):</Heading>
                  <PokemonType types={pokemon.types} />
                </Flex>
                <Flex align={"center"} w={"50%"} gap={"1rem"}>
                  <Heading fontSize={"sm"}>Experiência Básica:</Heading>
                  <Text>{pokemon.base_experience}</Text>
                </Flex>
                <Flex align={"center"} w={"50%"} gap={"1rem"}>
                  <Heading fontSize={"sm"}>Altura:</Heading>
                  <Text>{formatPokemonInfo(pokemon.height?.toString())}m</Text>
                </Flex>
                <Flex align={"center"} w={"50%"} gap={"1rem"}>
                  <Heading fontSize={"sm"}>Peso:</Heading>
                  <Text>{formatPokemonInfo(pokemon.weight?.toString())}kg</Text>
                </Flex>
                <Box>
                  <Heading fontSize={"sm"} mb={"1rem"}>
                    Estátisticas base:
                  </Heading>
                  <Flex gap={"1rem"}>
                    {pokemon.stats?.map((stat, index) => (
                      <Box
                        key={index}
                        w={`calc(100%/${pokemon.stats?.length})`}
                      >
                        <Box
                          w={"100%"}
                          h={"200px"}
                          bg={"gray.300"}
                          display={"flex"}
                          alignItems={"flex-end"}
                        >
                          <Box
                            w={"100%"}
                            h={`${stat.base_stat}px`}
                            bg={"red.400"}
                          />
                        </Box>
                        <Text
                          fontSize={"x-small"}
                          textAlign={"center"}
                          mt={"3px"}
                        >
                          {stat.stat.name}
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PokemonPage;
