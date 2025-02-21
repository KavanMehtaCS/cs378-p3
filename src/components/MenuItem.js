import React from 'react';
import '../styles.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ key, title, description, image, price }) => {
  return (
    <div className="container mb-4">
      <div className="item">
        <img className="menu-item" src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="fw-bold">${price}</p>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
