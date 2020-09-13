import React from 'react';


type HocProps = {
  isLoading: boolean,
  [propName: string]: any,
};


const WithLoading = (Component: React.FC<any>) =>
  // eslint-disable-next-line react/prop-types,implicit-arrow-linebreak
  function WihLoadingComponent({ isLoading, ...props }: HocProps): JSX.Element {
    // eslint-disable-next-line react/jsx-props-no-spreading
    if (!isLoading) return <Component {...props} />;
    return <p>Загрузка...</p>;
  };

export default WithLoading;
