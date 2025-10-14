import React, { useState } from "react";
import styles from "./Menu.module.css";
import MenuList from "../../components/MenuList/MenuList";
import MenuDetail from "../../components/MenuDetail/MenuDetail";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleSelectMenu = (menu) => setSelectedMenu(menu);
  const handleBackToList = () => setSelectedMenu(null);

  return (
    <>
      <section className={styles.heroSection}>
        <h3 className={`pixel ${styles.title}`}>
          You can build your own coffee —<br />
          or just run the preset.
        </h3>
        <p>
          Signature drinks, non-caffeinated options, and desserts,
          <br />
          all ready for you to enjoy.
        </p>
      </section>
      <div className={`container ${styles.container}`}>
        {!selectedMenu ? (
          <MenuList onSelectMenu={handleSelectMenu} />
        ) : (
          <MenuDetail menu={selectedMenu} onBack={handleBackToList} />
        )}
      </div>
    </>
  );
}
