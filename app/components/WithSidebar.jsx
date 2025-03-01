import { useState } from 'preact/hooks'

const SidebarToggleButton = ({ onClick }) => (
  <button
    onClick={onClick}
    class="hover:bg-gray-100 hover:cursor-pointer rounded p-1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
)
const NavItem = ({ href, icon, children, onClick, sidebarOpen }) => {
  const Component = href ? 'a' : 'button'
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`flex items-center hover:bg-gray-100 rounded ${sidebarOpen ? 'p-2' : 'justify-center  py-2'}`}
    >
      <div className="w-5 flex-shrink-0">{icon}</div>
      {sidebarOpen ? <span className="ml-2">{children}</span> : null}
    </Component>
  )
}
const AccountIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)
const LogoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
)
export function WithSidebar({ children }) {
  const [showSidebar, setShowSidebar] = useState(true)

  const handleLogout = () => {
    //TODO: handle logout logic here
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`${showSidebar ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300`}
      >
        <div className="p-4">
          <div
            className={`flex items-center mb-8 ${!showSidebar ? 'justify-center' : 'justify-between'}`}
          >
            <h2 className={`text-xl font-bold ${!showSidebar && 'hidden'}`}>
              UMA
            </h2>
            <SidebarToggleButton onClick={() => setShowSidebar(!showSidebar)} />
          </div>

          <nav className="flex flex-col space-y-4">
            <NavItem
              href="/account"
              icon={<AccountIcon />}
              sidebarOpen={showSidebar}
            >
              {showSidebar && 'Account'}
            </NavItem>

            <NavItem
              icon={<LogoutIcon />}
              onClick={handleLogout}
              sidebarOpen={showSidebar}
            >
              {showSidebar && 'Logout'}
            </NavItem>
          </nav>
        </div>
      </div>

      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}
