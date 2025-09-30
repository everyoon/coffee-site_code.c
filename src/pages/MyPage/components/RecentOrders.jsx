// components/RecentOrders.jsx
import styles from "../MyPage.module.css";
import { Link } from "react-router-dom";
import figmatic from "@assets/images/mypage_coffee1.png";
import citrusBloom from "@assets/images/mypage_coffee3.png";
import cup from "@assets/images/mypage_kit4.png";
import glassServer from "@assets/images/mypage_kit5.png";

const recentItems = [
  { img: figmatic, name: "Figmatic", alt: "Figmatic 원두백" },
  { img: citrusBloom, name: "CitrusBloom", alt: "CitrusBloom 원두백" },
  { img: cup, name: "Code.C 보온 머그컵", alt: "Code.C 보온 머그컵" },
  { img: glassServer, name: "누아 내열 유리 서버", alt: "누아 내열 유리 서버" },
];

export default function RecentOrders() {
  return (
    <div className={styles.orderInner}>
      <div className={styles.titleInner}>
        <h4>최근 주문 내역</h4>
        <Link to="/order">
          <Icons.right />
        </Link>
      </div>

      <div className={styles.orderContents}>
        <ul className={styles.recentList}>
          {recentItems.map((item, i) => (
            <li key={i}>
              <Link to="/product">
                <img src={item.img} alt={item.alt} />
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
