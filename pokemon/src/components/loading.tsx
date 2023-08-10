import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      position={"absolute"}
      h={"100vh"}
      w={"100%"}
      bg={"blackAlpha.700"}
      align={"center"}
      justify={"center"}
      zIndex={"50"}
    >
      <Spinner size={"xl"} color={"red.400"} />
    </Flex>
  );
};

export default Loading;
