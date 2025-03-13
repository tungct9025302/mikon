"use client";

import { useState } from "react";

import { getUsers, getUser, createUser, updateUser, deleteUser } from "../api";
import { logIn, logOut } from "@/components/redux/features/auth-slices";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/components/redux/store";

import Loading from "@/components/LoadingEffect/Loading";

export default function changepassword() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userid: any = useAppSelector((state: any) => state.value.userid);
  const [newPw, setNewPw] = useState({
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    let response = await updateUser(userid, newPw);
    console.log(response);
    if (response.status !== 200) {
      alert("Unable to take this action");
    }

    if (response.data.success) {
      alert(response.data.message);
      dispatch(logOut());
      router.push("/login");
    } else {
      alert(response.data.message);
    }

    setLoading(false);
  }
  function handleChange(e) {
    setNewPw({ ...newPw, [e.target.name]: e.target.value });
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
              <p>Change password</p>

              {/* <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Mikon
              </p> */}
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-10 px-4 shadow sm:rounded-2xl sm:px-10">
              <form
                id="form"
                onSubmit={() => {
                  handleSubmit(event);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="new-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                      onChange={() => {
                        handleChange(event);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Re-enter Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirm-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Re-enter inputted password"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Confirm
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <a className="px-2 bg-gray-100 text-gray-500" href="/FAQ">
                      Want to update other information?
                    </a>
                  </div>
                </div>
                {/* <div className="mt-6 grid grid-cols-3 gap-3">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
