import Link from 'next/link';
// import Image from '../image';
import { sanitize } from 'utils/sanatize';
// import AddToCart from '../cart/add-to-cart';
import { isEmpty } from 'lodash';
import { StyledProduct } from 'styles/Product.styled';

const Product = ( { product } ) => {
	
	if ( isEmpty( product ) ) {
		return null;
	}
	
	const img = product?.images?.[0] ?? {};
	const productType = product?.type ?? '';
	
	return (
    <StyledProduct>
			<Link href={product?.permalink ?? '/'}>
				<a>
					{/* <Image
						sourceUrl={ img?.src ?? '' }
						altText={ img?.alt ?? ''}
						title={ product?.name ?? '' }
						width="380"
						height="380"
					/> */}
          <div className="img-frame">
            <img
              src={ img?.src ?? '' }
              altText={ img?.alt ?? ''}
              title={ product?.name ?? '' }
              width="380"
              height="380"
            />
          </div>
          <div className="namePrice-cont">
            <h6>{ product?.name ?? '' }</h6>
            <div className="price" dangerouslySetInnerHTML={{ __html: sanitize( product?.price_html ?? '' ) }}/>
          </div>
				</a>
			</Link>
			
			{ 
        'simple' === productType 
          // ? <AddToCart product={product}/> 
          ? <button>add 2 cart</button> 
          : null 
      }
		</StyledProduct>
	)
}

export default Product;