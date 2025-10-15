import styles from './CommingSoon.module.css';
import Img from '@assets/images/Commingsoon_img.png';
import Button from '../../components/common/Button';

export default function ComingSoon() {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <div className={styles.title}>
          해당 페이지는 현재 준비 중입니다.
          <br />
          조금만 기다려주시면 더 나은 모습으로 찾아뵙겠습니다.
        </div>
        <div className={styles.img}>
          <img src={Img} alt="공사중인 이미지" />
        </div>
        <div className={styles.buttonInner}>
          <Button className={styles.button} to="/" size="large" color="primary">
            메인페이지로 돌아가기
          </Button>
        </div>
      </div>
    </>
  );
}
