import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WithLayout from "WithLayout";
import { Main as MainLayout } from "./layouts";
import {
  About as AboutView,
  Discover as DiscoverView,
  Landing,
  NotFoundCover as NotFoundCoverView,
  Product as ProductView,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={Landing}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/product"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ProductView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/about"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/discover"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={DiscoverView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/not-found"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundCoverView}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
