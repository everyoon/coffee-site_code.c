import styles from "../MyPage.module.css";
import { Icons } from "../../../components/common/Icons";

export default function CoffeeAnalysis() {
  const beans = [
    "AA Kangocho Kenya",
    "Kenya Red Mountain Washed",
    "ASTERUM Single Origin",
  ];
  const methods = [
    "에어로프레스 (AeroPress)",
    "모카포트 (Moka Pot)",
    "클레버 드리퍼 (Clever Dripper)",
  ];

  return (
    <div className={styles.profileRight}>
      <h4>User 님의 커피 코드를 분석한 내용입니다.</h4>
      <div className="contents">
        <div className={styles.textArea}>
          <p>
            <Icons.check />
            User 님은 최근 <span>산미 있는 원두</span>를 선호하시는 군요.
          </p>
          <ul>
            <li className={styles.title}>추천하는 원두</li>
            {beans.map((bean, i) => (
              <li key={i}>{bean}</li>
            ))}
          </ul>
        </div>
        <div className={styles.textArea}>
          <p>
            <Icons.check />
            User 님은 최근 <span>포터필터 추출</span> 방식을 즐기시는 군요.
          </p>
          <ul>
            <li className={styles.title}>추천하는 추출 방식</li>
            {methods.map((method, i) => (
              <li key={i}>{method}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
