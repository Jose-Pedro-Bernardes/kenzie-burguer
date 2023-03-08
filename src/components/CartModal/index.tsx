import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartModal = () => {
  const { showModal, closeModal } = useContext(CartContext);

  return (
    <>
      {showModal && (
        <StyledCartModalBox>
          <dialog>
            <header>
              <StyledTitle tag='h2' $fontSize='three'>
                Carrinho de compras
              </StyledTitle>
              <button type='button' aria-label='Fechar' onClick={closeModal}>
                <MdClose size={21} />
              </button>
            </header>
            <div className='cartBox'>
              <CartProductList />

              <div className='emptyBox'>
                <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                  Sua sacola está vazia
                </StyledTitle>
                <StyledParagraph textAlign='center'>
                  Adicione itens
                </StyledParagraph>
              </div>
            </div>
          </dialog>
        </StyledCartModalBox>
      )}
    </>
  );
};

export default CartModal;
