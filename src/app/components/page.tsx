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

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-row rounded-full bg-[#f2f2f2] space-x-1 w-full max-w-[600px]">
        {selected ? (
          <Avatar
            src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
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
          className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0 text-md font-medium"
          placeholder="What is in your mind"
        />
        <button type="submit" className="relative p-2  ounded-full">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
