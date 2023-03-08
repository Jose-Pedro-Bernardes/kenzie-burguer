import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';

interface IProductCardProps {
  key: string;
  name: string;
  category: string;
  price: string;
  img: string;
}

const ProductCard = ({
  img,
  name,
  category,
  price,
  key,
}: IProductCardProps) => (
  <StyledProductCard key={key}>
    <div className='imageBox'>
      <img src={img} alt={name} />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {name}
      </StyledTitle>
      <StyledParagraph className='category'>{category}</StyledParagraph>
      <StyledParagraph className='price'>R$ {price}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
);

export default ProductCard;
