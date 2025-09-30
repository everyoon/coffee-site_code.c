import styles from "../MyPage.module.css";
import { Icons } from "../../../components/common/Icons";
import { Link } from "react-router-dom";

export default function OrderStatus() {
  return (
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
  );
}
