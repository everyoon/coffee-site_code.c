import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import ComingSoon from "./pages/CommingSoon";
import MyPage from "./pages/MyPage";
import CustomMenu from "./pages/CustomMenu";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import MenuDetailPage from "./pages/MenuDetailPage";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/mypage"
          element={
            <MainLayout>
              <MyPage />
            </MainLayout>
          }
        />
        <Route
          path="/custom-menu"
          element={
            <MainLayout>
              <CustomMenu />
            </MainLayout>
          }
        />
        <Route
          path="/menu"
          element={
            <MainLayout>
              <Menu />
            </MainLayout>
          }
        />
        <Route
          path="/menu/:menuId"
          element={
            <MainLayout>
              <MenuDetailPage />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/location"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/customer-center"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/store"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/program"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/event&news"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
