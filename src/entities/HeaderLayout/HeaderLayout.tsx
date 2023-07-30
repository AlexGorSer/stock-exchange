import { Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type HeaderLayoutProps = {
  children: ReactNode;
};

export const HeaderLayout: FC<HeaderLayoutProps> = ({ children }) => {
  return (
    <Flex
      as="header"
      justifyContent="space-around"
      alignItems={'center'}
      h="5vh"
      shadow="outline"
    >
      {children}
    </Flex>
  );
};
