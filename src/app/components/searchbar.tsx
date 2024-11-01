"use client";

import React from "react";
import { useState } from "react";
import SearchIcon from "@/app/assets/search.svg";
import { Avatar } from "@material-tailwind/react";
import MenuIcon from "@/app/assets/menu.svg";
import RightArrow from "@/app/assets/right-arrow.svg";
import Image from "next/image";

export default function searchbar() {
  const [selected, setSelected] = useState(false);

  const [showResult, setShowResult] = useState(false);
  var a = [1, 2, 3];
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center relative">
        <div className="flex flex-row rounded-full bg-[#f2f2f2] space-x-1 w-full min-w-[600px]">
          {selected ? (
            <Avatar
              src="https://pbs.twimg.com/media/E7LsfNWEAUfLAW?format=png&name=small"
              width={40}
              height={40}
              alt=""
              className="m-1"
              variant="rounded"
              onClick={() => {
                setSelected(false);
              }}
            />
          ) : (
            <Image
              src={MenuIcon}
              width={40}
              height={40}
              className="m-1"
              alt=""
              onClick={() => {
                setSelected(true);
              }}
            ></Image>
          )}

          <Image src={RightArrow} width={35} height={35} alt=""></Image>

          <div className="border-r-2 h-[3vh] m-auto"></div>

          <input
            type="text"
            className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-black font-semibold outline-0 text-md"
            placeholder="What is in your mind"
            onClick={() => {
              setShowResult(true);
            }}
          />
          <button type="submit" className="relative p-2  ounded-full">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div
          className={
            showResult
              ? "absolute shadow bg-[#FDFDFD] top-14 z-40 w-full left-0 rounded max-h-select overflow-y-auto svelte-5uyqqj"
              : "hidden"
          }
        >
          <div className="flex flex-col w-full">
            {a.map(() => {
              return <>{generateRow()}</>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function generateRow() {
  return (
    <div className="flex cursor-pointer w-full border-gray-300 rounded-lg hover:bg-teal-100 h-10 align-center items-center">
      <div className="flex relative bg-orange-500 justify-center items-center m-1 mr-2 w-8 h-8 mt-1 rounded-full">
        <img
          className="rounded-full"
          alt="A"
          src="https://randomuser.me/api/portraits/men/62.jpg"
        />
      </div>
    </div>
  );
}
