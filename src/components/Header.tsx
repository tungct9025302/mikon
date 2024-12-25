"use client;";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import icon from "@/assets/icon.png";
import CreatePostImg from "@/assets/create-post.svg";

import LoginDropdown from "@/components/Dropdowns/LoginDropdown";
import NotificationDropdown from "./Dropdowns/NotificationDropdown";
import Searchbar from "@/components/Searchbar";

export default function Header({ accessed }) {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const newsContentList = [
    { type: "message" },
    { type: "followed" },
    { type: "reaction" },
    { type: "comment" },
    { type: "following" },
  ];
  return (
    <div className="flex flex-row px-10 font-bold text-[1.2em] items-center justify-between h-[8vh] bg-[#fdfcfc]">
      <div className="flex flex-row space-x-16 items-center">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
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

      {accessed ? (
        <div className="flex flex-row items-center space-x-8 w-[fit] justify-between">
          <NotificationDropdown
            newsContent={newsContentList}
          ></NotificationDropdown>
          <LoginDropdown></LoginDropdown>
        </div>
      ) : (
        <div className="flex flex-row items-center space-x-8 w-[fit] justify-between">
          <NotificationDropdown
            newsContent={newsContentList}
          ></NotificationDropdown>

          <Image
            className="cursor-pointer"
            src={CreatePostImg}
            width={40}
            height={40}
            alt=""
            onClick={() => {
              router.push("/create-post");
            }}
          ></Image>

          <LoginDropdown></LoginDropdown>
        </div>
      )}
    </div>
  );
}
