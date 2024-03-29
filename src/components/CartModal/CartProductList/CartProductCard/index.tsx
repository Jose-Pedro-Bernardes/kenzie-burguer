import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';

interface ICartProductCardProps {
  img: string;
  name: string;

  id: number;
}

const CartProductCard = ({ img, name, id }: ICartProductCardProps) => {
  const { removeProduct } = useContext(CartContext);
  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button
          onClick={() => removeProduct(id)}
          type='button'
          aria-label='Remover'
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
