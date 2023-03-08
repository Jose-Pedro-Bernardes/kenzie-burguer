import React, { createContext, useState, ReactNode } from 'react';

export interface IProduct {
  id: number;
  name: string;
  category?: string;
  price?: number;
  img: string;
}

interface ICartContext {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  removeProduct: (id: string) => void;
  removeAllCart: () => void;
  addToCart: (product: IProduct) => void;
}

interface ICartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  function addToCart(product: IProduct) {
    if (!cart.find((producter) => producter.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  const removeProduct = (id: string) => {
    setCart(cart.filter((product) => product.id.toString() !== id));
  };

  const removeAllCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, removeProduct, removeAllCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
