import MainNavigation from './MainNavigation';
import { Fragment } from 'react';
import React from 'react';

function Layout( {children}: React.PropsWithChildren<{}> ) {
  return (
    <Fragment>
      <MainNavigation/>
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
