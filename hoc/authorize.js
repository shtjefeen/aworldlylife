import React from 'react';
import { connect } from 'react-redux';
import Error from '../pages/_error';
export default (WrappedComponent, authRole) => {
  const authorize = (props) => {
    const { role } = props.auth;
    const isAuthorized = authRole.find((r) => r === role);
    if (!isAuthorized) {
      return <Error />;
    }
    return <WrappedComponent {...props} />;
  };

  return connect((state) => state)(authorize);
};
