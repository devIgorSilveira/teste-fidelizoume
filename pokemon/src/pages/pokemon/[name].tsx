import Header from "@/components/header";
import { IPokemonInterface } from "@/interfaces";
import { api } from "@/services/api";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<IPokemonInterface | null>(
    {} as IPokemonInterface
  );

  const router = useRouter();

  const { name } = router.query;

  useEffect(() => {
    if (name) {
      getPokemon();
    }
  }, [name]);

  const getPokemon = async () => {
    try {
      const pokes = await api.get(`/${name}`);

      setPokemon(pokes.data);
    } catch (error) {
      setPokemon(null);
    }
  };

  return (
    <>
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
          {pokemon?.name}
        </Box>
      )}
    </>
  );
};

export default PokemonPage;
