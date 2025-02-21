import React from 'react';
import '../styles.css';

const Header = ({title, restaurantLogo, description1, description2 }) => {
    return (
      <div className="text-center mb-4">
        <h1 className="display-4">
          <img className="img" src={restaurantLogo} alt="logo" />{ title } 
        </h1>
        <p className="lead">
          <span className="cursive-text"> {description1} </span><br />
          {description2}
        </p>
      </div>
    );
  };
  
  export default Header;
