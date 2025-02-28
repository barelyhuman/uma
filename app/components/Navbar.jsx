export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a className="text-2xl font-bold text-gray-900" href="/">
              UMA
            </a>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-8">
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900"
                  href="/changelogs"
                >
                  Changelogs
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/app">
                  App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
