import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Fragment, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { User } from "../../models/user-info.model";
import UserCard from "../../components/user/UserCard";
import { Button } from "react-bootstrap";
import React from "react";

interface AllUsersProps {
  users: User[]
}

const AllUsersPage: NextPage<AllUsersProps> = ( {users} ) => {

  const [data, setData] = useState<User[]>(users);

  const fetchData = async () => {
    const req = await fetch('https://random-data-api.com/api/users/random_user?size=10');
    const newData = await req.json() as User[];

    return setData((prevState) => {
      return prevState.concat(...newData)
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Fragment>
      <Head>
        <title>All Users</title>
      </Head>

      <div className={styles.container}>
        {data.map(user => (
            <UserCard
              key={user.id}
              user={user}
            />
          )
        )}
      </div>

      <div className={styles['load-button']}>
        <Button
          className="btn btn-outline-success"
          variant="outline-info"
          onClick={handleClick}
        >
          Load more
        </Button>
      </div>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://random-data-api.com/api/users/random_user?size=10');
  const users = (await res.json()) as User[];
  return {
    props: {
      users
    }
  };
};

export default AllUsersPage;
