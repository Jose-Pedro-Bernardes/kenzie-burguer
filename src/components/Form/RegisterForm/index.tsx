import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { iEntrieRegister } from '../../../contexts/types/types';
import { formSchema } from './formSchema';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEntrieRegister>({
    resolver: yupResolver(formSchema),
  });

  <StyledForm>
    <fieldset>
      <StyledTextField label='Email' type='text' {...register('name')} />
      <StyledParagraph fontColor='red'>{`${
        errors.name?.message ?? ''
      }`}</StyledParagraph>
    </fieldset>
    <fieldset>
      <StyledTextField label='Email' type='text' {...register('email')} />
      <StyledParagraph fontColor='red'>{`${
        errors.email?.message ?? ''
      }`}</StyledParagraph>
    </fieldset>
    <fieldset>
      <StyledTextField label='Email' type='text' {...register('password')} />
      <StyledParagraph fontColor='red'>{`${
        errors.password?.message ?? ''
      }`}</StyledParagraph>
    </fieldset>
    <fieldset>
      <StyledTextField label='Email' type='text' {...register('confirmPass')} />
      <StyledParagraph fontColor='red'>{`${
        errors.confirmPass?.message ?? ''
      }`}</StyledParagraph>
    </fieldset>
    <StyledButton $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
  </StyledForm>;
};

export default RegisterForm;
