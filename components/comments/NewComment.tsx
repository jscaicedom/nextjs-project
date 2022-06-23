import { useState } from 'react';
import classes from './new-comment.module.css';
import { NextPage } from "next";
import React from "react";

const NewComment: NextPage<any> = ( props ) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');

  const sendCommentHandler = ( event: React.SyntheticEvent ) => {
    event.preventDefault();

    if (
      !emailInput ||
      emailInput.trim() === '' ||
      !emailInput.includes('@') ||
      !nameInput ||
      nameInput.trim() === '' ||
      !commentInput ||
      commentInput.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: emailInput,
      name: nameInput,
      text: commentInput
    });

  };

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' onBlur={( e ) => setEmailInput(e.target.value)}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' onBlur={( e ) => setNameInput(e.target.value)}/>
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea onBlur={( e ) => setCommentInput(e.target.value)}/>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className={classes.btn}>Submit</button>
    </form>
  );
};

export default NewComment;
