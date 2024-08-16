import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export const Page1DetailA = () => {
  const state = useLocation();

  const history = useHistory();

  const onClickBack = () => history.goBack();

  // console.log(state);
  return (
    <div>
      <h1>Page 1 Detail A</h1>
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
