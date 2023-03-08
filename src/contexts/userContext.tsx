import React, { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../helpers/verifyToast';
import api from './axios/axiosInstance';
import { iEntrieRegister, iUserEntrieLogin } from './types/types';

interface IUserContext {
  user: IUser | null;
  submitLogin: (data: iUserEntrieLogin) => Promise<void>;
  submitRegister: (data: iEntrieRegister) => Promise<void>;
}

interface IUser {
  id: string;
  email: string;
  name: string;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);

  const submitLogin = async (data: iUserEntrieLogin) => {
    try {
      const response = await api.post('login', data);
      localStorage.setItem('@KenzieBurguer:token', response.data.accessToken);
      localStorage.setItem('@KenzieBurguer:userId', response.data.user.id);
      showToast(`Bem vindo, ${response.data.user.name}!`, 'success');
      setUser(response.data);
      setTimeout(() => {
        navigate(`/shop`);
      }, 2000);
    } catch (error) {
      showToast('Erro. Tente novamente.', 'error');
    }
  };

  const submitRegister = async (data: iEntrieRegister) => {
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
    <UserContext.Provider value={{ user, submitLogin, submitRegister }}>
      {children}
    </UserContext.Provider>
  );
};
