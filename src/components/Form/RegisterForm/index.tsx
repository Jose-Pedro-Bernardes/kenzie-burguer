import { useContext } from 'react';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

import { useForm, SubmitHandler } from 'react-hook-form';
import { iEntrieRegister } from '../../../contexts/types/types';
import { formSchema } from './formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../../contexts/UserContext';

const RegisterForm = () => {
  const { submitRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEntrieRegister>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<iEntrieRegister> = async (
    data: iEntrieRegister
  ) => {
    await submitRegister(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
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
    </>
  );
};

export default RegisterForm;
