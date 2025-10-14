import React from "react";
import styles from "./MenuCard.module.css";

export default function MenuCard({ menu, onClick }) {
  const { name_en, name_ko, image, info } = menu;

  // info가 없을 때 안전하게 처리
  const noteWords = info?.notes
    ? info.notes
        .split(",")
        .map((note) => note.trim())
        .slice(0, 2) // 처음 2개만
    : [];

  // 로스트 정보와 노트를 합침
  const displayInfo = [];
  if (info?.roast) {
    displayInfo.push(info.roast);
  }
  displayInfo.push(...noteWords);

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={name_en} className={styles.image} />
      <div className={styles.nameBox}>
        <p className={styles.name_en}>{name_en}</p>
        <p className={styles.name_ko}>{name_ko}</p>
      </div>

      <p className={styles.notes}>
        {displayInfo.map((item, index) => (
          <span key={index} className={styles.noteWord}>
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}
