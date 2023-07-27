import { Box, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";

export const App: FC = () => {
  return (
    <>
      <Flex
        as="main"
        display={"flex"}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          boxSize={"2xl"}
          display={"flex"}
          justifyContent="center"
          alignItems="center"
        >
          <Text
            as={"h1"}
            textAlign="center"
          >
            Начальная страница
          </Text>
        </Box>
      </Flex>
    </>
  );
};
