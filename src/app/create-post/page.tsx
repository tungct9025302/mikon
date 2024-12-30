"use client";
import { useState } from "react";
import Image from "next/image";

import CoverIcon from "@/assets/cover.svg";
import EmoteIcon from "@/assets/emoji.svg";
import AddImageIcon from "@/assets/add-image.svg";
import AddVideoIcon from "@/assets/add-video.svg";
import BoldIcon from "@/assets/bold.svg";
import UnderlineIcon from "@/assets/under.svg";
import ItalicIcon from "@/assets/italic.svg";
import TextColorIcon from "@/assets/textcolor.svg";
import StrikethroughIcon from "@/assets/strikethrough.svg";
import FontsizeIcon from "@/assets/fontsize.svg";
import TextalignIcon from "@/assets/text-align.svg";
import NumberlistIcon from "@/assets/number-list.svg";
import HeaderIcon from "@/assets/header.svg";

import Header from "@/components/Header";

export default function createpost() {
  const [tab, setTab] = useState(0);
  const [postType, setPostType] = useState(0);
  let postTypes = [{ name: "Post" }];

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

  function renderAddCover() {
    return (
      <div className="flex flex-col mx-10 my-5 space-y-2">
        <p className="text-lg text-gray-800 font-semibold">Post Cover</p>
        <div className="flex flex-row rounded-lg rounded-full bg-[#FDFDFD] w-fit py-2 px-5 border-[#CACACA] border-2 space-x-2 cursor-pointer">
          <Image src={CoverIcon} width={30} height={30} alt=""></Image>
          <p className="text-lg text-gray-800 font-semibold">Add Cover</p>
        </div>
      </div>
    );
  }

  function renderAddTitle() {
    return (
      <div className="flex flex-col mx-10 mt-5 space-y-2">
        {/* <p className="text-lg text-gray-800 font-semibold">Title</p>
        <div className="flex flex-row rounded-lg rounded-full bg-[#f2f2f2] w-fit py-2 px-5 border-[#CACACA] border-2 space-x-2"> */}
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                // htmlFor="first_name"
                className="block mb-2 text-lg text-gray-800 font-semibold dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
                placeholder="Fill in a title"
                required
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  function renderContentSection() {
    return (
      <div className="flex flex-col mx-10 my-5">
        <p className="text-lg text-gray-800 font-semibold">Add Content</p>
        <div className="flex flex-col rounded-lg rounded-full bg-[#FDFDFD] w-full min-h-[30vh] border-[#CACACA] border-2">
          {/* <Image src={CoverIcon} width={30} height={30} alt=""></Image> */}
          <div className="border-b-2 h-fit px-5 w-full py-2 flex flex-row space-x-4">
            {/* <p className="text-lg text-gray-800 font-semibold">Add Cover</p> */}
            <Image src={EmoteIcon} width={25} height={25} alt=""></Image>
            <Image src={AddImageIcon} width={30} height={30} alt=""></Image>
            <Image src={AddVideoIcon} width={35} height={35} alt=""></Image>
            <Image src={BoldIcon} width={30} height={30} alt=""></Image>
            <Image src={ItalicIcon} width={25} height={25} alt=""></Image>
            <Image src={UnderlineIcon} width={40} height={40} alt=""></Image>
            <Image src={FontsizeIcon} width={25} height={25} alt=""></Image>
            <Image
              src={StrikethroughIcon}
              width={30}
              height={30}
              alt=""
            ></Image>
            <Image src={TextColorIcon} width={30} height={30} alt=""></Image>
            <Image src={NumberlistIcon} width={30} height={30} alt=""></Image>
            <Image src={TextalignIcon} width={30} height={30} alt=""></Image>
            <Image src={HeaderIcon} width={50} height={50} alt=""></Image>
          </div>
          <div className="my-2 mx-5">
            <input
              type="text"
              id="first_name"
              className="w-full h-full outline-0"
              placeholder="Enter your text here"
              required
            />
            {/* <p className="text-lg text-gray-400 font-semibold"></p> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header accessedCreate={false} accessedSearch={false}></Header>

      <div className="bg-[#F5F6F7] h-screen flex flex-row justify-center pt-6">
        <div className="min-w-[60vw] bg-[#FFFFFF] rounded-2xl mr-10 h-fit">
          <div className="flex flex-col">
            <div className="flex flex-row min-h-[8vh] items-center space-x-10 pl-8">
              {postTypes.map((item, index) => {
                return renderNavTitle(item, index);
              })}
            </div>
            <div className="border-b"></div>
          </div>

          {/* renderAddPostCover */}
          {renderAddCover()}

          {/* renderAddTitle */}
          {renderAddTitle()}

          {/* renderContentSection */}
          {renderContentSection()}

          {/* renderPost */}
          {/* <Post></Post> */}
        </div>
        {/* <div className="min-w-[20vw]">
          <UltilityBox></UltilityBox>
        </div> */}
      </div>
    </div>
  );
}
