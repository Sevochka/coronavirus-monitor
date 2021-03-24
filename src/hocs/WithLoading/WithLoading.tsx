import React from 'react';
import { Spin } from 'antd';

import './WithlLoading.scss';

type HocProps = {
  isLoading: boolean,
  [propName: string]: any,
};

const WithLoading = (Component: React.FC<any>) =>
  function WihLoadingComponent({ isLoading, ...props }: HocProps): JSX.Element {
    return !isLoading ? <Component {...props} /> : <Spin size="large" className="spin" />;
  };

export default WithLoading;
