import Link from 'next/link';
import classes from './main-navigation.module.css';
import { Navbar, Nav } from 'react-bootstrap';

function MainNavigation() {

  return (
    <Navbar className="navbar navbar-expand-lg" bg="dark" variant="dark">
      <div className="container-fluid">
        <Nav className={`mr-auto ${classes["nav-list"]}`}>
          <Link href="/">Home</Link>
          <Link href="/all-users">Users</Link>
          <Link href="/reviews">Reviews</Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default MainNavigation;
