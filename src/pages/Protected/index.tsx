import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

export const Protected = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
      localStorage.removeItem('@KenzieBurguer:userId');
      localStorage.removeItem('@KenzieBurguer:token');
    }
  });
  return <div>{user ? <Outlet /> : null}</div>;
};
