import { NextPage } from 'next';
import styles from './card.module.css';
import { User } from "../../models/user-info.model";
import { Card, ListGroup } from "react-bootstrap";
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

interface UserCardProps {
  user: User
}

const UserCard: NextPage<UserCardProps> = ( {user} ) => {

  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        border="secondary"
        className={styles['user-card']}
        onMouseEnter={() => setIsFlipped(true)}
      >
        <Card.Img variant="top" src={user.avatar}/>
        <Card.Header>{user.first_name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{'Email : ' + user.email}</ListGroup.Item>
          <ListGroup.Item>{'Job : ' + user.employment.title}</ListGroup.Item>
          <ListGroup.Item>{'City : ' + user.address.city}</ListGroup.Item>
        </ListGroup>
      </Card>

      <Card
        border="secondary"
        className={styles['user-card']}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <Card.Header>{user.last_name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{'Lastname : ' + user.last_name}</ListGroup.Item>
          <ListGroup.Item>{'Social Number : ' + user.social_insurance_number}</ListGroup.Item>
          <ListGroup.Item>{'Gender : ' + user.gender}</ListGroup.Item>
          <ListGroup.Item>{'Phone : ' + user.phone_number}</ListGroup.Item>
          <ListGroup.Item>{'Birth Date : ' + user.date_of_birth}</ListGroup.Item>
          <ListGroup.Item>{'Country : ' + user.address.country}</ListGroup.Item>
          <ListGroup.Item>{'Skill : ' + user.employment.key_skill}</ListGroup.Item>
          <ListGroup.Item>{'Username : ' + user.username}</ListGroup.Item>
        </ListGroup>
      </Card>
    </ReactCardFlip>
  );
};

export default UserCard;
