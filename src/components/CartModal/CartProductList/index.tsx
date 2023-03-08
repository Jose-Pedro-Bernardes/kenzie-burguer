import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useCartContext } from '../../../hooks/useCartContext';

const CartProductList = () => {
  const { cart } = useCartContext();
  return (
    <StyledCartProductList>
      <ul>
        {cart &&
          cart.map((item) => {
            return (
              <CartProductCard
                key={item.id.toString()}
                img={item.img}
                name={item.name}
              />
            );
          })}
      </ul>
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ 14,00</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
