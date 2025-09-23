import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import symbol from "@assets/images/stamp.png";

export default function Footer() {
  const [hasError, setHasError] = useState(false);

  const handleSubscribe = () => {
    const input = document.querySelector(`.${styles.inputField}`);
    const email = input.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setHasError(true);
      return;
    }

    setHasError(false);
    alert("뉴스레터 구독 완료되었습니다!");
    input.value = "";
  };

  // 클릭하면 오류 상태 초기화
  const handleFocus = () => {
    setHasError(false);
  };

  // enter 키 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={`container ${styles.container}`}>
          <div className={styles.left}>
            <img className={styles.logo} src="/logo.png" alt="Code.C로고" />
          </div>
          <div className={styles.right}>
            <div className={styles.infoDetail}>
              <div className={styles.infoBox}>
                <p>CEO</p>
                <p>김지윤</p>
              </div>
              <div className={styles.infoBox}>
                <p>Address</p>
                <p>서울특별시 서초구 강남대로 465 교보타워</p>
              </div>
              <div className={styles.infoBox}>
                <p>Email</p>
                <p>Code.C@codec.com</p>
              </div>
              <div className={styles.infoBox}>
                <p>Customer Center</p>
                <p>1551-8544</p>
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.newsletterLeft}>
                <input
                  type="email"
                  placeholder="Enter email for updates"
                  className={`${styles.inputField} ${
                    hasError ? styles.error : ""
                  }`}
                  onFocus={handleFocus}
                  onKeyDown={handleKeyDown}
                />
                {hasError && (
                  <p className={styles.errorMessage}>
                    올바른 이메일을 입력해주세요.
                  </p>
                )}
                <div className={styles.sendBtn} onClick={handleSubscribe}>
                  <span>Subscribe to our newsletter</span>
                  <span>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="visually-hidden">Send</span>
                </div>
              </div>
              <div className={styles.newsletterRight}>
                <img src={symbol} alt="심볼" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/custom-menu">Drip Lab</Link>
            </li>
            <li>
              <Link to="/menu">Menu Lab</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/program">Program</Link>
            </li>
            <li>
              <Link to="/event&news">Event & News</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>
          © 2025 code.C Company. All rights reserved.
        </p>
        <ul className={styles.linkBox}>
          <li>
            <a
              href="https://www.instagram.com/everyoo_n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instargram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/?app=desktop&hl=ko&gl=KR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
