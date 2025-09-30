import styles from "../MyPage.module.css";

const navSections = [
  {
    title: "나의 정보",
    items: [
      "나의 커피 코드",
      "개링 페어링 연구 노트",
      "1:1 문의",
      "위시리스트",
      "배송지 관리",
    ],
  },
  {
    title: "맴버쉽",
    items: ["스탬프", "쿠폰"],
  },
  {
    title: "주문 정보",
    items: ["주문/배송", "취소/교환/반품"],
  },
];

export default function NavMenu() {
  return (
    <div className={styles.nav}>
      <h3>My Page</h3>
      <div className={styles.menu}>
        {navSections.map((section, idx) => (
          <div key={idx}>
            <p>{section.title}</p>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href="javascript:void(0)">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a className={styles.quit} href="javascript:void(0)">
        회원정보 수정 및 탈퇴
      </a>
    </div>
  );
}
