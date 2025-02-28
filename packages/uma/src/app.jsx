import {
  lazy,
  ErrorBoundary,
  LocationProvider,
  Route,
  Router,
} from "preact-iso";

export function createApp({ routes = [] } = {}) {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          {routes.map((d) => (
            <Route path={d.path} component={lazy(d.component)} />
          ))}
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
