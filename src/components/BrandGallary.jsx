import { useEffect, useRef, useState } from 'react';
import styles from './BrandGallery.module.css';

import coffeBag from '@assets/images/kit_coffee_bag.jpg';
import cup from '@assets/images/kit_cup.jpg';
import sticker from '@assets/images/kit_sticker.jpg';
import takeCup from '@assets/images/kit_take_cup.jpg';
import takeBag from '@assets/images/kit_take_bag.jpg';
import paperBag from '@assets/images/kit_paper_bag.jpg';
import pouch from '@assets/images/kit_pouch.jpg';
import can from '@assets/images/kit_can.jpg';

const images = [
  { src: coffeBag, alt: 'Code.C 원두', area: 'item1' },
  { src: cup, alt: 'Code.C 머그컵', area: 'item2' },
  { src: sticker, alt: 'Code.C 스티커 세트', area: 'item3' },
  { src: takeCup, alt: 'Code.C 테이크아웃 종이컵', area: 'item4' },
  { src: takeBag, alt: 'Code.C 테이크아웃 가방', area: 'item5' },
  { src: paperBag, alt: 'Code.C 종이백', area: 'item6' },
  { src: pouch, alt: 'Code.C 파우치', area: 'item7' },
  { src: can, alt: 'Code.C 캔음료', area: 'item8' },
];

const BrandGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const current = galleryRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <section className={styles.brandGallery} ref={galleryRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.gridItem} ${styles[image.area]} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGallery;
