import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">.C</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/menu">메뉴</Link>
          </li>
          <li>
            <Link to="/custom-menu">나만의 레시피</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
