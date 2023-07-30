import { Box, Text, Flex } from '@chakra-ui/react';
import { FC } from 'react';

export const Welcome: FC = () => {
  return (
    <>
      <Flex
        as="main"
        display={'flex'}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          flexDir={'column'}
          boxSize={'2xl'}
          display={'flex'}
          justifyContent="center"
          alignItems="center"
          gap={'1rem'}
        >
          <Text as={'h1'} textAlign="center">
            Начальная страница
          </Text>
        </Box>
      </Flex>
    </>
  );
};
