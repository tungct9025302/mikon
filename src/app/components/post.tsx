import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";
import Image from "next/image";
import YoimiyaIcon from "@/app/assets/yoimiya.png";

//import icons
import CommentIcon from "@/app/assets/comment-icon.svg";
import HeartIcon from "@/app/assets/heart.png";
import LikeIcon from "@/app/assets/like.png";
import Like2Icon from "@/app/assets/like2.png";
import ViewedIcon from "@/app/assets/viewed.png";
import HashtagIcon from "@/app/assets/hashtag.svg";
import NotLikeIcon from "@/app/assets/notlike.png";

export default function post() {
  const [liked, setLiked] = useState(false);

  const postSamples = [
    {
      avatar: "123",
      name: "Phuoc Thinh",
      time: "14/6/2024",
      title: "Post title",
      content: "Post content",
      images: [
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/21/426332059/02f1d675f0af96627fe19933195a6c42_8003415973668598951.jpg",
      ],
      tags: ["Black Lives Matter", "123"],
      reaction: "123",
      followStatus: "123",
    },
    {
      avatar: "123",
      name: "Phuoc Thinh",
      time: "15/6/2024",
      title: "Post title",
      content: "Post content",
      images: [
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/21/426332059/02f1d675f0af96627fe19933195a6c42_8003415973668598951.jpg",
      ],
      tags: ["Black Lives Matter", "Ok"],
      reaction: "123",
      followStatus: "123",
    },
    {
      avatar: "123",
      name: "Phuoc Thinh",
      time: "15/6/2024",
      title: "Post title",
      content: "Post content",
      images: [
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/21/426332059/02f1d675f0af96627fe19933195a6c42_8003415973668598951.jpg",
      ],
      tags: ["Black Lives Matter", "Ok"],
      reaction: "123",
      followStatus: "123",
    },
  ];

  function handleAddLike() {
    console.log("liked");
  }

  function renderPostByData(postData, index) {
    return (
      <div key={index} className="p-5 flex flex-col border-b">
        <div className="flex flex-row items-center">
          <div className="mr-2">
            <Avatar
              src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848a8d238bd4e05684e3faf4d4"
              width={60}
              height={60}
              alt=""
              className="m-1 rounded-full"
              variant="rounded"
            />
          </div>

          <div className="flex flex-col">
            <div className="text-2xl font-semibold text-black">
              {postData["name"]}
            </div>
            <div className="text-md font-normal text-slate-500">
              {postData["time"]}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="">
            <p className="text-2xl font-medium text-black">
              {postData["title"]}
            </p>
          </div>
          <div className="">
            <p className="text-md font-normal text-slate-600">
              {postData["content"]}
            </p>
          </div>

          <div className="flex flex-row space-x-4">
            {postData["images"].map((imageSrc, index) => {
              return (
                <div key={index} className="">
                  <img
                    src={imageSrc}
                    className="max-h-[20vh] max-w-[20vw] rounded-xl"
                  ></img>
                </div>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-row space-x-4 rounded-xl">
            {postData["tags"].map((tag, index) => {
              return (
                <div
                  key={index}
                  className="max-h-[20vh] flex flex-row rounded-xl p-1 bg-[#FAFAFA] whitespace-nowrap space-x-1"
                >
                  <Image
                    src={HashtagIcon}
                    width={15}
                    height={15}
                    alt=""
                    className=""
                  ></Image>
                  <p className="text-[#A6A6FF] font-semibold">{tag}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 mx-4 flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-1">
              <Image src={ViewedIcon} width={30} height={30} alt=""></Image>
              <p className="text-slate-500 font-semibold">123</p>
            </div>
            <div className="flex flex-row w-[15vw] justify-between">
              <div className="flex flex-row  items-center">
                <Image src={CommentIcon} width={40} height={40} alt=""></Image>
                <p className="text-slate-500 font-semibold">123</p>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center space-x-1 mr-2">
                  <div className="absolute">
                    <Image
                      src={Like2Icon}
                      width={30}
                      height={30}
                      alt=""
                    ></Image>
                  </div>
                  <div className="relative pl-2">
                    <Image
                      src={HeartIcon}
                      width={30}
                      height={30}
                      alt=""
                    ></Image>
                  </div>
                </div>

                {liked ? (
                  <div className="flex flex-row items-center space-x-1 border-2 border-transparent rounded-full p-1 bg-[#CEE5FF]">
                    <Image
                      src={LikeIcon}
                      width={25}
                      height={25}
                      alt=""
                      onClick={() => {
                        setLiked(!liked);
                      }}
                    ></Image>
                    <p className="text-slate-500 font-semibold">123</p>
                  </div>
                ) : (
                  <div className="flex flex-row items-center space-x-1">
                    <Image
                      src={NotLikeIcon}
                      width={25}
                      height={25}
                      alt=""
                      onClick={() => {
                        setLiked(!liked);
                        handleAddLike();
                      }}
                    ></Image>
                    <p className="text-slate-500 font-semibold">123</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {postSamples.map((postData, index) => {
        return renderPostByData(postData, index);
      })}
    </div>
  );
}
