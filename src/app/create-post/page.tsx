"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/components/redux/store";

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
import CategoryDropdown from "@/components/Dropdowns/CategoryDropdown";

export default function createpost() {
  let [loading, setLoading] = useState(false);
  let [tagList, setTagList] = useState([""]);
  let [postContent, setPostContent] = useState({
    title: "",
    content: "",
    category: "",
    date: "",
    reactions: "",
    comments: "",
    views: "",
    tags: [""],
    images: [],
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const userid: any = useAppSelector((state: any) => state.value.userid);

  //To be checked
  const [postType, setPostType] = useState(0);
  let postTypes = [{ name: "Post" }];

  function handleChange(e) {
    var value = e.target.value;
    const updatedTags = [...tagList];
    updatedTags[updatedTags.length - 1] = value;

    setTagList(updatedTags);
  }

  function handleKeyDown(e) {
    if (e.code === "Space") {
      e.preventDefault();
      const currentTag = tagList[tagList.length - 1].trim();

      if (currentTag) {
        setTagList([...tagList.slice(0, -1), currentTag, ""]);
      }
    }
  }

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
      <div className="flex flex-row justify-between mx-10 my-5 space-y-2">
        <div className="flex flex-col space-y-2">
          <p className="text-lg text-gray-800 font-semibold">Post Cover</p>
          <div className="flex flex-row rounded-lg rounded-full bg-[#FDFDFD] w-fit py-2 px-5 border-[#CACACA] border-2 space-x-2 cursor-pointer">
            <Image src={CoverIcon} width={30} height={30} alt=""></Image>
            <p className="text-lg text-gray-800 font-semibold">Add Cover</p>
          </div>
        </div>
        <div>
          <CategoryDropdown
            postContent={postContent}
            setPostContent={setPostContent}
          ></CategoryDropdown>
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
          <div className="flex flex-row grid gap-6 mb-6 md:grid-cols-2">
            <div className="">
              <label
                // htmlFor="first_name"
                className="block mb-2 text-lg text-gray-800 font-semibold dark:text-white"
              >
                Title
              </label>
              <input
                name="title"
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
                placeholder="Fill in a title"
                required
                onChange={() => {
                  handleUpdatePostContent(event);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label
                // htmlFor="first_name"
                className="block mb-2 text-lg text-gray-800 font-semibold dark:text-white"
              >
                Tag
              </label>

              {renderTagByIncrement()}
            </div>
          </div>
        </form>
      </div>
    );
  }

  function renderTagByIncrement() {
    return (
      <div>
        <div className="grid grid-cols-2 max-w-[30vw]">
          {tagList.slice(0, -1).map((tag, idx) => (
            <div key={idx} className="flex flex-row">
              <div className="text-3xl text-[#9C9CFF] font-bold">#</div>
              <div className="text-3xl text-[#9C9CFF] font-bold">{tag}</div>
            </div>
          ))}
          <input
            type="text"
            value={tagList[tagList.length - 1] || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="text-2xl text-[#9C9CFF] w-auto min-w-[1vw] bg-transpararent focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0"
          />
        </div>
      </div>
    );
  }

  function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
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
          <div className="my-2 mx-5 ">
            <textarea
              name="content"
              id="content"
              className="w-full h-max outline-0 min-h-[50px] resize-none"
              placeholder="Enter your text here"
              required
              onInput={() => {
                autoResize(document.getElementById("content"));
              }}
              onChange={() => {
                handleUpdatePostContent(event);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  function handleUpdatePostContent(event) {
    setPostContent({ ...postContent, [event.target.name]: event.target.value });
  }

  function renderSubmitButton() {
    return (
      <div
        onClick={() => {
          setPostContent({
            ...postContent,
            tags: tagList,
          });
        }}
        className="flex flex-row rounded-lg rounded-full bg-[#a6edff] w-fit py-2 px-5 border-[#CACACA] border-2 space-x-2 cursor-pointer"
      >
        <p className="text-lg text-gray-800 font-semibold">Post</p>
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

          <div className="flex justify-center mb-6">{renderSubmitButton()}</div>
        </div>
        {/* <div className="min-w-[20vw]">
          <UltilityBox></UltilityBox>
        </div> */}
      </div>
    </div>
  );
}
