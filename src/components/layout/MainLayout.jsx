import Header from '../common/Header';
import Footer from '../common/Footer';
import styles from './MainLayout.module.css';

export default function MainLayout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
