import styles from "./Home.module.css";
import { useState, useEffect, useRef } from "react";
import rightCode from "@assets/images/right_code.png";
import leftCode from "@assets/images/left_code.png";

// TextTyper
const TextTyper = ({ text = "", speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // 타이핑 애니메이션 정리
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const safeText = typeof text === "string" ? text : String(text ?? "");

    if (!safeText) {
      setDisplayedText("");
      return;
    }

    if (isTyping) return;

    setDisplayedText(""); //초기화
    setIsTyping(true);
    let i = 0;

    const type = () => {
      if (i < safeText.length) {
        setDisplayedText(safeText.substring(0, i + 1));
        i++;
        timeoutRef.current = setTimeout(type, speed);
      } else {
        setIsTyping(false);
      }
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsTyping(false);
    };
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default function Home() {
  return (
    <div className={styles.mainVisual}>
      <div className={`pixel ${styles.leftText}`}>
        <TextTyper
          text="The process of making coffee is like writing code. Every variable—from the beans and brewing method to the temperature and time—exists as a precise formula. We research and reinterpret that formula."
          speed={20}
        />
      </div>

      <div className={`pixel ${styles.rightText}`}>
        <TextTyper
          text="Code.C is more than just a place to drink coffee. It's a laboratory where we understand, define, and recreate coffee in our own unique way."
          speed={20}
        />
      </div>
      <div className={styles.leftCode}>
        <img src={leftCode} alt="코딩스티커 이미지" />
      </div>
      <div className={styles.rightCode}>
        <img src={rightCode} alt="코딩스티커 이미지" />
      </div>
      <div className={styles.titleWrapper}>
        <span className="pixel">cafe</span>
        <h1>
          <svg
            width="550"
            height="125"
            viewBox="0 0 550 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12.5H12.5V0H75V12.5H87.5V25H62.5V12.5H25V112.5H62.5V100H87.5V112.5H75V125H12.5V112.5H0V12.5ZM100 50H112.5V37.5H175V50H187.5V112.5H175V125H112.5V112.5H100V50ZM125 50V112.5H162.5V50H125ZM200 50H212.5V37.5H262.5V0H287.5V125H212.5V112.5H200V50ZM225 50V112.5H262.5V50H225ZM300 50H312.5V37.5H375V50H387.5V75H325V112.5H362.5V100H387.5V112.5H375V125H312.5V112.5H300V50ZM325 50V62.5H362.5V50H325ZM412.5 100H437.5V125H412.5V100ZM462.5 12.5H475V0H537.5V12.5H550V25H525V12.5H487.5V112.5H525V100H550V112.5H537.5V125H475V112.5H462.5V12.5Z"
              fill="#F9F9F9"
            />
          </svg>
        </h1>
        <span className="pixel">to create your own unique Coffee</span>
      </div>
    </div>
  );
}
