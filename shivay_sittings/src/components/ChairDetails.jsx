import React from 'react';
import { useParams } from 'react-router-dom';
import { Air_Series, Bar_Series, chairsData, Executive_Series, Premium_Series, relatedProducts, sofasData, visitor_Series } from './chairData';
import Header from './Header';
import Footer from './Footer';

export default function ChairDetails() {
  const { id } = useParams();
  const numericId = Number(id);

  // Find the item from different categories
  const product =
    chairsData?.find(ch => ch.id === numericId) ||
    sofasData?.find(so => so.sofa_id === numericId) ||
    Air_Series?.find(ch => ch.id === numericId) ||
    Bar_Series?.find(ch => ch.id === numericId) ||
    Executive_Series?.find(ch => ch.id === numericId) ||
    Premium_Series?.find(ch => ch.id === numericId) ||
    visitor_Series?.find(ch => ch.id === numericId);

  if (!product) {
    return <h2 className="not-found">Item not found!</h2>;
  }

  return (
    <>

      <Header />

      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
        </div>
      </div>


      <div className="related-products">
        <h2>RELATED PRODUCTS</h2>
        <div className="products-container">
          {relatedProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <span>{product.description}</span>
            </div>
          ))}
        </div>
      </div>


      <Footer />

    </>

  );
}
