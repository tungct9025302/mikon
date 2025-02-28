"use clients;";
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-tailwind/react";
import Image from "next/image";

import CloseIcon from "@/assets/close.svg";
import MinimizeIcon from "@/assets/minimize.svg";
import SendIcon from "@/assets/send-message.svg";

export default function ChatBox({ user }) {
  return (
    <div className="flex flex-col min-w-[20vw]">
      <div className="flex justify-between px-2 border-b ">
        <div className="py-2 pl-2 flex flex-row items-center space-x-2">
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
          </div>

          <p className="font-semibold">{user}</p>
        </div>
        <div className="flex flex-row space-x-3">
          <Image src={MinimizeIcon} width={24} height={24} alt=""></Image>
          <Image src={CloseIcon} width={24} height={24} alt=""></Image>
        </div>
      </div>
      <div className="min-h-[30vh] border-b">123</div>
      <div className="flex flex-row space-x-2 ml-2 my-2">
        <div className=" flex flex-row rounded-full bg-[#f2f2f2] p-2 w-full">
          123
        </div>
        <Image src={SendIcon} width={24} height={24} alt=""></Image>
      </div>
    </div>
  );
}
