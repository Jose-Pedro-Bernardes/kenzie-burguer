import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import LoginPage from './pages/LoginPage';
import { Protected } from './pages/Protected';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/shop' element={<Protected />}>
          <Route
            index
            element={
              <CartProvider>
                <ShopPage />
              </CartProvider>
            }
          />
        </Route>
      </Routes>
    </UserProvider>
  );
};

export default Router;
