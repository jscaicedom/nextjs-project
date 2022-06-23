import classes from './comment-list.module.css';
import { NextPage } from "next";

interface Comment {
  _id: any,
  email: string,
  name: string,
  text: string
}

interface CommentListProps {
  items: Comment[]
}

const CommentList: NextPage<CommentListProps> = (props) => {
  const { items } = props;

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
