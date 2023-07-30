import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Welcome } from 'src/pages';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Welcome />} />
        </Route>
      </Routes>
    </>
  );
};
