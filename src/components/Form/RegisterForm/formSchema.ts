import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string().required('Preencha com seu nome.'),
  email: yup.string().required('Preencha com seu email.'),
  password: yup
    .string()
    .required('Senha obrigatória.')
    .min(8, 'Sua senha deve conter ao menos 8 caractéres.'),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas precisam ser iguais.'),
});
