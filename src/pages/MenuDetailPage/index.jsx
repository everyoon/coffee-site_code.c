import { useParams, useNavigate } from "react-router-dom";
import MenuDetail from "../../components/MenuDetail/MenuDetail";
import { menus } from "../../components/MenuList/MenusData";

const MenuDetailPage = () => {
  const { menuId } = useParams();
  const navigate = useNavigate();

  const menuItem = Object.values(menus)
    .flat()
    .find((item) => item.id === parseInt(menuId));

  if (!menuItem) {
    return <p>Menu not found</p>;
  }

  return <MenuDetail menu={menuItem} onClose={() => navigate(-1)} />;
};

export default MenuDetailPage;
