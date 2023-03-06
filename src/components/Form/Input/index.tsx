import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { iInput } from '../../../contexts/types/types';

const Input = ({ label, textErr }: iInput) => (
  <fieldset>
    <StyledTextField label={label} type='text' />
    <StyledParagraph fontColor='red'>{textErr}</StyledParagraph>
  </fieldset>
);

export default Input;
