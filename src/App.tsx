import { FC, useLayoutEffect } from 'react'
// Components
import Container from './components/layout/Container';
import ProductList from './components/products/ProductList';
// Helpers
import { rates } from './helpers/constants';
// Custom Hooks
import useProducts from './hooks/useProducts'

const App : FC = () => {
  const { products, isFiltered, isChange,  filteredProducts, getProducts, getFilteredProduct } = useProducts();

  useLayoutEffect(() => {
    getProducts();
  }, [isFiltered]);

  const handleFilterRate = (e: any, key: string): void => {
    const value = +e.target.value;
    getFilteredProduct(value, key);
  };

  return (
    <Container>
      <div className="mb-3 mt-3">
        <span>Ratings: </span>
        <select onChange={(e: any) => handleFilterRate(e, "rating")}>
          {
            rates.length && (
              rates.map((rate: number, index: number) => (
                <option key={index}>{rate}</option>
              ))
            )
          }
          <hr />
        </select>
      </div>
      <div className="mb-3 mt-3">
          <span>Price Filter: </span>
          <input type="number" min="0" onChange={(e: any) => handleFilterRate(e, "price")} />
      </div>
      <ProductList allProducts={!isChange ? products : filteredProducts} />
    </Container>
  )
}

export default App
