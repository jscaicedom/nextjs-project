import { useContext, useEffect, useState } from 'react';

import CommentList from '../../components/comments/CommentList';
import NewComment from '../../components/comments/NewComment';
import classes from './comments.module.css';
import ReviewsContext from '../../store/reviews-context';
import { NextPage } from "next";
import { ReviewAdded } from "../../models/review.model";
import React from "react";

const CommentsPage: NextPage = () => {

  const notificationCtx = useContext(ReviewsContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  const [fetchComments, setFetchComents] = useState(true);

  useEffect(() => {
    setIsFetchingComments(true);
    fetch('/api/reviews/')
      .then(( response ) => response.json())
      .then(( data ) => {
        setComments(data.comments);
        setIsFetchingComments(false);
      });

  }, [fetchComments]);

  const toggleCommentsHandler = () => {
    setShowComments(( prevStatus ) => !prevStatus);
  };

  const addCommentHandler = ( commentData: ReviewAdded ) => {
    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Your comment is currently being stored into a database.',
      status: 'pending'
    });

    fetch('/api/reviews/', {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(( response ) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then(( data ) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then(( data ) => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Your comment was saved!',
          status: 'success'
        });
        setFetchComents(( prevStatus ) => !prevStatus);
      })
      .catch(( error ) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error'
        });
      });
    setShowComments(false);
  };

  return (
    <div className={classes.container}>
      <section className={classes.comments}>
        <button onClick={toggleCommentsHandler}>
          {showComments ? 'Hide' : 'Show'} New Review
        </button>
        {showComments && <NewComment onAddComment={addCommentHandler}/>}
        {!isFetchingComments && <CommentList items={comments}/>}
        {isFetchingComments && <p>Loading...</p>}
      </section>
    </div>
  );
};

export default CommentsPage;