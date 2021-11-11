import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [buttonMenu, setButtonMenu] = useState(false);

  console.log(buttonMenu);

  return (
    <div className="bg-gray-200 relative min-h-screen flex">
      {/* sidebar */}
      <div className="bg-gray-600 text-gray-100 w-5 space-y-6 pt-5"></div>
      <div
        className={`${
          buttonMenu
            ? "absolute bg-gray-600 text-gray-100 w-64 space-y-6 pt-5 px-2 inset-y-0 left-0 transform -translate-x-full transtition duration-200 ease-out"
            : "bg-gray-600 text-gray-100 w-64 space-y-6 pt-5 px-2 inset-y-0 left-0 transform transtition duration-200 ease-out"
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
              fill-rule="evenodd"
              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-2xl flex justify-center items-center font-extrabold">
            BRINKS
          </span>
        </Link>
        {/* User Login */}
        <div className="text-white py-2 border-t-2 border-b-2 border-gray-200 flex justify-start">
          <img
            className="ml-2 w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 border-2 border-gray-50"
            src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
            alt=""
          />
          <span className="text-xl font-bold ml-5 flex items-center justify-center">
            Ifan Ramadhany
          </span>
        </div>

        {/* Menu SideBar  */}
        <nav>
          <Link
            className="rounded text-white my-2 py-2.5 px-4 flex justify-start items-center transition duration-200 hover:bg-gray-400 hover:text-gray-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
            <span className="font-semibold">Dashboard</span>
          </Link>
          <Link
            className="rounded text-white my-2 py-2.5 px-4 flex justify-start items-center transition duration-200 hover:bg-gray-400 hover:text-gray-800"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span className="font-semibold">Management</span>
          </Link>
          <Link
            className="rounded text-white my-2 py-2.5 px-4 flex justify-start items-center transition duration-200 hover:bg-gray-400 hover:text-gray-800"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span className="font-semibold">Reporting</span>
          </Link>
          <Link
            className="rounded text-white my-2 py-2.5 px-4 flex justify-start items-center transition duration-200 hover:bg-gray-400 hover:text-gray-800"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="font-semibold">System Parameter</span>
          </Link>
          <Link
            className="rounded text-white my-2 py-2.5 px-4 flex justify-start items-center transition duration-200 hover:bg-gray-400 hover:text-gray-800"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold">Operation</span>
          </Link>
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 font-bold bg-gray-200">
        <div className="h-10 text-white flex justify-start items-center">
          <button
            onClick={() => setButtonMenu(!buttonMenu)}
            className="ml-4 p-1 hover:bg-gray-600 bg-gray-500 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-full">
          <div class="collapse w-96 border rounded-box border-base-300 collapse-arrow">
            <input type="checkbox"></input>
            <div class="collapse-title text-xl font-medium">
              I open/close with click
            </div>
            <div class="collapse-content">
              <p>
                Collapse content reveals with focus. If you add a checkbox, you
                can control it using checkbox instead of focus. Or you can
                force-open/force-close using
                <span class="badge badge-outline">collapse-open</span> and
                <span class="badge badge-outline">collapse-close</span> classes.
              </p>
            </div>
          </div>
          <div class="collapse w-96 border rounded-box border-base-300 collapse-arrow">
            <input type="checkbox"></input>
            <div class="collapse-title text-xl font-medium">
              I open/close with click
            </div>
            <div class="collapse-content">
              <p>
                Collapse content reveals with focus. If you add a checkbox, you
                can control it using checkbox instead of focus. Or you can
                force-open/force-close using
                <span class="badge badge-outline">collapse-open</span> and
                <span class="badge badge-outline">collapse-close</span> classes.
              </p>
            </div>
          </div>
          <div class="collapse w-96 border rounded-box border-base-300 collapse-arrow">
            <input type="checkbox"></input>
            <div class="collapse-title text-xl font-medium">
              I open/close with click
            </div>
            <div class="collapse-content">
              <p>
                Collapse content reveals with focus. If you add a checkbox, you
                can control it using checkbox instead of focus. Or you can
                force-open/force-close using
                <span class="badge badge-outline">collapse-open</span> and
                <span class="badge badge-outline">collapse-close</span> classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
