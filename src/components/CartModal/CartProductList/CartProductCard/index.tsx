import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';

interface ICartProductCardProps {
  img: string;
  name: string;
  key: string;
}

const CartProductCard = ({ img, name, key }: ICartProductCardProps) => (
  <StyledCartProductCard key={key}>
    <div className='imageBox'>
      <img src={img} alt={name} />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
        {name}
      </StyledTitle>
      <button type='button' aria-label='Remover'>
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
);

export default CartProductCard;
