import React, { useState } from "react";
import styles from "./MenuList.module.css";
import MenuCard from "./MenuCard";
import { menus } from "./menusData";
import { Icons } from "../../components/common/Icons";
import { useNavigate } from "react-router-dom";

const MenuList = () => {
  const [openCategories, setOpenCategories] = useState(["Code.C Signature"]);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const goDetail = (menu) => {
    navigate(`/menu/${menu.id}`);
  };

  return (
    <div className={styles.menuList}>
      {Object.entries(menus).map(([category, items]) => {
        const isOpen = openCategories.includes(category);

        return (
          <section key={category} className={styles.categorySection}>
            <div
              className={styles.titleWrap}
              onClick={() => toggleCategory(category)}
            >
              <h2 className={styles.categoryTitle}>{category}</h2>
              {isOpen ? <Icons.top /> : <Icons.down />}
            </div>
            {isOpen && (
              <div className={styles.cardsWrapper}>
                {items.map((menu) => (
                  <MenuCard
                    key={menu.id}
                    menu={menu}
                    onClick={() => goDetail(menu)}
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default MenuList;
