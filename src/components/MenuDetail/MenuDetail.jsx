import React from "react";
import styles from "./MenuDetail.module.css";
import Button from "../../components/common/Button";

export default function MenuDetail({ menu, onClose }) {
  return (
    <div className={styles.detailPage}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.titleWrap}>
            <h3 className={styles.title}>{menu.name_en}</h3>
            <p>{menu.name_ko}</p>
          </div>

          {menu.desc && <p className={styles.description}>{menu.desc}</p>}

          {menu.info && (
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <div className={styles.infoSection}>
                  <h3 className={styles.sectionTitle}>Tasting Notes</h3>
                  <div className={styles.infoGrid}>
                    {menu.info.notes.split(",").map((note, index) => (
                      <p key={index}>{note.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.infoRight}>
                <div className={styles.infoSection}>
                  <h3 className={styles.sectionTitle}>Roast Level</h3>
                  <div className={styles.infoGrid}>
                    <p>{menu.info.roast}</p>
                  </div>
                </div>

                <div className={styles.infoSection}>
                  <h3 className={styles.sectionTitle}>Best For</h3>
                  <div className={styles.infoGrid}>
                    {menu.info.best.split(",").map((item, index) => (
                      <p key={index}>{item.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {menu.nutrition && (
            <div className={styles.nutritionSection}>
              <h3 className={styles.nutritionTitle}>영양 정보</h3>
              <div className={styles.serving}>
                <p>1회 제공량 기준</p>
                <strong>{menu.nutrition.serving}</strong>
              </div>
              <div className={styles.nutritionGrid}>
                <div className={styles.nutritionItem}>
                  <span>1회 제공량 (kcal)</span>
                  <strong>{menu.nutrition.kcal}</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>나트륨 (mg)</span>
                  <strong>{menu.nutrition.sodium}</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>포화지방 (g)</span>
                  <strong>{menu.nutrition.fat}</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>당류 (g)</span>
                  <strong>{menu.nutrition.sugar}</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>단백질 (g)</span>
                  <strong>{menu.nutrition.protein}</strong>
                </div>
                <div className={styles.nutritionItem}>
                  <span>카페인 (mg)</span>
                  <strong>{menu.nutrition.caffeine}</strong>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 오른쪽: 이미지 */}
        <div className={styles.rightContent}>
          <img src={menu.image} alt={menu.name_en} className={styles.image} />
        </div>
      </div>
      <Button
        className={styles.btn}
        onClick={onClose}
        size="large"
        color="default"
      >
        Menu
      </Button>
    </div>
  );
}
