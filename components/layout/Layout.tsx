import MainNavigation from './MainNavigation';
import Notification from '../feedback/notification'
import { Fragment, useContext } from 'react';
import React from 'react';
import ReviewsContext from "../../store/reviews-context";

function Layout( {children}: React.PropsWithChildren<{}> ) {
  const notificationCtx = useContext(ReviewsContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainNavigation/>
      <main>{children}</main>
      {notificationCtx.active && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
