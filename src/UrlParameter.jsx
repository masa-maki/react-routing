import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  // console.log(search);
  return (
    <div>
      <h1>Url Parameter page</h1>
      <p>Parameter is "{id}"</p>
      <p>Query is "{query.get('name')}"</p>
    </div>
  );
};
