import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WithLayout from "WithLayout";
import { Main as MainLayout } from "./layouts";
import {
  About as AboutView,
  Expo as ExpoView,
  IndexView,
  NotFoundCover as NotFoundCoverView,
  Service as ServiceView,
  Startup as StartupView,
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
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/service"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ServiceView}
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
            component={StartupView}
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
            component={ExpoView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/not-found-cover"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundCoverView}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
