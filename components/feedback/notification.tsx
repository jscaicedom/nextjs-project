import { useContext } from 'react';

import classes from './notification.module.css';
import ReviewsContext from '../../store/reviews-context';
import { NextPage } from "next";
import { NotificationData } from "../../models/notification.model";

const Notification: NextPage<NotificationData> = (props) => {
  const notificationCtx = useContext(ReviewsContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
