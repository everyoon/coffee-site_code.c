import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MyPage.module.css";

import userProfile from "@assets/images/user_profile.jpg";
import stamp from "@assets/images/stamp.png";
import { Icons } from "../../components/common/Icons";

import figmatic from "@assets/images/mypage_coffee1.png";
import peachZest from "@assets/images/mypage_coffee2.png";
import citrusBloom from "@assets/images/mypage_coffee3.png";
import pouch from "@assets/images/mypage_kit1.png";
import dripper from "@assets/images/mypage_kit2.png";
import dripPot from "@assets/images/mypage_kit3.png";
import cup from "@assets/images/mypage_kit4.png";
import glassServer from "@assets/images/mypage_kit5.png";

export default function MyPage() {
  const initialWishItems = [
    { id: 1, img: figmatic, alt: "Figmatic 원두백" },
    { id: 2, img: pouch, alt: "Code.C 파우치" },
    { id: 3, img: dripPot, alt: "drip Pot" },
    { id: 4, img: dripper, alt: "dripper" },
    { id: 5, img: peachZest, alt: "Peach Zest 원두백" },
    { id: 6, img: citrusBloom, alt: "Citrus Bloom 원두백" },
  ];

  const [wishItems, setWishItems] = useState(initialWishItems);

  const handleRemove = (idToRemove, e) => {
    e.preventDefault(); // Link 이동 방지
    setWishItems((prev) => prev.filter((item) => item.id !== idToRemove));
  };

  return (
    <div className={styles.wrap}>
      <div className={`${styles.container} container`}>
        {/* 왼쪽 메뉴 */}
        <div className={styles.left}>
          <div className={styles.nav}>
            <h3>My Page</h3>
            <div className={styles.menu}>
              <p>나의 정보</p>
              <ul>
                <li>
                  <a href="javascript:void(0)">나의 커피 코드</a>
                </li>
                <li>
                  <a href="javascript:void(0)">개링 페어링 연구 노트</a>
                </li>
                <li>
                  <a href="javascript:void(0)">1:1 문의</a>
                </li>
                <li>
                  <a href="javascript:void(0)">위시리스트</a>
                </li>
                <li>
                  <a href="javascript:void(0)">배송지 관리</a>
                </li>
              </ul>

              <p>맴버쉽</p>
              <ul>
                <li>
                  <a href="javascript:void(0)">스탬프</a>
                </li>
                <li>
                  <a href="javascript:void(0)">쿠폰</a>
                </li>
              </ul>

              <p>주문 정보</p>
              <ul>
                <li>
                  <a href="javascript:void(0)">주문/배송</a>
                </li>
                <li>
                  <a href="javascript:void(0)">취소/교환/반품</a>
                </li>
              </ul>
            </div>

            <a className={styles.quit} href="javascript:void(0)">
              회원정보 수정 및 탈퇴
            </a>
          </div>
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className={styles.right}>
          {/* 프로필 영역 */}
          <section className={styles.profile}>
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

            <div className={styles.profileRight}>
              <h4>User 님의 커피 코드를 분석한 내용입니다.</h4>
              <div className="contents">
                <div className={styles.textArea}>
                  <p>
                    <Icons.check /> User 님은 최근 <span>산미 있는 원두</span>를
                    선호하시는 군요.
                  </p>
                  <ul>
                    <li className={styles.title}>추천하는 원두</li>
                    {[
                      "AA Kangocho Kenya",
                      "Kenya Red Mountain Washed",
                      "ASTERUM Single Origin",
                    ].map((bean, i) => (
                      <li key={i}>{bean}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.textArea}>
                  <p>
                    <Icons.check /> User 님은 최근 <span>포터필터 추출</span>{" "}
                    방식을 즐기시는 군요.
                  </p>
                  <ul>
                    <li className={styles.title}>추천하는 추출 방식</li>
                    {[
                      "에어로프레스 (AeroPress)",
                      "모카포트 (Moka Pot)",
                      "클레버 드리퍼 (Clever Dripper)",
                    ].map((method, i) => (
                      <li key={i}>{method}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 위시리스트 + 페어링 노트 */}
          <section className={styles.wishNote}>
            <div className={styles.inner}>
              <div className={styles.titleInner}>
                <h4>위시리스트</h4>
                <Link to="/wish">
                  <Icons.right />
                </Link>
              </div>
              <div className={styles.contents}>
                <ul>
                  {wishItems.map((item) => (
                    <li key={item.id}>
                      <Link to="/product">
                        <span
                          onClick={(e) => handleRemove(item.id, e)}
                          style={{ cursor: "pointer" }}
                        >
                          <Icons.heart />
                        </span>
                        <div>
                          <img src={item.img} alt={item.alt} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.inner}>
              <div className={styles.titleInner}>
                <h4>개인 페어링 연구 노트</h4>
                <Link to="/myNote">
                  <Icons.right />
                </Link>
              </div>

              <div className={styles.noteContent}>
                <div className={styles.noteName}>
                  <p>오후 충전 코드</p>
                  <Link to="/myNote_edit">
                    <Icons.edit />
                  </Link>
                </div>
                <ul className={styles.menus}>
                  <li>
                    <Icons.coffee />
                    <p>과테말라 아이스 아메리카노 2샷</p>
                  </li>
                  <li>
                    <Icons.cookie />
                    <p>티라미수</p>
                  </li>
                </ul>
              </div>

              <div className={styles.noteContent}>
                <div className={styles.noteName}>
                  <p>밤샘 연구 시퀀스</p>
                  <Link to="/myNote_edit">
                    <Icons.edit />
                  </Link>
                </div>
                <ul className={styles.menus}>
                  <li>
                    <Icons.coffee />
                    <p>에티오피아 예가체프 첼베사 디카페인 아이스</p>
                  </li>
                  <li>
                    <Icons.cookie />
                    <p>바스크 치즈케이크</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 주문 처리 현황 */}
          <section className={styles.order}>
            <div className={styles.orderInner}>
              <div className={styles.titleInner}>
                <div>
                  <h4>주문처리 현황</h4>
                  <p>(3개월 기준)</p>
                </div>
                <Link to="/order">
                  <Icons.right />
                </Link>
              </div>
              <div className={styles.orderContents}>
                <div className={styles.orderLeft}>
                  <ul>
                    <li>
                      <p>0</p>
                      <p>입금 대기</p>
                    </li>
                    <li>
                      <Icons.right />
                    </li>
                    <li>
                      <p>0</p>
                      <p>상품&배송 준비중</p>
                    </li>
                    <li>
                      <Icons.right />
                    </li>
                    <li>
                      <p>2</p>
                      <p>배송중</p>
                    </li>
                    <li>
                      <Icons.right />
                    </li>
                    <li>
                      <p>4</p>
                      <p>배송완료</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.orderRight}>
                  <table>
                    <tbody>
                      <tr>
                        <th>취소 주문건</th>
                        <th>
                          <span>1</span>건
                        </th>
                      </tr>
                      <tr>
                        <th>교환 주문건</th>
                        <th>
                          <span>0</span>건
                        </th>
                      </tr>
                      <tr>
                        <th>반품 주문건</th>
                        <th>
                          <span>2</span>건
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 최근 주문 내역 */}
          <section className={styles.order}>
            <div className={styles.orderInner}>
              <div className={styles.titleInner}>
                <h4>최근 주문 내역</h4>
                <Link to="/order">
                  <Icons.right />
                </Link>
              </div>
              <div className={styles.orderContents}>
                <ul className={styles.recentList}>
                  <li>
                    <Link to="/product">
                      <img src={figmatic} alt="Figmatic 원두백" />
                      <p>Figmatic</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/product">
                      <img src={citrusBloom} alt="CitrusBloom 원두백" />
                      <p>CitrusBloom</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/product">
                      <img src={cup} alt="Code.C 보온 머그컵" />
                      <p>Code.C 보온 머그컵</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/product">
                      <img src={glassServer} alt="누아 내열 유리 서버" />
                      <p>누아 내열 유리 서버</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
