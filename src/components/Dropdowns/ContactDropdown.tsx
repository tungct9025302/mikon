"use client;";
import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import Image from "next/image";

import NotificationImg from "@/assets/notification.png";
import BottomArrowIcon from "@/assets/bottom-arrow.svg";

export default function ContactDropdown({ newsContent }) {
  const [updated, setUpdated] = useState(false);

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-custom-trigger"
        // type="button"
        className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
        // className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
        type="button"
        onClick={() => {
          setUpdated(true);
        }}
      >
        <div className="min-w-[12vw] min-h-[4vh] bg-[#E4FFFF] flex flex-row justify-end bg-white border-2 border-[#C0C0C0] rounded-lg justify-center items-center">
          <p className="text-[#00994C] font-bold">Contacts</p>

          <Image
            src={BottomArrowIcon}
            width={20}
            height={20}
            alt=""
            className="absolute right-2"
          ></Image>
        </div>

        {/* <div
            className={ 
                updated
                ? "hiddenaw"
                : "absolute block w-4 h-4 bg-red-500 border-2 border-white rounded-full -bottom-0.5 start-7 dark:border-gray-900"
            }
            ></div> */}
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-with-title"
      >
        <div className="p-1 space-y-0.5">
          <div className="divide-y divide-gray-100 dark:divide-gray-700 max-w-[12vw]">
            {newsContent.map((item, index) => {
              return renderPostPerItem(item, index);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderPostPerItem(item, index) {
  return (
    <a
      href="#"
      className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 "
      key={index}
    >
      <div className="flex-shrink-0">
        <Avatar
          className="rounded-full w-11 h-11"
          src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
          alt="Jese image"
          height={30}
          width={30}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        {/* <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
          <svg
            className="w-2 h-2 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
            <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
          </svg>
        </div> */}
      </div>
      <div className="flex w-full ps-3 items-center">
        <span className="font-semibold text-gray-900 dark:text-white">
          {item["name"]}
        </span>
      </div>
    </a>
  );
}
