import React from 'react';

const WithLoading = (Component) =>
  // eslint-disable-next-line react/prop-types,implicit-arrow-linebreak
  function WihLoadingComponent({ isLoading, ...props }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    if (!isLoading) return <Component {...props} />;
    return <p>Загрузка...</p>;
  };

export default WithLoading;
