/*
 * @Author: your name
 * @Date: 2021-05-12 14:04:44
 * @LastEditTime: 2021-05-12 14:21:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CV/src/router.tsx
 */
import React, { Suspense } from "react";
import {
  Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from "dva/router";
import allRoutes from "./config/router";

interface RouteArrItem {
  path: string;
  component: any;
}

const CreateRoutes: React.FC<RouteComponentProps> = ({
  history,
}: RouteComponentProps) => {
  const generateRoute: React.FC<RouteArrItem> = ({
    path,
    component: Component,
  }: RouteProps & RouteArrItem) => (
    <Route
      key={path}
      path={path}
      exact
      component={(props: RouteProps) => (
        <Suspense fallback={<div />}>
          <Component {...props} />
        </Suspense>
      )}
    />
  );

  return (
    <Router history={history}>
      <Switch>
        {allRoutes.map(({ path, component }: RouteArrItem) =>
          generateRoute({ path, component })
        )}
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  );
};

export default CreateRoutes;
