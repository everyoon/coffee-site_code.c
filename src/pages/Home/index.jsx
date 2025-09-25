import styles from "./Home.module.css";
import { useState, useEffect, useRef } from "react";
import rightCode from "@assets/images/right_code.png";
import leftCode from "@assets/images/left_code.png";
import custom from "@assets/images/main_custom.gif";
import Button from "../../components/common/Button";
import ProductArea from "../../components/ProductArea";
// import been from "@assets/images/coffee_bag_blue.png";
// import RadiusButton from "../../components/common/RadiusButton";
// import dripPot from "@assets/images/drip_pot.png";
// import dripper from "@assets/images/dripper.png";
// import glassServer from "@assets/images/glass_server.png";

// TextTyper
const TextTyper = ({ text = "", speed = 30, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const timeoutRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  // onComplete 참조 업데이트
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // 타이핑 애니메이션
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const safeText = typeof text === "string" ? text : String(text ?? "");

    if (!safeText) {
      setDisplayedText("");
      return;
    }

    if (isTyping || hasCompleted) return;

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
        setHasCompleted(true);
        // 타이핑 완료 콜백 호출
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
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
  const [leftTextComplete, setLeftTextComplete] = useState(false);
  const [rightTextComplete, setRightTextComplete] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);

  // 양쪽 텍스트가 모두 완료되면 제목 & 코딩이미지 표시
  useEffect(() => {
    if (leftTextComplete && rightTextComplete) {
      const timer = setTimeout(() => {
        setShowTitle(true);
        setTimeout(() => {
          setTitleAnimated(true);
        }, 50);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [leftTextComplete, rightTextComplete]);

  const handleLeftComplete = () => {
    setLeftTextComplete(true);
  };

  const handleRightComplete = () => {
    setRightTextComplete(true);
  };

  return (
    <>
      <div className={styles.mainVisual}>
        <div className={`pixel ${styles.leftText}`}>
          <TextTyper
            text="The process of making coffee is like writing code. Every variable—from the beans and brewing method to the temperature and time—exists as a precise formula. We research and reinterpret that formula."
            speed={15}
            onComplete={handleLeftComplete}
          />
        </div>

        <div className={`pixel ${styles.rightText}`}>
          <TextTyper
            text="Code.C is more than just a place to drink coffee. It's a laboratory where we understand, define, and recreate coffee in our own unique way."
            speed={15}
            onComplete={handleRightComplete}
          />
        </div>

        {showTitle && (
          <>
            <div
              className={`${styles.leftCode} ${
                titleAnimated ? styles.codeVisible : styles.codeHidden
              }`}
            >
              <img src={leftCode} alt="코딩스티커 이미지" />
            </div>
            <div
              className={`${styles.rightCode} ${
                titleAnimated ? styles.codeVisible : styles.codeHidden
              }`}
            >
              <img src={rightCode} alt="코딩스티커 이미지" />
            </div>
          </>
        )}

        {showTitle && (
          <div
            className={`${styles.titleWrapper} ${
              titleAnimated ? styles.titleVisible : styles.titleHidden
            }`}
          >
            <span className="pixel">
              <TextTyper text="Cafe" speed={100} />
            </span>
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
            <span className="pixel">
              <TextTyper text="to create your own unique Coffee" speed={100} />
            </span>
          </div>
        )}
      </div>
      <section className={styles.about}>
        <div className={`container ${styles.container}`}>
          <h3>Define Your Coffee</h3>
          <div>
            Code.C는 커피를 취향대로 설계하고, 당신만의 방식으로 조합해보는
            개인의 커피 실험실입니다.
            <br />
            지금, 나만의 커피 레시피를 실험해보세요.
          </div>
        </div>
      </section>
      <div className={styles.custom}>
        <div className={`container ${styles.container}`}>
          <div className="img">
            <img src={custom} alt="나만의 커피 레시피 만들기" />
          </div>
          <Button
            className={styles.button}
            to="/home"
            size="large"
            iconName="right"
          >
            실험 시작하기
          </Button>
        </div>
      </div>
      <section className={styles.commend}>
        <div className={`container ${styles.container}`}>
          <div className="text_area">
            <h3>이번주 추천 조합</h3>
            <p className="text">원두 - Figmatic</p>
            <ul>
              <li>ETHIOPIA Aricha Kurume Black Honey 40%</li>
              <li>ERHIOPIA Yurgacheffee 'Moonkyu Selection2' Natural 30%</li>
              <li>COLOMBIA Villa Sol Geisha Natural 30%</li>
            </ul>
            <p className="text">추천 이유</p>
            <ul>
              <li>라이트 로스팅의 섬세한 향미와 산미를 가장 잘 살려줌</li>
              <li>레이어드된 무화과, 라벤더, 망고의 향이 분명하게 드러남</li>
            </ul>
            <p className="text">추출 Tip</p>
            <ul>
              <li>물온도 : 92–94°C</li>
              <li>총 추출 시간 : 2분 30초 ~ 3분</li>
              <li>블루밍(뜸 들이기) : 30초</li>
              <li>포어링(물 붓기) : 뜸 들인 후 3~4회에 나눠 부어 추출</li>
            </ul>
          </div>
          <ProductArea />
          {/* <div className={styles.product_area}>
            <div className={styles.been}>
              <img src={been} alt="Figmatic 원두 백" />
              <RadiusButton to="/store/been" iconName="plus" />
            </div>
            <div className={styles.dripPot}>
              <img src={dripPot} alt="드립팟" />
              <RadiusButton to="/store/tool" iconName="plus" />
            </div>
            <div className={styles.dripper}>
              <img src={dripper} alt="드립퍼" />
              <RadiusButton to="/store/tool" iconName="plus" />
            </div>

            <div className={styles.glassServer}>
              <img src={glassServer} alt="글라스 서버" />
              <RadiusButton to="/store/tool" iconName="plus" />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
