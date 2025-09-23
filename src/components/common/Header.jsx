import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={`container ${styles.container}`}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/logo.png" alt="Code.C로고" />
            </Link>
          </div>
          <p className={`pixel ${styles.text}`}>Brew Your Code?</p>
          <ul className={styles.util}>
            <li>
              <Link to="/mypage">Sign in</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/cart">Location</Link>
            </li>
            <li>
              <Link to="/cart">Customer Center</Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/custom-menu">Drip Lab</Link>
          </li>
          <li>
            <Link to="/menu">Menu Lab</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/program">Program</Link>
          </li>
          <li>
            <Link to="/event&news">Event & News</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
