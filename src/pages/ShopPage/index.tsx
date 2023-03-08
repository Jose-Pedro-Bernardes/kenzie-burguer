import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useContext, useEffect } from 'react';
import api from '../../contexts/axios/axiosInstance';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ShopPage = () => {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    const token = localStorage.getItem('@KenzieBurguer:token');
    if (token) {
      const catchProducts = async () => {
        try {
          const res = await api.get('products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCart(res.data);
        } catch (error) {
          navigate('/');
        }
      };
    }
  });
  return (
    <StyledShopPage>
      <CartModal />
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
