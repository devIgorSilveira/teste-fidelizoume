import { FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Flex, Heading } from "@chakra-ui/layout";
import { Search2Icon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

const Header = () => {
  return (
    <Flex
      as={"header"}
      bg={"red.500"}
      p={"2rem 1rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Heading as={"h1"} color={"yellow.300"}>
        PokeSearch
      </Heading>
      <FormControl as={"form"} w={"30%"}>
        <InputGroup>
          <Input
            placeholder={"Digite o nome do pokémon"}
            textOverflow={"ellipsis"}
            variant={"filled"}
            _focus={{ backgroundColor: "white" }}
            focusBorderColor={"yellow.300"}
          />
          <InputRightElement borderLeft={"2px"} borderColor={"gray.600"}>
            <Button
              variant={"ghost"}
              _hover={{ backgroundColor: "unset" }}
              type={"submit"}
            >
              <Search2Icon color={"gray.600"} fontSize={"smaller"} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Flex>
  );
};

export default Header;
