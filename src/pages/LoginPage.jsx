import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { maskingPwd } from "../masking";

export default function LoginPage() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  
  const loginHandle = (e) => {
    e.preventDefault();
    console.log(userInput);
    const newPass = { ...userInput };
    newPass['password'] = maskingPwd(userInput.password);
    setUserInput(newPass);
    console.log(newPass);
  };

  const onChangeInput = (e, key) => {
    const newObj = { ...userInput };
    newObj[key] = e.target.value;
    setUserInput(newObj);
  };

  return (
    <div class="flex justify-center items-center min-h-screen bg-blue-300">
      <div class="container max-w-md border-8 border-gray-200 p-3 bg-white shadow-lg rounded-md">
        {/* header  */}
        <Link
          className="my-2 text-gray-600 flex justify-center items-center"
          to="/"
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
          <span className="text-2xl flex justify-center items-center font-extrabold">
            BRINKS
          </span>
        </Link>
        <div class="text-center my-2">
          <p class="text-gray-500">Sign in to start your session</p>
        </div>
        {/* sign in  */}
        <div class="m-6">
          <form class="mb-4" onSubmit={loginHandle}>
            <div class="mb-6">
              <label
                for="username"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Username
              </label>
              <input
                onChange={(e) => onChangeInput(e, "username")}
                type="text"
                name="username"
                id="username"
                placeholder="Your username"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <div class="flex justify-between mb-2">
                <label
                  for="password"
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Password
                </label>
                <a
                  href="#!"
                  class="text-sm text-gray-400 focus:outline-none focus:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300"
                >
                  Forgot password?
                </a>
              </div>
              <input
                onChange={(e) => onChangeInput(e, "password")}
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                value={userInput.password}
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-3 py-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none duration-100 ease-in-out"
              >
                Sign in
              </button>
            </div>
            <p class="text-sm text-center text-gray-400">
              Don&#x27;t have an account yet?
              <a
                href="#!"
                class="font-semibold text-blue-500 focus:text-blue-600 focus:outline-none focus:underline"
              >
                Sign up
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
