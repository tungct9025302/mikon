"use client";

import React, { useState } from "react";
import LoginIcon from "@/app/assets/login_icon.png";
import DraftIcon from "@/app/assets/draft_icon.svg";

import CreatePostCircle from "@/app/assets/create-post-circle.svg";
import ImagePostCircle from "@/app/assets/image-post-circle.svg";
import VideoPostCircle from "@/app/assets/video-post-circle.svg";

import Add from "@/app/assets/add.svg";
import Followed from "@/app/assets/followed.svg";
import Image from "next/image";

export default function ultilitybox() {
  let i = 3;
  const [followed, setFollowed] = useState(false);
  return (
    <div className="space-y-10">
      <div className="flex flex-col bg-[url('/login_bg.jpeg')] bg-cover min-h-[22vh] rounded-2xl space-y-2 border-2">
        <Image src={LoginIcon} width={50} height={50} alt=""></Image>
        <div className="flex w-full justify-center">
          <div className=" min-w-[200px] w-[15vw]">
            <p className="text-xl font-semibold font-mono text-center">
              Login to save & <br />
              create awesome contents
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="bg-violet-200 hover:bg-violet-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center max-w-[150px] rounded-2xl">
            Log In
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-white bg-cover min-h-[22vh] rounded-2xl space-y-2 border-2">
        <div className="flex flex-row justify-between m-3">
          <p className="text-xl font-semibold font-mono">Post something</p>
          <div className="flex flex-row">
            <Image src={DraftIcon} width={20} height={20} alt={""}></Image>
            <p className="text-[#9C9CFF] font-semibold">Drafts ({i})</p>
          </div>
        </div>

        <div className="flex flex-row justify-evenly w-full min-h-[12vh] place-items-center">
          <div className="flex flex-col items-center">
            <Image src={CreatePostCircle} width={60} height={60} alt=""></Image>
            <p className="font-medium text-lg">Post</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={ImagePostCircle} width={60} height={60} alt=""></Image>
            <p className="font-medium text-lg">Image</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={VideoPostCircle} width={60} height={60} alt=""></Image>
            <p className="font-medium text-lg">Video</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white bg-cover min-h-[22vh] rounded-2xl space-y-2 border-2">
        <div className="flex flex-row justify-between m-5">
          <p className="text-xl font-semibold font-mono">Popular Creator</p>
          {followed ? (
            <div className="flex flex-row space-x-1">
              <Image
                src={Add}
                width={30}
                height={30}
                alt={""}
                onClick={() => {
                  setFollowed(!followed);
                }}
              ></Image>
              <p className="font-semibold">Follow</p>
            </div>
          ) : (
            <div className="flex flex-row space-x-1">
              <Image
                src={Followed}
                width={30}
                height={30}
                alt={""}
                onClick={() => {
                  setFollowed(!followed);
                }}
              ></Image>
              <p className="font-semibold text-[#9C9CFF]  ">Followed</p>
            </div>
          )}
        </div>

        {/* <div className="flex flex-row justify-evenly w-full min-h-[12vh] place-items-center">
          <div className="flex flex-col items-center">
            <Image src={CreatePostCircle} width={60} height={60} alt=""></Image>
            <p className="font-medium text-lg">Post</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={ImagePostCircle} width={60} height={60} alt=""></Image>
            <p className="font-medium text-lg">Image</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={VideoPostCircle} width={60} height={60} alt=""></Image>
            <p className="font-medium text-lg">Video</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
