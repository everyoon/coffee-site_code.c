import styles from './Home.module.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import rightCode from '@assets/images/right_code.png';
import leftCode from '@assets/images/left_code.png';
import custom from '@assets/images/main_custom.gif';
import Button from '../../components/common/Button';
import ProductArea from '../../components/ProductArea';
import TextTyper from '../../components/common/TextTyper';
import userCode1 from '@assets/images/user_code1.jpg';
import userCode2 from '@assets/images/user_code2.jpg';
import userCode3 from '@assets/images/user_code3.jpg';
import BrandGallery from '../../components/BrandGallary';

export default function Home() {
  const [leftDone, setLeftDone] = useState(false);
  const [rightDone, setRightDone] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [aboutTitleDone, setAboutTitleDone] = useState(false);
  const [aboutTextDone, setAboutTextDone] = useState(false);
  const aboutRef = useRef(null);

  const handleLeftDone = useCallback(() => setLeftDone(true), []);
  const handleRightDone = useCallback(() => setRightDone(true), []);

  useEffect(() => {
    if (leftDone && rightDone) {
      const timer = setTimeout(() => {
        setShowTitle(true);
        setTimeout(() => setTitleAnimated(true), 50);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [leftDone, rightDone]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const current = aboutRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <>
      <div className={styles.mainVisual}>
        <div className={`pixel ${styles.leftText}`}>
          <TextTyper
            text="The process of making coffee is like writing code. Every variable—from the beans and brewing method to the temperature and time—exists as a precise formula. We research and reinterpret that formula."
            speed={15}
            onComplete={handleLeftDone}
          />
        </div>

        <div className={`pixel ${styles.rightText}`}>
          <TextTyper
            text="Code.C is more than just a place to drink coffee. It's a laboratory where we understand, define, and recreate coffee in our own unique way."
            speed={15}
            onComplete={handleRightDone}
          />
        </div>

        {showTitle && (
          <>
            <div className={`${styles.leftCode} ${titleAnimated ? styles.codeVisible : styles.codeHidden}`}>
              <img src={leftCode} alt="코딩스티커 이미지" />
            </div>
            <div className={`${styles.rightCode} ${titleAnimated ? styles.codeVisible : styles.codeHidden}`}>
              <img src={rightCode} alt="코딩스티커 이미지" />
            </div>
            <div className={`${styles.titleWrapper} ${titleAnimated ? styles.titleVisible : styles.titleHidden}`}>
              <span className="pixel">
                <TextTyper text="Cafe" speed={80} />
              </span>
              <h1>
                <svg width="550" height="125" viewBox="0 0 550 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 12.5H12.5V0H75V12.5H87.5V25H62.5V12.5H25V112.5H62.5V100H87.5V112.5H75V125H12.5V112.5H0V12.5ZM100 50H112.5V37.5H175V50H187.5V112.5H175V125H112.5V112.5H100V50ZM125 50V112.5H162.5V50H125ZM200 50H212.5V37.5H262.5V0H287.5V125H212.5V112.5H200V50ZM225 50V112.5H262.5V50H225ZM300 50H312.5V37.5H375V50H387.5V75H325V112.5H362.5V100H387.5V112.5H375V125H312.5V112.5H300V50ZM325 50V62.5H362.5V50H325ZM412.5 100H437.5V125H412.5V100ZM462.5 12.5H475V0H537.5V12.5H550V25H525V12.5H487.5V112.5H525V100H550V112.5H537.5V125H475V112.5H462.5V12.5Z"
                    fill="#F9F9F9"
                  />
                </svg>
              </h1>
              <span className="pixel">
                <TextTyper text="to create your own unique Coffee" speed={80} />
              </span>
            </div>
          </>
        )}
      </div>
      <section className={styles.about} ref={aboutRef}>
        <div className={`container ${styles.container}`}>
          <h3>
            {aboutVisible && (
              <TextTyper text="Define Your Coffee" speed={90} onComplete={() => setAboutTitleDone(true)} />
            )}
          </h3>
          <div>
            {aboutVisible && aboutTitleDone && (
              <TextTyper
                text="Code.C는 커피를 취향대로 설계하고, 당신만의 방식으로 조합해보는 개인의 커피 실험실입니다."
                speed={60}
                onComplete={() => setAboutTextDone(true)}
              />
            )}
            {aboutTextDone && (
              <>
                <br />
                <TextTyper text="지금, 나만의 커피 레시피를 실험해보세요." speed={60} />
              </>
            )}
          </div>
        </div>
      </section>
      <div className={styles.custom}>
        <div className={`container ${styles.container}`}>
          <div className="img">
            <img src={custom} alt="나만의 커피 레시피 만들기" />
          </div>
          <Button className={styles.button} to="/custom-menu" size="large" color="default" iconName="right">
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
        </div>
      </section>
      <section className={styles.other}>
        <div className={`container ${styles.container}`}>
          <div className={styles.title}>
            <h3>다른 연구자의 조합 공식</h3>
            <Button className={styles.button} to="/custom-menu" color="default" size="small" iconName="right">
              More
            </Button>
          </div>
          <ul className={styles.otherList}>
            <li>
              <img src={userCode1} alt="No.9  Red Protocol 조합 레시피" />
              <div className={styles.hoverBtns}>
                <Button className={styles.button} to="/" size="large" color="primary" iconName="downBracket">
                  다운로드
                </Button>
                <Button className={styles.button} to="/" size="large" color="primary" iconName="share">
                  공유하기
                </Button>
              </div>
            </li>
            <li>
              <img src={userCode2} alt="Citrine Code 조합 레시피" />
              <div className={styles.hoverBtns}>
                <Button className={styles.button} to="/" size="large" color="primary" iconName="downBracket">
                  다운로드
                </Button>
                <Button className={styles.button} to="/" size="large" color="primary" iconName="share">
                  공유하기
                </Button>
              </div>
            </li>
            <li>
              <img src={userCode3} alt="Zero Acid 조합 레시피" />
              <div className={styles.hoverBtns}>
                <Button className={styles.button} to="/" size="large" color="primary" iconName="downBracket">
                  다운로드
                </Button>
                <Button className={styles.button} to="/" size="large" color="primary" iconName="share">
                  공유하기
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.program}>
        <div className={`container ${styles.container}`}>
          <h3>Code Brew</h3>
          <p>
            Code Brew 클래스는 월드 바리스타 챔피언십 우승자인 바리스타와 함께 나만의 완벽한 커피를 찾아가는 클래스
            입니다.
            <br />
            원두 블렌딩의 비밀부터 다양한 추출 방식, 그리고 나에게 어울리는 원두 선택까지, 모든 과정을 직접 실습하며
            <br />
            세상에 단 하나뿐인 시그니처 레시피를 완성해 보세요!
          </p>
          <Button className={styles.button} to="/program" color="default" size="large" iconName="right">
            클래스 예약하기
          </Button>
        </div>
      </section>
      <section className={styles.kit}>
        <div className={`container ${styles.container}`}>
          <div className={styles.title}>
            <h3>Code.C Lab Kit</h3>
            <Button className={styles.button} to="/custom-menu" color="default" size="small" iconName="right">
              More
            </Button>
          </div>
          <BrandGallery />
        </div>
      </section>
    </>
  );
}
