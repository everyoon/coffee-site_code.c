import styles from "./MyPage.module.css";
import NavMenu from "./components/NavMenu";
import StampBoard from "./components/StampBoard";
import CoffeeAnalysis from "./components/CoffeeAnalysis";
import WishList from "./components/WishList";
import PairingNote from "./components/PairingNote";
import OrderStatus from "./components/OrderStatus";
import RecentOrders from "./components/RecentOrders";

export default function MyPage() {
  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <NavMenu />
        </div>
        <div className={styles.right}>
          <section className={styles.profile}>
            <StampBoard />
            <CoffeeAnalysis />
          </section>
          <section className={styles.wishNote}>
            <WishList />
            <PairingNote />
          </section>
          <section className={styles.order}>
            <OrderStatus />
          </section>
          <section className={styles.order}>
            <RecentOrders />
          </section>
        </div>
      </div>
    </div>
  );
}
