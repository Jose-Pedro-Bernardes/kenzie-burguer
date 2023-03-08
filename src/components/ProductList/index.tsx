import { useContext, useEffect, useState } from 'react';
import api from '../../contexts/axios/axiosInstance';
import { CartContext } from '../../contexts/CartContext';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('@KenzieBurguer:token');
    if (token) {
      const catchProducts = async () => {
        try {
          const res = await api.get('products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProducts(res.data);
          setAllProducts(res.data);
        } catch (error) {}
      };
      catchProducts();
    }
  }, []);

  return (
    <StyledProductList>
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            product={product}
            key={product.id.toString()}
            name={product.name}
            price={parseFloat(product.price.toString())
              .toFixed(2)
              .replace('.', ',')}
            category={product.category}
            img={product.img}
          />
        ))}
    </StyledProductList>
  );
};

export default ProductList;
