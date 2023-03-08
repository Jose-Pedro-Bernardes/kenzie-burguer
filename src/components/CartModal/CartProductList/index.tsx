import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';

const CartProductList = () => {
  const { cart, removeAllCart, totalValue } = useContext(CartContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setPrice(totalValue());
    } else {
      setPrice(0);
    }
  }, [cart]);

  return (
    <StyledCartProductList>
      <ul>
        {cart &&
          cart.map((item) => {
            return (
              <CartProductCard id={item.id} img={item.img} name={item.name} />
            );
          })}
      </ul>
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {price.toFixed(2).toString().replace('.', ',')}
        </StyledParagraph>
      </div>
      <StyledButton
        onClick={removeAllCart}
        $buttonSize='default'
        $buttonStyle='gray'
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
