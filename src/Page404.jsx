import React from 'react';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div>
      <h1>404 page not found</h1>
      <Link to="/">back home</Link>
    </div>
  );
};
