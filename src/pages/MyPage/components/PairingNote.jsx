import styles from "../MyPage.module.css";
import { Icons } from "../../../components/common/Icons";
import { Link } from "react-router-dom";

export default function PairingNote() {
  const notes = [
    {
      title: "오후 충전 코드",
      items: ["과테말라 아이스 아메리카노 2샷", "티라미수"],
    },
    {
      title: "밤샘 연구 시퀀스",
      items: [
        "에티오피아 예가체프 첼베사 디카페인 아이스",
        "바스크 치즈케이크",
      ],
    },
  ];

  return (
    <div className={styles.inner}>
      <div className={styles.titleInner}>
        <h4>개인 페어링 연구 노트</h4>
        <Link to="/myNote">
          <Icons.right />
        </Link>
      </div>

      {notes.map((note, i) => (
        <div key={i} className={styles.noteContent}>
          <div className={styles.noteName}>
            <p>{note.title}</p>
            <Link to="/myNote_edit">
              <Icons.edit />
            </Link>
          </div>
          <ul className={styles.menus}>
            <li>
              <Icons.coffee />
              <p>{note.items[0]}</p>
            </li>
            <li>
              <Icons.cookie />
              <p>{note.items[1]}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
