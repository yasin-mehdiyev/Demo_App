import { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch } from "react-redux";
// Components
import Container from './components/layout/Container';
import ProductList from './components/products/ProductList';
// Custom Hooks
import useProducts from './hooks/useProducts'

const App : FC = () => {
  const dispatch = useDispatch<any>();
  const { products, getProducts, getFilteredProduct } = useProducts();

  useLayoutEffect(() => {
    getProducts();
  }, [dispatch]);
  

  const rates: Array<number> = [1,2,3,4,5];

  const handleFilterRate = (e: any): void => {
    const selectedRate = +e.target.value;
    getFilteredProduct(selectedRate);
  };

  console.log('selectedRate: ', products);

  return (
    <Container>
      <select onChange={handleFilterRate}>
        {
          rates.length && (
            rates.map((rate: number, index: number) => (
              <option key={index}>{rate}</option>
            ))
          )
        }
        <hr />
      </select>
      <ProductList allProducts={products} />
    </Container>
  )
}

export default App
