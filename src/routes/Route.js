import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store';

import DefaultLayout from '~/pages/_laytouts/default/index';
import AuthLayout from '~/pages/_laytouts/auth/index';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/enrollments" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
