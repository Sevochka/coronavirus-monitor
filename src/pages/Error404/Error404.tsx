import React from 'react';
import { Alert } from 'antd';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => (
  <>
    <Alert
      message="Ошибка 404, страницы не существует"
      description={<Link to="/">Вернуться домой</Link>}
      type="error"
    />
  </>
);

export default Error404;
