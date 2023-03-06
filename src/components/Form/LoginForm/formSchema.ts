import * as yup from 'yup';

export const formSchema = yup.object().shape({
  email: yup.string().required('Preencha com seu email.'),
  password: yup.string().required('Preencha com sua senha.'),
});
