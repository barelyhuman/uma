import { useEffect } from 'preact/hooks'
import { useIsAuthenticated } from '../lib/hooks/useIsAuthenticated'

export default function AppPage() {
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/login'
    } else {
      window.location.href = '/dashboard'
    }
  }, [isAuthenticated])

  return <p>Redirecting...</p>
}
