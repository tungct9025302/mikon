"use client;";
import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import Image from "next/image";

import NotificationImg from "@/assets/notification.png";

export default function NotificationDropdown({ newsContent }) {
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
        <Image src={NotificationImg} width={40} height={40} alt=""></Image>

        <div
          className={
            updated
              ? "hiddenaw"
              : "absolute block w-4 h-4 bg-red-500 border-2 border-white rounded-full -bottom-0.5 start-7 dark:border-gray-900"
          }
        ></div>
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-with-title"
      >
        <div className="p-1 space-y-0.5">
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {newsContent.map((item) => {
              return renderPostPerItem(item);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderPostPerItem(item) {
  switch (item["type"]) {
    case "message":
      return (
        <a
          href="#"
          className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          key={item}
        >
          <div className="flex-shrink-0">
            <Avatar
              className="rounded-full w-11 h-11"
              src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
              alt="Jese image"
              height={50}
              width={50}
            />
            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
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
            </div>
          </div>
          <div className="w-full ps-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              New message from
              <span className="font-semibold text-gray-900 dark:text-white">
                Jese Leos
              </span>
              : "Hey, what's up? All set for the presentation?"
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">
              a few moments ago
            </div>
          </div>
        </a>
      );
    case "followed":
      return (
        <a
          href="#"
          className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          key={item}
        >
          <div className="flex-shrink-0">
            <Avatar
              className="rounded-full w-11 h-11"
              src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
              alt="Jese image"
              height={50}
              width={50}
            />
            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
              <svg
                className="w-2 h-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
              </svg>
            </div>
          </div>
          <div className="w-full ps-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">
                Joseph Mcfall
              </span>{" "}
              and{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                5 others
              </span>{" "}
              started following you.
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">
              10 minutes ago
            </div>
          </div>
        </a>
      );

    case "reaction":
      return (
        <a
          href="#"
          className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          key={item}
        >
          <div className="flex-shrink-0">
            <Avatar
              className="rounded-full w-11 h-11"
              src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
              alt="Jese image"
              height={50}
              width={50}
            />{" "}
            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
              <svg
                className="w-2 h-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
            </div>
          </div>
          <div className="w-full ps-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>{" "}
              and{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                141 others
              </span>{" "}
              love your story. See it and view more stories.
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">
              44 minutes ago
            </div>
          </div>
        </a>
      );
    case "comment":
      return (
        <a
          href="#"
          className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          key={item}
        >
          <div className="flex-shrink-0">
            <Avatar
              className="rounded-full w-11 h-11"
              src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
              alt="Jese image"
              height={50}
              width={50}
            />{" "}
            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
              <svg
                className="w-2 h-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
              </svg>
            </div>
          </div>
          <div className="w-full ps-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">
                Leslie Livingston
              </span>{" "}
              mentioned you in a comment:{" "}
              <span className="font-medium text-blue-500">@bonnie.green</span>{" "}
              what do you say?
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">
              1 hour ago
            </div>
          </div>
        </a>
      );
    case "following":
      return (
        <a
          href="#"
          className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          key={item}
        >
          <div className="flex-shrink-0">
            <Avatar
              className="rounded-full w-11 h-11"
              src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
              alt="Jese image"
              height={50}
              width={50}
            />{" "}
            <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
              <svg
                className="w-2 h-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
            </div>
          </div>
          <div className="w-full ps-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">
                Robert Brown
              </span>{" "}
              posted a new video: Glassmorphism - learn how to implement the new
              design trend.
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">
              3 hours ago
            </div>
          </div>
        </a>
      );
  }
}
