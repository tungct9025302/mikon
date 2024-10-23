"use client";
import { useState } from "react";

import Image from "next/image";
import icon from "../app/assets/icon.png";
import NotificationImg from "../app/assets/notification.png";
import CreatePostImg from "../app/assets/create-post.svg";
import { Avatar } from "@material-tailwind/react";
import Searchbar from "./components/page";

export default function homepage() {
  const [hover, setHover] = useState();

  return (
    <div className="flex flex-row px-10  font-bold text-[1.2em] items-center justify-between h-[70px] bg-[#fdfcfc]">
      <div className="flex flex-row space-x-16 items-center">
        <div>
          <Image src={icon} width={200} height={50} alt=""></Image>
        </div>
        <div className="hover:text-black  text-zinc-400">
          <div className="pb-2">Home</div>

          <div className="w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto "></div>
        </div>
        <div className="hover:text-black text-zinc-400">
          <div className="pb-2">Categories</div>

          <div className="w-[50%] max-w-[20px]  border-b-4 border-sky-600 m-auto"></div>
        </div>
      </div>

      <div className="w-[26vw] items-center">
        <Searchbar />
      </div>

      <div className="flex flex-row items-center w-[10vw] justify-between">
        <div className="">
          <Image src={NotificationImg} width={40} height={40} alt=""></Image>
        </div>

        <div className="">
          <Image src={CreatePostImg} width={40} height={40} alt=""></Image>
        </div>

        <Avatar
          src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
          width={50}
          height={50}
          alt=""
          variant="rounded"
        />
      </div>
    </div>
  );
}
