import {
  lazy,
  ErrorBoundary,
  LocationProvider,
  Route,
  Router,
} from 'preact-iso'

export function createApp({ url = '', routes = [] } = {}) {
  return (
    <LocationProvider url={url}>
      <ErrorBoundary>
        <Router>
          {routes.map(d => (
            <Route path={d.path} component={lazy(d.component)} />
          ))}
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}
