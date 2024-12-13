import React from "react";
import { Avatar } from "@material-tailwind/react";
import Image from "next/image";

import NotificationImg from "@/assets/notification.png";

export default function NotificationDropdown() {
  return (
    <div className="hs-dropdown relative inline-flex">
      {/* <Avatar
        id="hs-dropdown-custom-trigger"
        // type="button"
        className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
        src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
        width={50}
        height={50}
        alt=""
        variant="rounded"   
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      /> */}

      <button
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
        type="button"
      >
        <Image src={NotificationImg} width={40} height={40} alt=""></Image>

        <div className="absolute block w-4 h-4 bg-red-500 border-2 border-white rounded-full -bottom-0.5 start-7 dark:border-gray-900"></div>
      </button>
    </div>
  );
}
