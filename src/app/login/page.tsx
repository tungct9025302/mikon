"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GoogleIcon from "@/assets/google.svg";
import FacebookIcon from "@/assets/facebook.svg";
import TwitterIcon from "@/assets/twitter.svg";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../api";

import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";
import SpinnerEffect from "@/components/SpinnerEffect";
import Loading from "@/components/loading/loading";

export default function login() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogin() {
    await loadAllUsers();
    if (users.length != 0) {
      for (var i = 0; i < users.length; i++) {
        var inputtedUsername = document.getElementById("username")["value"];
        var inputtedPassword = document.getElementById("password")["value"];
        var retrievedUsername = users[i]["username"];
        var retrievedPassword = users[i]["password"];

        if (
          retrievedUsername == inputtedUsername &&
          retrievedPassword == inputtedPassword
        ) {
          dispatch(logIn(inputtedUsername));
          router.push("/");
        }
      }
    }
    setLoading(false);
  }
  async function loadAllUsers() {
    setLoading(true);
    let data = await getUsers();

    if (data) {
      setUsers(data);
    }
  }

  return (
    <div className="flex flex-col">
      <div
        className={
          loading
            ? "absolute flex justify-center w-full h-full items-center z-10"
            : "hidden"
        }
      >
        <Loading></Loading>
      </div>

      <div className="bg-[#F5F6F7] justify-center z-0">
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 justify-center text-3xl font-extrabold text-gray-900 flex flex-row space-x-2">
              <p> Sign in to be a</p>

              <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Mikon
              </p>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 max-w">
              Or{" "}
              <a
                href="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Register
              </a>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-10 px-4 shadow sm:rounded-2xl sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Having login issue?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={() => {
                      handleLogin();
                    }}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-100 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Image width={20} height={20} src={FacebookIcon} alt="" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Image width={20} height={20} src={TwitterIcon} alt="" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Image width={20} height={20} src={GoogleIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
