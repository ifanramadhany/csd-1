import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ClosedSidebar } from "../components";

export default function MngDenominationPage() {
  const [buttonMenu, setButtonMenu] = useState(false);
  // console.log(buttonMenu);

  return (
    <div className="bg-gray-200 relative overflow-auto min-h-screen flex">
      {/* sidebar */}
      {/* when sidebar closed  */}
      <ClosedSidebar buttonMenu={buttonMenu} setButtonMenu={setButtonMenu} />

      {/* when sidebar opened */}
      <div
        className={`${
          buttonMenu
            ? "absolute bg-gray-600 text-gray-100 w-64 space-y-6 pt-5 px-2 inset-y-0 left-0 transform -translate-x-full transtition duration-200 ease-in-out"
            : "sidebar relative bg-gray-600 text-gray-100 w-64 space-y-6 pt-5 px-2 inset-y-0 left-0 transform translate-x-0 transtition duration-200 ease-in-out"
        }`}
      >
        {/* Logo  */}
        <Link className="text-white flex justify-center items-center" to="/">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-2xl flex justify-center items-center font-extrabold">
            BRINKS
          </span>
        </Link>
        {/* User Login */}
        <div className="text-white py-2 border-t border-b border-gray-200 flex justify-center">
          <button class="btn btn-sm h-12 flex justify-center items-center">
            <img
              className="mr-4 w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 border-2 border-gray-50"
              src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              alt=""
            />
            Ifan Ramadhany
          </button>
        </div>

        {/* Menu SideBar  */}
        <nav>
          <div className="mb-4 w-full flex justify-center items-center">
            <button class="btn btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              Change Password
            </button>
          </div>
          <Link
            className="rounded text-white my-2 py-2.5 px-4 flex justify-start items-center transition duration-200 hover:bg-gray-300 hover:text-gray-800"
            to="/"
          >
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            <span className="font-semibold">Dashboard</span>
          </Link>
          {/* button collapse  */}
          <div class="collapse my-3 w-50 border rounded-box border-base-300 collapse-arrow collapse-open hover:bg-gray-200 hover:text-gray-700">
            <input type="checkbox"></input>
            <div class="collapse-title text-base font-medium flex justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <span className="font-semibold">Management</span>
            </div>
            <div class="collapse-content">
              {/* children buttons  */}
              <Link
                className="rounded ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-gray-400 text-gray-800 hover:bg-blue-400 hover:text-gray-100"
                to="/management/currency"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Currency</span>
              </Link>
              <Link
                className="rounded ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-blue-400 text-gray-100 hover:bg-blue-400 hover:text-gray-100"
                to="/management/denomination"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Denomination</span>
              </Link>
            </div>
          </div>

          <div class="collapse my-3 w-50 border rounded-box border-base-300 collapse-arrow hover:bg-gray-200 hover:text-gray-700">
            <input type="checkbox"></input>
            <div class="collapse-title text-base font-medium flex justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span className="font-semibold">Reporting</span>
            </div>
            <div class="collapse-content">
              {/* children buttons  */}
              <Link
                className="rounded text-gray-800 ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-gray-400 hover:bg-blue-400 hover:text-gray-100"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Menu</span>
              </Link>
              <Link
                className="rounded text-gray-800 ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-gray-400 hover:bg-blue-400 hover:text-gray-100"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Context</span>
              </Link>
            </div>
          </div>

          <div class="collapse my-3 w-50 border rounded-box border-base-300 collapse-arrow hover:bg-gray-200 hover:text-gray-700">
            <input type="checkbox"></input>
            <div class="collapse-title text-base font-medium flex justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="font-semibold">System Parameter</span>
            </div>
            <div class="collapse-content">
              {/* children buttons  */}
              <Link
                className="rounded text-gray-800 ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-gray-400 hover:bg-blue-400 hover:text-gray-100"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Menu</span>
              </Link>
              <Link
                className="rounded text-gray-800 ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-gray-400 hover:bg-blue-400 hover:text-gray-100"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Context</span>
              </Link>
            </div>
          </div>

          <div class="collapse my-3 w-50 border rounded-box border-base-300 collapse-arrow hover:bg-gray-200 hover:text-gray-700">
            <input type="checkbox"></input>
            <div class="collapse-title text-base font-medium flex justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">Operations</span>
            </div>
            <div class="collapse-content">
              {/* children buttons  */}
              <Link
                className="rounded text-gray-800 ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-gray-400 hover:bg-blue-400 hover:text-gray-100"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Menu</span>
              </Link>
              <Link
                className="rounded text-gray-800 ml-6 my-1 py-2 px-4 flex justify-start items-center transition duration-200 bg-gray-400 hover:bg-blue-400 hover:text-gray-100"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
                <span className="text-sm font-semibold">Context</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 font-bold bg-gray-200">
        <div className="h-12 bg-blue-400 grid grid-cols-10 text-white flex justify-start items-center border-b-2 border-black shadow-lg">
          <div className="col-span-5">
            <button
              onClick={() => setButtonMenu(!buttonMenu)}
              className="ml-4 p-1 hover:text-gray-800 hover:bg-gray-300 bg-gray-600 rounded"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="col-span-5 w-45 flex justify-end items-center">
            <div class="flex flex-col justify-center items-center">
              <button class="relative flex py-1 px-4 hover:text-white text-gray-700 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="absolute right-1 -top-0 bg-gray-400 px-1.5 py-0.5 ml-2 rounded text-xs font-bold">
                  10
                </span>
              </button>
            </div>
            <div class="flex flex-col justify-center items-center">
              <button class="relative mr-8 flex py-1 px-4 hover:text-white text-gray-700 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span class="absolute right-2 -top-0 bg-gray-400 px-1.5 py-0.5 ml-2 rounded text-xs font-bold">
                  10
                </span>
              </button>
            </div>
            <button class="mr-4 btn btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              Logout
            </button>
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-evenly items-center">
          <div className="w-full flex items-center mt-4 ">
            <span className="ml-8 text-xl font-bold">Denomination Management</span>
            <button className="btn btn-sm ml-8">
              Register New Currency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-4 h-4 ml-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <span>Management Denomination Page</span>
        </div>
      </div>
    </div>
  )
}
