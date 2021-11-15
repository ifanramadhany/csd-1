import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ClosedSidebar({ buttonMenu, setButtonMenu }) {
  return (
    <>
      <div
        className={`${
          buttonMenu
            ? "sidebar relative inset-y-0 left-0 transform translate-x-0 transtition duration-200 ease-in-out bg-gray-600 text-gray-100 w-14 space-y-6 pt-5"
            : "sidebar absolute inset-y-0 left-0 transform -translate-x-full transtition duration-200 ease-in-out bg-gray-600 text-gray-100 w-14 space-y-6 pt-5"
        }`}
        
      >
        {/* Logo  */}
        <Link
          className="h-8 text-white flex justify-center items-center"
          to=""
          onClick={() => setButtonMenu(!buttonMenu)}
        >
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
          <span className="text-2xl flex justify-center items-center font-extrabold"></span>
        </Link>
        {/* User Login */}
        <div className="text-white py-2 border-t border-b border-gray-200 flex justify-center">
          <button
            class="btn btn-sm h-12 flex justify-center items-center"
            onClick={() => setButtonMenu(!buttonMenu)}
          >
            <img
              className="w-4 h-4 bg-gray-300 rounded-full flex-shrink-0 border-2 border-gray-50"
              src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              alt=""
            />
          </button>
        </div>

        {/* Menu SideBar  */}
        <nav>
          <div className="mb-6 w-full flex justify-center items-center">
            <button
              class="btn btn-sm"
              onClick={() => setButtonMenu(!buttonMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-4 h-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </button>
          </div>
          <Link
            className="rounded text-white mx-1 my-2 py-2.5 px-1 flex justify-center items-center transition duration-200 hover:bg-gray-300 hover:text-gray-800"
            to=""
            onClick={() => setButtonMenu(!buttonMenu)}
          >
            <svg
              className="h-6 w-6"
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
            <span className="font-semibold"></span>
          </Link>
          <Link
            className="rounded text-white mx-1 my-2 py-2.5 px-1 flex justify-center items-center transition duration-200 hover:bg-gray-300 hover:text-gray-800"
            to=""
            onClick={() => setButtonMenu(!buttonMenu)}
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
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span className="font-semibold"></span>
          </Link>
          <Link
            className="rounded text-white mx-1 my-2 py-2.5 px-1 flex justify-center items-center transition duration-200 hover:bg-gray-300 hover:text-gray-800"
            to=""
            onClick={() => setButtonMenu(!buttonMenu)}
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="font-semibold"></span>
          </Link>
          <Link
            className="rounded text-white mx-1 my-2 py-2.5 px-1 flex justify-center items-center transition duration-200 hover:bg-gray-300 hover:text-gray-800"
            to=""
            onClick={() => setButtonMenu(!buttonMenu)}
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="font-semibold"></span>
          </Link>
          <Link
            className="rounded text-white mx-1 my-2 py-2.5 px-1 flex justify-center items-center transition duration-200 hover:bg-gray-300 hover:text-gray-800"
            to=""
            onClick={() => setButtonMenu(!buttonMenu)}
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
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold"></span>
          </Link>
        </nav>
      </div>
    </>
  );
}
