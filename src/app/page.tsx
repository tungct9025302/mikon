"use client";
import { useState } from "react";
import { useRouter } from "next/router";

import Post from "@/components/Post";
import UltilityBox from "@/components/Ultilitybox";
import Header from "@/components/Header";

export default function homepage() {
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
      <Header accessed={false}></Header>
      <div className="bg-[#F5F6F7] h-full flex flex-row justify-center pt-6">
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
