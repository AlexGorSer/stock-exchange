import { Flex, Switch, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FC } from 'react';

export const ThemeSwitch: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex gap="1rem" margin={'1rem'}>
        <SunIcon />
        <Switch
          onChange={toggleColorMode}
          isChecked={colorMode === 'dark' ? true : false}
        />
        <MoonIcon />
      </Flex>
    </>
  );
};
