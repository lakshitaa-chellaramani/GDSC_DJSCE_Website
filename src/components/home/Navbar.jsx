import React from 'react';
import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='main'>
      <nav className="bg-white border-2  border-white-400 dark:bg-white-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="GDSCLogo.jpg" className="h-16 w-60" alt="" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
              <Link to ="/">
            <li>
                <h1 className="nav-item">Home</h1>
              </li>
              </Link>
              <Link to="/team">
              <li>
                <h1 className="nav-item">Our Team</h1>
              </li>
              </Link>
              <Link to="/events"><li>
                <h1 className="nav-item">Events</h1>
              </li>
              </Link>
              <Link to="/gallery">
              <li>
                <h1 className="nav-item">Gallery</h1>
              </li>
              </Link>
              {/* <Link to="/contactus">
              <li>
                <h1 className="nav-item">Contact Us</h1>
              </li>
              </Link> */}
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-item {
          font-family: 'Barlow' !important;
          font-size: 18px;
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
