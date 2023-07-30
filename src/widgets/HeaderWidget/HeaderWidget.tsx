import { FC } from 'react';
import { HeaderLayout } from 'src/entities';
import { Navigation, ThemeSwitch } from 'src/features';

export const HeaderWidget: FC = () => {
  return (
    <HeaderLayout>
      <Navigation />
      <ThemeSwitch />
    </HeaderLayout>
  );
};
