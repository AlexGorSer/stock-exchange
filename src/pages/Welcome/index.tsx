import { Box, Text, Flex, Button, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

export const Welcome: FC = () => {
  const { toggleColorMode } = useColorMode()
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
          <Button onClick={toggleColorMode}>Color Mode:</Button>
        </Box>
      </Flex>
    </>
  )
}
