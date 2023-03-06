import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

import { useForm, SubmitHandler } from 'react-hook-form';
import { iEntrieRegister } from '../../../contexts/types/types';
import { formSchema } from './formSchema';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../../contexts/axios/axiosInstance';
import { showToast } from '../../../helpers/verifyToast';

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEntrieRegister>({
    resolver: yupResolver(formSchema),
  });

  const submitRegister: SubmitHandler<iEntrieRegister> = async (data) => {
    try {
      const response = await api.post('users', data);
      showToast('Cadastro bem sucedido!', 'success');

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      showToast('Erro ao cadastrar.', 'error');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitRegister)}>
      <fieldset>
        <StyledTextField label='Nome' type='text' {...register('name')} />
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
        <StyledTextField
          label='Senha'
          type='password'
          {...register('password')}
        />
        <StyledParagraph fontColor='red'>{`${
          errors.password?.message ?? ''
        }`}</StyledParagraph>
      </fieldset>
      <fieldset>
        <StyledTextField
          label='Confirmar senha'
          type='password'
          {...register('confirmPass')}
        />
        <StyledParagraph fontColor='red'>{`${
          errors.confirmPass?.message ?? ''
        }`}</StyledParagraph>
      </fieldset>
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
