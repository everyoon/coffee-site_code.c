// GoTopButton.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RadiusButton from "./RadiusButton";
import styles from "./GoTopButton.module.css";

const GoTopButton = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Drip Lab 페이지에서는 숨기기
  if (location.pathname.includes("/drip-lab")) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${styles.wrapper} ${visible ? styles.show : ""}`}>
      <RadiusButton to="/customer-center" iconName="headphones">
        고객센터
      </RadiusButton>
      <RadiusButton onClick={scrollToTop} iconName="top">
        Top
      </RadiusButton>
    </div>
  );
};

export default GoTopButton;
