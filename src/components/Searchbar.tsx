"use client";

import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { Avatar } from "@material-tailwind/react";
import MenuIcon from "@/assets/menu.svg";
import RightArrow from "@/assets/right-arrow.svg";
import BottomArrow from "@/assets/bottom-arrow.svg";
import Image from "next/image";

export default function searchbar() {
  const [selected, setSelected] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const ref: any = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setShowResult(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  var samples = [
    {
      name: "Genshin Impact",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/ac4e7a4f341e7281b0f6f274f9ec3905.png",
    },
    {
      name: "Honkai: Star Rail",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/ec01a34f7fc3b03448cc52f2a89d52e8.png",
    },
    {
      name: "League Of Legends",
      iconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/882137f311c5728f8e257e56820af92c.png",
    },
  ];

  function generateRow(item, index) {
    return (
      <div
        key={index}
        className="flex cursor-pointer w-full border-gray-300 rounded-lg hover:bg-teal-100 h-10 align-center items-center"
        onClick={() => {
          setSearchValue(item["name"]);
          setShowResult(false);
        }}
      >
        <div className="flex flex-row relative items-center m-1 mr-2 w-8 h-8 mt-1 rounded-full">
          <img className="rounded-full" alt="" src={item["iconUrl"]} />

          <p className="font-normal pl-2 w-full whitespace-nowrap">
            {item["name"]}
          </p>
        </div>
      </div>
    );
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div ref={ref} className="flex flex-col items-center relative">
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

          {showResult ? (
            <Image
              src={BottomArrow}
              width={30}
              height={30}
              alt=""
              className="transition-transform duration-500 ease-in-out transform rotate-0"
              onClick={() => setShowResult(false)}
            ></Image>
          ) : (
            <Image
              src={RightArrow}
              width={30}
              height={30}
              alt=""
              className="transition-transform duration-500 ease-in-out transform rotate-0"
              onClick={() => setShowResult(true)}
            ></Image>
          )}

          <div className="border-r-2 h-[3vh] m-auto"></div>

          <input
            type="text"
            id="searchInput"
            className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-black font-medium outline-0 text-md"
            placeholder="What is in your mind"
            value={searchValue}
            onChange={(event) => handleInputChange(event)}
            onClick={() => {
              setShowResult(true);
            }}
          />
          <button type="submit" className="relative p-2  rounded-full">
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
          <div className="flex flex-col w-full min-h-5">
            {samples
              .filter(
                (item) =>
                  item["name"]
                    .toLowerCase()
                    .startsWith(searchValue.toLowerCase()) &&
                  searchValue.length != 0
              )
              .map((item, index) => {
                return generateRow(item, index);
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
