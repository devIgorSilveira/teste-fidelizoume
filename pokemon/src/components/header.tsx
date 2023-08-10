import { FormControl } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Flex, Heading } from "@chakra-ui/layout";
import { Search2Icon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const [searchField, setSearchField] = useState<string>("");

  const router = useRouter();

  return (
    <Flex
      as={"header"}
      bg={"red.500"}
      p={"2rem 1rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Heading
        as={"h1"}
        color={"yellow.300"}
        onClick={() => router.push("/")}
        cursor={"pointer"}
      >
        PokeSearch
      </Heading>
      <FormControl
        as={"form"}
        w={"30%"}
        onSubmit={() => router.push(`/pokemon/${searchField.toLowerCase()}`)}
      >
        <InputGroup>
          <Input
            placeholder={"Digite o nome do pokémon"}
            textOverflow={"ellipsis"}
            variant={"filled"}
            _focus={{ backgroundColor: "white" }}
            focusBorderColor={"yellow.300"}
            onChange={(e) => setSearchField(e.target.value)}
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
