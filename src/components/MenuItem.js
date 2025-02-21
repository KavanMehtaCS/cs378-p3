import React from 'react';
import '../styles.css';

const MenuItem = ({ title, description, image, price, onAdd, onRemove, quantity }) => {
  return (
    <div className="container mb-4">
      <div className="item">
        <img className="menu-item" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold">${price.toFixed(2)}</p>
        <div className="d-flex align-items-center">
          <button className="btn btn-secondary me-2" onClick={onRemove} disabled={quantity === 0}>-</button>
          <span>{quantity}</span>
          <button className="btn btn-primary ms-2" onClick={onAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
