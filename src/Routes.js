import { Switch, Route } from 'react-router-dom';
import * as route from './utils/routes';
import React, { Suspense } from 'react';

const LoginPage = React.lazy(() => import('./pages/login'));
const RegisterPage = React.lazy(() => import('./pages/register'));
const UserPage = React.lazy(() => import('./pages/profile-page'));
const Home = React.lazy(() => import('./pages/home'));
const CommentPage = React.lazy(() => import('./pages/comments'));

function Routes() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path={route.LOGIN_PATH}>
          <LoginPage />
        </Route>

        <Route path={route.REGISTER_PATH}>
          <RegisterPage />
        </Route>

        <Route path={route.USER_PROFILE}>
          <UserPage />
        </Route>

        <Route path={`${route.COMMENT_PAGE}/:post_id`}>
          <CommentPage />
        </Route>

        <Route path={route.HOME_PATH}>
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
