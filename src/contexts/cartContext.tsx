import React, { createContext, useState } from 'react';

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
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [showModal, setShowModal] = useState(false);

  function addToCart(product: IProduct) {
    if (!cart.find((producter) => producter.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const removeProduct = (id: string) => {
    setCart(cart.filter((product) => product.id.toString() !== id));
  };

  const removeAllCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        removeProduct,
        removeAllCart,
        addToCart,
        showModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
