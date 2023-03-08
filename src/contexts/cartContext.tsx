import React, { createContext, useState } from 'react';

export interface IProduct {
  id: number;
  name: string;
  category?: string;
  price: number;
  img: string;
}

interface ICartContext {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  removeProduct: (id: number) => void;
  removeAllCart: () => void;
  addToCart: (product: IProduct) => void;
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  totalValue: () => number;
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
  const totalValue = (): number => {
    const sum = cart.reduce((prevValue: number, currentValue: IProduct) => {
      return prevValue + Number(currentValue.price);
    }, 0);

    return Number(sum);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const removeProduct = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
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
        totalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
