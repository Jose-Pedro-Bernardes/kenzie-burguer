import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import api from '../../../contexts/axios/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { iUserEntrieLogin } from '../../../contexts/types/types';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { formSchema } from './formSchema';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserEntrieLogin>({
    resolver: yupResolver(formSchema),
  });

  const submitLogin: SubmitHandler<iUserEntrieLogin> = async (data) => {
    try {
      const response = await api.post('login', data);
      localStorage.setItem('@KenzieBurguer:token', response.data.accessToken);
      localStorage.setItem('@KenzieBurguer:userId', response.data.user.id);
      setTimeout(() => {
        navigate(`/shop`);
      }, 2000);
    } catch (error) {}
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitLogin)}>
      <fieldset>
        <StyledTextField label='Email' type='text' {...register('email')} />
        <StyledParagraph fontColor='red'>{`${
          errors.email?.message ?? ''
        }`}</StyledParagraph>
      </fieldset>
      <fieldset>
        <StyledTextField label='Senha' type='text' {...register('password')} />
        <StyledParagraph fontColor='red'>{`${
          errors.password?.message ?? ''
        }`}</StyledParagraph>
      </fieldset>
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
