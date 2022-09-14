import { isArray, isEmpty } from 'lodash';
import Product from './Product';
// import {StyledProduct} from 'styles/Product.styled';

const Products = ({ products }) => {
	
	if ( isEmpty( products ) || !isArray( products ) ) {
		return null;
	}
	
	return (
		<div className="products">
      
			{ products.length ? products.map( product => {
        return (
          <Product key={ product?.id } product={product} />
          )
        } ) : null }
    </div>

	)
}

export default Products;