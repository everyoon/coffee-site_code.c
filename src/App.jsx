import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
// import MyPage from './pages/MyPage';
// import Menu from './pages/Menu';
// import CustomMenu from './pages/CustomMenu';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/mypage" element={<MyPage />} /> */}
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/custom-menu" element={<CustomMenu />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
