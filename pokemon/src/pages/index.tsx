import Header from "@/components/header";
import ListOfPokemons from "@/components/listOfPokemons";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box as={"main"} bg={"gray.100"} pb={"2rem"}>
        <Header />
        <ListOfPokemons />
      </Box>
    </>
  );
}
