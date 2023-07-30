import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWidget } from 'src/widgets';

export const Layout: FC = () => {
  return (
    <>
      <HeaderWidget />
      <Outlet />
    </>
  );
};
