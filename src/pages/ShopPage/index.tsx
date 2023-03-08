import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useContext, useEffect } from 'react';
import api from '../../contexts/axios/axiosInstance';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const ShopPage = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <StyledShopPage>
        <CartModal />
        <Header />
        <main>
          <StyledContainer containerWidth={1300}>
            <ProductList />
          </StyledContainer>
        </main>
      </StyledShopPage>
      <ToastContainer
        position='top-center'
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

export default ShopPage;
