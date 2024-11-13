import React from "react";
import LoginIcon from "@/app/assets/login_icon.png";
import Image from "next/image";

export default function ultilitybox() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col bg-[url('/login_bg.jpeg')] bg-cover h-[22vh] rounded-2xl space-y-2 border-2">
        <Image src={LoginIcon} width={50} height={50} alt=""></Image>
        <div className="flex w-full justify-center">
          <div className=" min-w-[200px] w-[15vw]">
            <p className="text-xl font-semibold font-mono text-center">
              Login to save & <br />
              create awesome contents
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-violet-200 hover:bg-violet-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-[150px] rounded-2xl">
            Log In
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-[url('/login_bg.jpeg')] bg-cover h-[22vh] rounded-2xl space-y-2 border-2">
        <Image src={LoginIcon} width={50} height={50} alt=""></Image>
        <div className="flex w-full justify-center">
          <div className=" min-w-[200px] w-[15vw]">
            <p className="text-xl font-semibold font-mono text-center">
              Login to save & <br />
              create awesome contents
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-violet-200 hover:bg-violet-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-[150px] rounded-2xl">
            Log In
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-[url('/login_bg.jpeg')] bg-cover h-[22vh] rounded-2xl space-y-2 border-2">
        <Image src={LoginIcon} width={50} height={50} alt=""></Image>
        <div className="flex w-full justify-center">
          <div className=" min-w-[200px] w-[15vw]">
            <p className="text-xl font-semibold font-mono text-center">
              Login to save & <br />
              create awesome contents
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-violet-200 hover:bg-violet-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-[150px] rounded-2xl">
            Log In
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-[url('/login_bg.jpeg')] bg-cover h-[22vh] rounded-2xl space-y-2 border-2">
        <Image src={LoginIcon} width={50} height={50} alt=""></Image>
        <div className="flex w-full justify-center">
          <div className=" min-w-[200px] w-[15vw]">
            <p className="text-xl font-semibold font-mono text-center">
              Login to save & <br />
              create awesome contents
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-violet-200 hover:bg-violet-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-[150px] rounded-2xl">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
