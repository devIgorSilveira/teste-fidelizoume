import { ITypeInterface } from "@/interfaces";
import { Box, Flex, Text } from "@chakra-ui/react";

interface IPropsInterface {
  types: ITypeInterface[];
}

const PokemonType = ({ types }: IPropsInterface) => {
  const getTypeColor = (type: string = "") => {
    if (type == "ground") {
      return "yellow.600";
    } else if (type == "grass") {
      return "green.400";
    } else if (type == "poison") {
      return "purple.600";
    } else if (type == "normal") {
      return "gray.300";
    } else if (type == "fighting") {
      return "red.700";
    } else if (type == "flying") {
      return "blue.200";
    } else if (type == "rock") {
      return "yellow.700";
    } else if (type == "bug") {
      return "yellowgreen";
    } else if (type == "ghost") {
      return "purple.700";
    } else if (type == "steel") {
      return "gray.600";
    } else if (type == "electric") {
      return "yellow.400";
    } else if (type == "fire") {
      return "red.500";
    } else if (type == "water") {
      return "blue.400";
    } else if (type == "psychic") {
      return "pink.400";
    } else if (type == "ice") {
      return "blue.200";
    } else if (type == "dragon") {
      return "purple.500";
    } else if (type == "dark") {
      return "blackAlpha.700";
    } else if (type == "fairy") {
      return "pink.400";
    }
  };

  return (
    <>
      {types?.length == 1 ? (
        <Box
          bg={getTypeColor(types[0].type.name)}
          w={"48%"}
          textAlign={"center"}
          borderRadius={"6px"}
        >
          <Text
            color={"white"}
            fontSize={"small"}
            fontWeight={"extrabold"}
            p={"4px"}
          >
            {types[0].type.name}
          </Text>
        </Box>
      ) : (
        types?.length == 2 && (
          <Flex justify={"space-between"}>
            <Box
              bg={getTypeColor(types[0].type.name)}
              w={"48%"}
              textAlign={"center"}
              borderRadius={"6px"}
            >
              <Text
                color={"white"}
                fontSize={"small"}
                fontWeight={"extrabold"}
                p={"4px"}
              >
                {types[0].type.name}
              </Text>
            </Box>
            <Box
              bg={getTypeColor(types[1].type.name)}
              w={"48%"}
              textAlign={"center"}
              borderRadius={"6px"}
            >
              <Text
                color={"white"}
                fontSize={"small"}
                fontWeight={"extrabold"}
                p={"4px"}
              >
                {types[1].type.name}
              </Text>
            </Box>
          </Flex>
        )
      )}
    </>
  );
};

export default PokemonType;
