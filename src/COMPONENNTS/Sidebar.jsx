import React from 'react'

const Sidebar = ({closeTheNav,slideNavTheme}) => {
  return (
    <>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-72 z-50
        ${slideNavTheme==="light"?"bg-secondary text-primary":"bg-primary text-secondary"} `}>
        <div className="p-6 flex flex-col justify-between h-full">

          {/* Top Section */}
          <div>
            {/* Header */}
            <h2 className="text-2xl font-bold mb-1">Martins</h2>
            <p className="text-sm">
              Frontend Developer
            </p>

            <div className="my-6 border-b border-gray-300 dark:border-gray-700"></div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <a href="/" className="hover:text-yellow-500 transition">Home</a>
              <a href="/about" className="hover:text-yellow-500 transition">About</a>
              <a href="/works" className="hover:text-yellow-500 transition">Works</a>
              <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
            </nav>

            <div className="my-6 border-b border-gray-300 dark:border-gray-700"></div>

            {/* Skills */}
            <div>
              <h3 className="text-sm uppercase tracking-wide  mb-2">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm border rounded-full border-gray-400 dark:border-gray-600">
                  React
                </span>
                <span className="px-3 py-1 text-sm border rounded-full border-gray-400 dark:border-gray-600">
                  Firebase
                </span>
                <span className="px-3 py-1 text-sm border rounded-full border-gray-400 dark:border-gray-600">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Socials */}
            <div className="flex gap-4 mb-4 text-xl">
              <a href="#" className="hover:text-yellow-500 transition">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>

            {/* Button */}
            <button className="w-full py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeTheNav}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>
      </div>
    </>
  )
}

export default Sidebar
