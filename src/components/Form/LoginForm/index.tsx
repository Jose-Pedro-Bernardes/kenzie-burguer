import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { iUserEntrieLogin } from '../../../contexts/types/types';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { formSchema } from './formSchema';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

const LoginForm = () => {
  const { submitLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserEntrieLogin>({
    resolver: yupResolver(formSchema),
  });
  const submit: SubmitHandler<iUserEntrieLogin> = (data: iUserEntrieLogin) => {
    submitLogin(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
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
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
