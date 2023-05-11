import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className='Card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export { Card };
