import { createContext, useState, useEffect } from 'react';
import React from "react";
import { NotificationData } from "../models/notification.model";

const ReviewsContext = createContext({
  notification: {title: '', message: '', status: ''},
  showNotification: function ( notificationData: NotificationData ) {
  },
  hideNotification: function () {
  },
  active: false
});

export function ReviewsContextProvider( {children}: React.PropsWithChildren<{}> ) {
  const [activeNotification, setActiveNotification] = useState<NotificationData>({
    title: '',
    message: '',
    status: ''
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (
      active &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification({title: '', message: '', status: ''});
        setActive(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler( notificationData: NotificationData ) {
    setActiveNotification(notificationData);
    setActive(true);
  }

  function hideNotificationHandler() {
    setActiveNotification({title: '', message: '', status: ''});
    setActive(false);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
    active: active
  };

  return (
    <ReviewsContext.Provider value={context}>
      {children}
    </ReviewsContext.Provider>
  );
}

export default ReviewsContext;
