import styles from "../MyPage.module.css";
import userProfile from "@assets/images/user_profile.jpg";
import stamp from "@assets/images/stamp.png";

export default function StampBoard() {
  return (
    <div className={styles.profileLeft}>
      <div className={styles.userProfile}>
        <img src={userProfile} alt="유저 프로필" />
      </div>
      <div className={styles.stamp}>
        <p>나의 스탬프</p>
        <ul>
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <img
                src={stamp}
                alt={`스탬프 ${index + 1}`}
                className={
                  index < 3 ? styles.stampActive : styles.stampInactive
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
