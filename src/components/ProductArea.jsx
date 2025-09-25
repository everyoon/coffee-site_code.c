import React, { useEffect, useRef, useState } from "react";
import RadiusButton from "./common/RadiusButton";
import styles from "./ProductArea.module.css";
import been from "@assets/images/coffee_bag_blue.png";
import dripPot from "@assets/images/drip_pot.png";
import dripper from "@assets/images/dripper.png";
import glassServer from "@assets/images/glass_server.png";

const ProductArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 순차적으로 아이템들을 애니메이션 실행
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setAnimatedItems((prev) => [...prev, index]);
            }, index * 200); // 200ms씩 지연
          });
        }
      },
      { threshold: 0.3 } // 30% 보일 때 실행
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.product_area} ${
        isVisible ? styles.container_visible : ""
      }`}
    >
      <div
        className={`${styles.product_item} ${styles.been} ${
          animatedItems.includes(0) ? styles.item_visible : ""
        }`}
      >
        <img src={been} alt="Figmatic 원두 백" />
        <RadiusButton to="/store/been" iconName="plus" />
      </div>

      <div
        className={`${styles.product_item} ${styles.dripPot} ${
          animatedItems.includes(1) ? styles.item_visible : ""
        }`}
      >
        <img src={dripPot} alt="드립팟" />
        <RadiusButton to="/store/tool" iconName="plus" />
      </div>

      <div
        className={`${styles.product_item} ${styles.dripper} ${
          animatedItems.includes(2) ? styles.item_visible : ""
        }`}
      >
        <img src={dripper} alt="드립퍼" />
        <RadiusButton to="/store/tool" iconName="plus" />
      </div>

      <div
        className={`${styles.product_item} ${styles.glassServer} ${
          animatedItems.includes(3) ? styles.item_visible : ""
        }`}
      >
        <img src={glassServer} alt="글라스 서버" />
        <RadiusButton to="/store/tool" iconName="plus" />
      </div>
    </div>
  );
};

export default ProductArea;
