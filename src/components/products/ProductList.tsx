import { FC } from 'react';
// Components
import Row from '../layout/Row';
import Col from '../layout/Col';
import ProductItem from './ProductItem';

// Models
import { Product } from '../../models/api/Product/Product';

type ProductProps = {
    allProducts: Product[]
}

const ProductList : FC<ProductProps> = ({ allProducts }) => {
  return (
    <Row>
      {
        allProducts?.length && (
            allProducts?.map((item: any) => (
                <Col colName="col-md-4" key={item.id}>
                    <ProductItem { ...item } />
                </Col>
            ))
        )
      }
    </Row>
  )
}

export default ProductList
