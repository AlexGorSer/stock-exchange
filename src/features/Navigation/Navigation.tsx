import { Flex } from '@chakra-ui/react';
import { clsx } from 'clsx';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation: FC = () => {
  return (
    <Flex>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(isActive ? styles.active : '')}
      >
        Главная
      </NavLink>
    </Flex>
  );
};
