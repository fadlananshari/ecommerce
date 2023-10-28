import React from 'react';
import Product from './Product';
import ProductList from './ProductList';

function OurProduct() {
  return (
    <>
      <div className="py-5 container text-center">
        <h2 className="fw-bold mb-4">Our Product</h2>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 row-cols-md-3 d-flex justify-content-center justify-content-sm-start text-start">
          {ProductList.map((item) => {
            return (
              <div className="col mx-auto mx-sm-0 mb-4">
                <Product key={item.title} data={item} />
              </div>
            );
          })}
        </div>
        <a href="#" className='btn text-primary btn-outline-primary px-5'>Show More</a>
      </div>
    </>
  );
}

export default OurProduct;
