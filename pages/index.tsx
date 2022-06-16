import { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={`${styles.general} ${styles.main}`}/>
  );
};

export default Home;
