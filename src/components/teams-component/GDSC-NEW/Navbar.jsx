import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-2  border-gray-400 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="GDSCLogo.jpg" className="h-16 w-40" alt="" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <h1 className="nav-item">Home</h1>
              </li>
              <li>
                <h1 className="nav-item">About Us</h1>
              </li>
              <li>
                <h1 className="nav-item">Events</h1>
              </li>
              <li>
                <h1 className="nav-item">Gallery</h1>
              </li>
              <li>
                <h1 className="nav-item">Our Team</h1>
              </li>
              <li>
                <h1 className="nav-item">Contact Us</h1>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-item {
          text-lg;
          font-normal;
          cursor-pointer;
          transition: font-weight 0.3s;
          color: black;
          position: relative;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #4285f4, #0f9d58, #f4b400, #db4437);
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-in-out;
        }

        .nav-item:hover {
          font-weight: bold;
          cursor: pointer;
        }

        .nav-item:hover::before {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
