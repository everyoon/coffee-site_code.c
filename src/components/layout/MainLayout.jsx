import Header from '../common/Header';
import Footer from '../common/Footer';
import styles from './MainLayout.module.css';
import CustomCursor from '../CustomCursor/CustomCursor';

export default function MainLayout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <CustomCursor />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
