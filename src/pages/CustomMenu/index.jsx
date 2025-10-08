import React, { useState } from 'react';
import styles from './CustomMenu.module.css';
import Button from '../../components/common/Button';
import card1 from '@assets/images/been_card01.jpg';
import card2 from '@assets/images/been_card02.jpg';
import card3 from '@assets/images/been_card03.jpg';
import card4 from '@assets/images/been_card04.jpg';
import card5 from '@assets/images/been_card05.jpg';
import card6 from '@assets/images/been_card06.jpg';
import card7 from '@assets/images/been_card07.jpg';
import card8 from '@assets/images/been_card08.jpg';
import BeakerFill from './BeakerFill';
import mokaPot from '@assets/images/moka_pot.png';
import esMachine from '@assets/images/espresso_machine.png';
import aeropress from '@assets/images/aeropress.png';
import french from '@assets/images/french_press.png';
import handDrip from '@assets/images/hand_drip.png';
import chemex from '@assets/images/chemex.png';
import flask from '@assets/images/cup_flask.png';
import takeout from '@assets/images/cup_takeout.png';
import tumbler from '@assets/images/cup_tumbler.png';
import flaskResult from '@assets/images/result_flask.png';
import takeoutResult from '@assets/images/result_takeout.png';
import tumblerResult from '@assets/images/result_tumbler.png';

export default function CustomMenu() {
  const [step, setStep] = useState('intro');
  const [coffeeName, setCoffeeName] = useState('');
  const [selectedBeans, setSelectedBeans] = useState({});
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);

  const beans = [
    {
      id: 1,
      name: 'Kenya AA',
      note: 'Black currant, maple syrup, almond, lilac',
      image: card1,
      body: 2,
      acidity: 5,
      sweetness: 4,
      fermentation: 5,
      aftertaste: 4,
    },
    {
      id: 2,
      name: 'Ethiopia Yirgacheffe Natural',
      note: 'Blueberry, maple syrup, almond, lilac',
      image: card2,
      body: 2,
      acidity: 4,
      sweetness: 5,
      fermentation: 4,
      aftertaste: 4,
    },
    {
      id: 3,
      name: 'Colombian Supremo',
      note: 'Chocolate, caramel, floral',
      image: card3,
      body: 3,
      acidity: 3,
      sweetness: 5,
      fermentation: 3,
      aftertaste: 4,
    },
    {
      id: 4,
      name: 'Colombian Medellin',
      note: 'Fruit, chocolate',
      image: card4,
      body: 4,
      acidity: 4,
      sweetness: 3,
      fermentation: 3,
      aftertaste: 3,
    },
    {
      id: 5,
      name: 'Colombia Antioquia',
      note: 'Orange, honey, traditional nutty',
      image: card5,
      body: 4,
      acidity: 3,
      sweetness: 3,
      fermentation: 3,
      aftertaste: 3,
    },
    {
      id: 6,
      name: 'Kenya',
      note: 'Berry, citrus, floral, winey',
      image: card6,
      body: 3,
      acidity: 5,
      sweetness: 4,
      fermentation: 4,
      aftertaste: 4,
    },
    {
      id: 7,
      name: 'Ethiopia Yirgacheffe',
      note: 'Jasmine, lemon, floral',
      image: card7,
      body: 2,
      acidity: 5,
      sweetness: 4,
      fermentation: 4,
      aftertaste: 3,
    },
    {
      id: 8,
      name: 'Panama Geisha',
      note: 'Jasmine, bergamot, peach, passionfruit',
      image: card8,
      body: 2,
      acidity: 4,
      sweetness: 5,
      fermentation: 4,
      aftertaste: 4,
    },
  ];

  const brewMethods = [
    { id: 'moka pot', name: '모카포트', image: mokaPot },
    { id: 'espresso machine', name: '에스프레소 머신', image: esMachine },
    { id: 'aeropress', name: '에어로프레스', image: aeropress },
    { id: 'french press', name: '프렌치프레스', image: french },
    { id: 'hand drip', name: '핸드드립', image: handDrip },
    { id: 'chemex', name: '케멕스', image: chemex },
  ];

  const cupOptions = [
    { id: 'store', name: '매장 컵', image: flask },
    { id: 'takeout', name: '테이크 아웃', image: takeout },
    { id: 'tumbler', name: '텀블러', image: tumbler },
  ];

  const cupImagesMap = {
    store: flaskResult,
    takeout: takeoutResult,
    tumbler: tumblerResult,
  };

  const [temperature, setTemperature] = useState(null);
  const [size, setSize] = useState(null);
  const [selectedCup, setSelectedCup] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const getTotalPercentage = () => Object.values(selectedBeans).reduce((sum, val) => sum + val, 0);
  const getSelectedBeansCount = () => Object.values(selectedBeans).filter((val) => val > 0).length;
  const canProceedFromStep1 = () => {
    const total = getTotalPercentage();
    const count = getSelectedBeansCount();
    return total === 100 && count > 0 && count <= 4;
  };

  const handleSliderChange = (beanId, value) => {
    const totalOthers = Object.entries(selectedBeans)
      .filter(([id]) => parseInt(id) !== beanId)
      .reduce((sum, [, val]) => sum + val, 0);

    const maxValue = 100 - totalOthers;
    const newValue = Math.min(value, maxValue);

    setSelectedBeans((prev) => ({
      ...prev,
      [beanId]: newValue,
    }));
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  //getRadarPoints
  const getRadarPoints = (selectedBeansList) => {
    if (!selectedBeansList.length) return '';

    const flavorData = {
      Acidity: 0,
      Body: 0,
      Fermentation: 0,
      Sweetness: 0,
      Aftertaste: 0,
    };

    selectedBeansList.forEach(({ bean, percentage }) => {
      flavorData.Acidity += (bean.acidity / 5) * (percentage / 100);
      flavorData.Body += (bean.body / 5) * (percentage / 100);
      flavorData.Fermentation += (bean.body / 5) * (percentage / 100);
      flavorData.Sweetness += (bean.sweetness / 5) * (percentage / 100);
      flavorData.Aftertaste += (bean.body / 5) * (percentage / 100);
    });

    const points = Object.values(flavorData).map((val, i) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const radius = val * 100;
      const x = 150 + radius * Math.cos(angle);
      const y = 150 + radius * Math.sin(angle);
      return `${x},${y}`;
    });

    return points.join(' ');
  };
  //인트로
  if (step === 'intro') {
    return (
      <div className={`${styles.container} ${styles.bgGif}`}>
        <Button
          className={styles.startBtn}
          onClick={() => {
            setStep('step1');
            setIsNameModalOpen(true);
            scrollToTop();
          }}
          size="small"
          color="default"
        >
          실험 시작하기
        </Button>
      </div>
    );
  }

  // step1 원두 선택 + 이름 모달
  if (step === 'step1') {
    return (
      <div className={styles.innerContainer}>
        <div className={styles.inner}>
          <div className={styles.textInenr}>
            <h2 className={styles.title}>step 1 원두 선택</h2>
            <span>25%</span>
          </div>
          {/* step1 progress bar */}
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '25%' }} />
          </div>

          {/* 커피 이름 모달 */}
          {isNameModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <h2>커피 이름 설정</h2>
                <input
                  type="text"
                  value={coffeeName}
                  onChange={(e) => setCoffeeName(e.target.value)}
                  placeholder="ex: Zero Acid"
                  className={styles.input}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && coffeeName) {
                      setIsNameModalOpen(false);
                    }
                  }}
                />

                <div className={styles.modalButtons}>
                  <button
                    disabled={!coffeeName}
                    onClick={() => setIsNameModalOpen(false)}
                    className={`${styles.button} ${coffeeName ? styles.buttonPrimary : styles.buttonDisabled}`}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 원두 카드 */}
          <div className={`container ${styles.container}`}>
            <div className={styles.beakerWrapper}>
              <BeakerFill fillPercent={getTotalPercentage()} />
            </div>
            <p className={styles.text}>※ 최대 4개까지 선택 가능</p>
            <div className={styles.cardGrid}>
              {beans.map((bean) => {
                const selectedCount = getSelectedBeansCount();
                const totalPercent = getTotalPercentage();
                const isDisabled = !selectedBeans[bean.id] && (totalPercent >= 100 || selectedCount >= 4);

                return (
                  <div key={bean.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <img src={bean.image} alt={bean.name} className={styles.beanImage} />
                    </div>
                    <div className={styles.cardBody}>
                      <p className={styles.beenName}>{bean.name}</p>
                      <div className={styles.sliderWrap}>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={selectedBeans[bean.id] || 0}
                          onChange={(e) => handleSliderChange(bean.id, parseInt(e.target.value))}
                          disabled={isDisabled}
                        />
                        <div className={styles.percent}>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={selectedBeans[bean.id] || 0}
                            onChange={(e) => handleSliderChange(bean.id, parseInt(e.target.value) || 0)}
                            disabled={isDisabled}
                          />
                          <span>%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* 버튼 그룹 */}
            <div className={styles.buttonGroup}>
              <button onClick={() => setIsNameModalOpen(true)} className={styles.button}>
                이전으로
              </button>
              <button
                onClick={() => {
                  if (canProceedFromStep1()) {
                    setStep('step2');
                    scrollToTop();
                  }
                }}
                disabled={!canProceedFromStep1()}
                className={`${styles.button} ${canProceedFromStep1() ? styles.buttonPrimary : styles.buttonDisabled}`}
              >
                다음으로
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // step2 머신 선택
  if (step === 'step2') {
    return (
      <div className={styles.innerContainer}>
        <div className={styles.inner}>
          <div className={styles.textInenr}>
            <h2 className={styles.title}>step 2 추출 방식 선택</h2>
            <span>50%</span>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '50%' }} />
          </div>

          <div className={styles.brewGrid}>
            {brewMethods.map((method) => (
              <div
                key={method.id}
                className={`${styles.brewCard} ${selectedMethod === method.id ? styles.selected : ''}`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <img src={method.image} alt={method.name} className={styles.brewImage} />
                <p className={styles.brewName}>{method.name}</p>
              </div>
            ))}
          </div>

          <div className={styles.buttonGroup}>
            <button
              onClick={() => {
                setStep('step1');
                scrollToTop();
              }}
              className={styles.button}
            >
              이전으로
            </button>
            <button
              onClick={() => {
                if (selectedMethod) {
                  setStep('step3');
                  scrollToTop();
                }
              }}
              disabled={!selectedMethod}
              className={`${styles.button} ${selectedMethod ? styles.buttonPrimary : styles.buttonDisabled}`}
            >
              다음으로
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 옵션 선택
  if (step === 'step3') {
    return (
      <div className={styles.innerContainer}>
        <div className={styles.inner}>
          <div className={styles.textInenr}>
            <h2 className={styles.title}>step 3 옵션 선택</h2>
            <span>75%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '75%' }} />
          </div>
          <div className={`container ${styles.container}`}>
            {/* 온도 선택 */}
            <div className={styles.optionGroup}>
              <p className={styles.optionLabel}>온도 선택</p>
              <div className={styles.ButtonSelected}>
                {['Hot', 'Iced'].map((temp) => (
                  <button
                    key={temp}
                    className={`${styles.optionButton} ${temperature === temp ? styles.selected : ''}`}
                    onClick={() => setTemperature(temp)}
                  >
                    {temp}
                  </button>
                ))}
              </div>
            </div>
            {/* 사이즈 선택 */}
            <div className={styles.optionGroup}>
              <p className={styles.optionLabel}>사이즈 선택</p>
              <div className={styles.ButtonSelected}>
                {['Tall', 'Grande', 'Venti'].map((s) => (
                  <button
                    key={s}
                    className={`${styles.optionButton} ${size === s ? styles.selected : ''}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            {/* 컵 선택 */}
            <div className={styles.optionGroup}>
              <p className={styles.optionLabel}>컵 선택</p>
              <div className={styles.cupGrid}>
                {cupOptions.map((cup) => (
                  <div
                    key={cup.id}
                    className={`${styles.cupCard} ${selectedCup === cup.id ? styles.selected : ''}`}
                    onClick={() => setSelectedCup(cup.id)}
                  >
                    <img src={cup.image} alt={cup.name} className={styles.cupImage} />
                    <p className={styles.cupName}>{cup.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button
                onClick={() => {
                  setStep('step2');
                  scrollToTop();
                }}
                className={styles.button}
              >
                이전으로
              </button>
              <button
                onClick={() => {
                  if (temperature && size && selectedCup) {
                    setStep('result');
                    scrollToTop();
                  }
                }}
                disabled={!(temperature && size && selectedCup)}
                className={`${styles.button} ${
                  temperature && size && selectedCup ? styles.buttonPrimary : styles.buttonDisabled
                }`}
              >
                결과보기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 결과 보기
  if (step === 'result') {
    const selectedBeansList = Object.entries(selectedBeans)
      .filter(([, percentage]) => percentage > 0)
      .map(([id, percentage]) => ({
        bean: beans.find((b) => b.id === parseInt(id)),
        percentage,
      }));
    const selectedCupObj = cupOptions.find((c) => c.id === selectedCup);
    return (
      <div className={`container ${styles.container}`}>
        <div className={styles.resultInner}>
          <h3 className={styles.title}>나만의 커피 Code</h3>
          <div className={styles.resultWrapper}>
            <div className={styles.top}>
              <h3 className={styles.coffeeName}>{coffeeName}</h3>
              <p className={styles.method}>{brewMethods.find((m) => m.id === selectedMethod)?.id}</p>
              <p className={styles.temperature}>{temperature}</p>
              <p className={styles.size}>{size}</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.cupPreview}>
                {selectedCupObj && (
                  <img
                    src={cupImagesMap[selectedCupObj.id] || selectedCupObj.image}
                    alt={selectedCupObj.name}
                    className={styles.cupImageLarge}
                  />
                )}
              </div>
              <div className={styles.resultInfo}>
                <div className={styles.blend}>
                  <h4>Blend</h4>
                  <div className={styles.blendList}>
                    {selectedBeansList.map(({ bean, percentage }) => (
                      <p key={bean.id}>
                        {bean.name} {percentage}%
                      </p>
                    ))}
                  </div>
                </div>
                <div className={styles.radarChart}>
                  <h4>Coffee Flavor Analysis</h4>
                  <svg viewBox="0 0 300 300" className={styles.radarSvg}>
                    {[1, 2, 3, 4, 5].map((i) => {
                      const points = [0, 1, 2, 3, 4].map((j) => {
                        const angle = (Math.PI * 2 * j) / 5 - Math.PI / 2;
                        const radius = (i / 5) * 100;
                        return {
                          x: 150 + radius * Math.cos(angle),
                          y: 150 + radius * Math.sin(angle),
                        };
                      });
                      return (
                        <polygon
                          key={i}
                          points={points.map((p) => `${p.x},${p.y}`).join(' ')}
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {['Acidity', 'Body', 'Fermentation', 'Sweetness', 'Aftertaste'].map((label, i) => {
                      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                      const x = 150 + 100 * Math.cos(angle);
                      const y = 150 + 100 * Math.sin(angle);
                      const textX = 150 + 120 * Math.cos(angle);
                      const textY = 150 + 120 * Math.sin(angle);
                      return (
                        <g key={label}>
                          <line x1="150" y1="150" x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1" />
                          <text
                            x={textX}
                            y={textY}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="12"
                            fill="#202020"
                          >
                            {label}
                          </text>
                        </g>
                      );
                    })}

                    <polygon
                      points={getRadarPoints(selectedBeansList)}
                      fill="#006699"
                      fillOpacity="0.4"
                      stroke="#006699"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              onClick={() => {
                setStep('intro');
                setCoffeeName('');
                setSelectedBeans({});
                setTemperature(null);
                setSize(null);
                setSelectedCup(null);
                setSelectedMethod(null);
                setIsNameModalOpen(false);
                scrollToTop();
              }}
              size="large"
              color="default"
              iconName="undo"
            >
              다시하기
            </Button>
            <Button
              onClick={() => alert('다운로드 기능 구현 예정')}
              size="large"
              color="default"
              iconName="downBracket"
            >
              다운로드
            </Button>
            <Button
              onClick={() => alert('레시피 등록 기능 구현 예정')}
              size="large"
              color="default"
              iconName="thumbtack"
            >
              레시피 등록
            </Button>
            <Button onClick={() => alert('공유하기 기능 구현 예정')} size="large" color="default" iconName="share">
              공유하기
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
