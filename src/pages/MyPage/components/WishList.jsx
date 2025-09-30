import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../MyPage.module.css";
import { Icons } from "../../../components/common/Icons";
import figmatic from "@assets/images/mypage_coffee1.png";
import peachZest from "@assets/images/mypage_coffee2.png";
import citrusBloom from "@assets/images/mypage_coffee3.png";
import pouch from "@assets/images/mypage_kit1.png";
import dripper from "@assets/images/mypage_kit2.png";
import dripPot from "@assets/images/mypage_kit3.png";

export default function WishList() {
  const initialItems = [
    { id: 1, img: figmatic, alt: "Figmatic 원두백" },
    { id: 2, img: pouch, alt: "Code.C 파우치" },
    { id: 3, img: dripPot, alt: "drip Pot" },
    { id: 4, img: dripper, alt: "dripper" },
    { id: 5, img: peachZest, alt: "Peach Zest 원두백" },
    { id: 6, img: citrusBloom, alt: "Citrus Bloom 원두백" },
  ];

  const [wishItems, setWishItems] = useState(initialItems);

  const handleRemove = (id, e) => {
    e.preventDefault();
    setWishItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.inner}>
      <div className={styles.titleInner}>
        <h4>위시리스트</h4>
        <Link to="/wish">
          <Icons.right />
        </Link>
      </div>
      <div className={styles.contents}>
        <ul>
          {wishItems.map((item) => (
            <li key={item.id}>
              <Link to="/product">
                <span onClick={(e) => handleRemove(item.id, e)}>
                  <Icons.heart />
                </span>
                <div>
                  <img src={item.img} alt={item.alt} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
