"use client";
import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

import Image from "next/image";
import icon from "@/assets/icon.png";
import NotificationImg from "@/assets/notification.png";
import CreatePostImg from "@/assets/create-post.svg";

import LoginDropdown from "@/components/Dropdown";
import Searchbar from "@/components/Searchbar";
import Post from "@/components/Post";
import UltilityBox from "@/components/Ultilitybox";

export default function homepage() {
  // const router = useRouter();
  const [tab, setTab] = useState(0);
  const [postType, setPostType] = useState(0);
  let postTypes = [
    { name: "Recommended" },
    { name: "Following" },
    { name: "Your posts" },
  ];

  function renderNavTitle(item, index) {
    return (
      <div
        key={index}
        className="text-zinc-400 group/home cursor-pointer font-bold text-[1.2em]"
        onClick={() => {
          setPostType(index);
        }}
      >
        <div className={postType == index ? "pb-2  text-black" : "pb-2"}>
          {item["name"]}
        </div>

        <div
          className={
            index == postType
              ? "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto"
              : "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto group-hover/home:visible invisible"
          }
        ></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
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
          <div className="">
            <Image src={NotificationImg} width={40} height={40} alt=""></Image>
          </div>
          <div className="" onClick={() => {}}>
            <Link href="/create-post">
              <Image src={CreatePostImg} width={40} height={40} alt=""></Image>
            </Link>
          </div>
          <LoginDropdown></LoginDropdown>
        </div>
      </div>

      <div className="bg-[#F5F6F7] h-screen flex flex-row justify-center pt-6">
        <div className="min-w-[50vw] bg-[#FFFFFF] rounded-2xl mr-10 h-fit">
          <div className="flex flex-col">
            <div className="flex flex-row min-h-[8vh] items-center space-x-10 pl-8">
              {postTypes.map((item, index) => {
                return renderNavTitle(item, index);
              })}
            </div>
            <div className="border-b"></div>
          </div>

          {/* renderPost */}
          <Post></Post>
        </div>
        <div className="min-w-[20vw]">
          <UltilityBox></UltilityBox>
        </div>
      </div>
    </div>
  );
}
