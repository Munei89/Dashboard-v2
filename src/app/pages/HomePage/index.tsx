import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Main from 'app/layouts/Main';
import { menuItems } from 'utils/constants';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Main sidebarMenuItems={menuItems}>
        <span>My HomePages</span>
      </Main>
    </>
  );
}
