"use client;";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import icon from "@/assets/icon.png";
import NotificationImg from "@/assets/notification.png";
import CreatePostImg from "@/assets/create-post.svg";

import LoginDropdown from "@/components/Dropdowns/LoginDropdown";
import NotificationDropdown from "./Dropdowns/NotificationDropdown";
import Searchbar from "@/components/Searchbar";

export default function Header() {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-row px-10 font-bold text-[1.2em] items-center justify-between h-[8vh] bg-[#fdfcfc]">
      <div className="flex flex-row space-x-16 items-center">
        <div>
          <Image src={icon} width={200} height={50} alt=""></Image>
        </div>
        <div
          className="text-zinc-400 group/home cursor-pointer"
          onClick={() => {
            setTab(0);
          }}
        >
          <div className={tab == 0 ? "pb-2  text-black" : "pb-2"}>Home</div>

          <div
            className={
              tab == 0
                ? "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto"
                : "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto group-hover/home:visible invisible"
            }
          ></div>
        </div>
        <div
          className="hover:text-black text-zinc-400 group/categories cursor-pointer"
          onClick={() => {
            setTab(1);
          }}
        >
          <div className={tab == 1 ? "pb-2 text-black" : "pb-2"}>
            Categories
          </div>

          <div
            className={
              tab == 1
                ? "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto"
                : "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto group-hover/categories:visible invisible group-hover/categories:home"
            }
          ></div>
        </div>
      </div>

      <div className="w-[26vw] items-center">
        <Searchbar />
      </div>

      <div className="flex flex-row items-center w-[11vw] justify-between">
        <NotificationDropdown></NotificationDropdown>
        <div className="" onClick={() => {}}>
          <Link href="/create-post">
            <Image src={CreatePostImg} width={40} height={40} alt=""></Image>
          </Link>
        </div>
        <LoginDropdown></LoginDropdown>
      </div>
    </div>
  );
}
