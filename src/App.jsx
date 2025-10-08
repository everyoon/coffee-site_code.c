import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Home from './pages/Home';
import ComingSoon from './pages/CommingSoon';
import MyPage from './pages/MyPage';
// import Menu from './pages/Menu';
import CustomMenu from './pages/CustomMenu';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/custom-menu" element={<CustomMenu />} />
          <Route path="/cart" element={<ComingSoon />} />
          <Route path="/location" element={<ComingSoon />} />
          <Route path="/customer-center" element={<ComingSoon />} />
          <Route path="/store" element={<ComingSoon />} />
          <Route path="/program" element={<ComingSoon />} />
          <Route path="/event&news" element={<ComingSoon />} />
          <Route path="/about-us" element={<ComingSoon />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
