import React, { useEffect, useState } from "react";
import { Avatar } from "@material-tailwind/react";
import Image from "next/image";
import YoimiyaIcon from "@/assets/yoimiya.png";

//import icons
import CommentIcon from "@/assets/comment-icon.svg";
import HeartIcon from "@/assets/heart.png";
import LikeIcon from "@/assets/like.png";
import Like2Icon from "@/assets/like2.png";
import ViewedIcon from "@/assets/viewed.png";
import HashtagIconWhite from "@/assets/hashtag-white.svg";
import HashtagIcon from "@/assets/hashtag.svg";
import NotLikeIcon from "@/assets/notlike.png";
import AddIcon from "@/assets/Add.svg";
import FollowedIcon from "@/assets/followed.svg";

export default function post() {
  // useEffect(() => {
  //   setLiked(postData["reacted"]);
  // }, []);

  const [liked, setLiked] = useState(false);
  const [reactionCount, setReactionCount] = useState(0);
  const [followed, setFollowed] = useState(false);

  const postSamples = [
    {
      postID: 12,
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
      viewCount: 5223,
      reactionCount: 1232,
      commentCount: 456,
      reacted: false,
      followedStatus: false,
      category: "Genshin Impact",
    },
    {
      postID: 16,
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
      viewCount: 2555,
      reactionCount: 1161,
      commentCount: 45,
      reacted: false,
      followedStatus: false,
      category: "Genshin Impact",
    },
    {
      postID: 17,
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
      viewCount: 24,
      reactionCount: 12,
      commentCount: 1,
      reacted: false,
      followedStatus: true,
      category: "Genshin Impact",
    },
    // {
    //   postID: 25,
    //   avatar: "123",
    //   name: "Phuoc Thinh",
    //   time: "15/6/2024",
    //   title: "Post title",
    //   content: "Post content",
    //   images: [
    //     "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
    //     "https://upload-os-bbs.hoyolab.com/upload/2024/10/21/426332059/02f1d675f0af96627fe19933195a6c42_8003415973668598951.jpg",
    //   ],
    //   tags: ["Black Lives Matter", "Ok"],
    //   viewCount: 24,
    //   reactionCount: 12,
    //   commentCount: 1,
    //   reacted: false,
    //   followedStatus: true,
    //   category: "Genshin Impact",
    // },
  ];

  function handleAddReaction(requestedPostID) {
    for (var i = 0; i < postSamples.length; i++) {
      if (
        postSamples[i]["postID"] == requestedPostID &&
        postSamples[i]["reactionCount"] > 0
      ) {
        postSamples[i]["reactionCount"] += 1;
        postSamples[i]["reacted"] == true;
        setReactionCount(postSamples[i]["reactionCount"]);
      }
    }
  }

  function handleDeduceReaction(requestedPostID) {
    for (var i = 0; i < postSamples.length; i++) {
      if (
        postSamples[i]["postID"] == requestedPostID &&
        postSamples[i]["reactionCount"] > 0
      ) {
        postSamples[i]["reactionCount"] -= 1;
        postSamples[i]["reacted"] == false;
        setReactionCount(postSamples[i]["reactionCount"]);
      }
    }
  }

  function renderPostByData(postData, index) {
    return (
      <div
        key={index}
        className={
          index + 1 == postSamples.length
            ? `p-5 flex flex-col max-h-[50vh]`
            : `p-5 flex flex-col border-b max-h-[50vh]`
        }
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <Avatar
                src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848a8d238bd4e05684e3faf4d4"
                width={60}
                height={60}
                alt=""
                className="m-1 rounded-full"
                variant="rounded"
                placeholder={undefined}
              />
            </div>

            <div className="flex flex-col">
              <div className="text-2xl font-semibold text-black">
                {postData["name"]}
              </div>
              <div className="flex flex-row space-x-5">
                <div className="text-md font-semibold text-zinc-600">
                  {postData["category"]}
                </div>
                <div className="text-md font-normal text-slate-500">
                  {postData["time"]}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-around mx-2 pb-2 items-center pr-5">
            {postData["followedStatus"] ? (
              <div className="flex flex-row space-x-1">
                <Image
                  src={AddIcon}
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
                  src={FollowedIcon}
                  width={30}
                  height={30}
                  alt={""}
                  onClick={() => {
                    setFollowed(!followed);
                  }}
                ></Image>
                <p className="font-semibold text-[#9C9CFF]">Followed</p>
              </div>
            )}
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
                  className="group/tag max-h-[20vh] flex flex-row rounded-xl 
                  p-1 bg-[#FAFAFA] whitespace-nowrap space-x-1 hover:bg-[#B5C1FF]"
                >
                  <Image
                    src={HashtagIcon}
                    width={15}
                    height={15}
                    alt=""
                    className="group-hover/tag:hidden"
                  ></Image>

                  <Image
                    src={HashtagIconWhite}
                    width={15}
                    height={15}
                    alt=""
                    className="hidden group-hover/tag:block"
                  ></Image>

                  <p className="text-[#A6A6FF] font-semibold group-hover/tag:text-white ">
                    {tag}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 mx-4 flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-1">
              <Image src={ViewedIcon} width={30} height={30} alt=""></Image>
              <p className="text-slate-500 font-semibold">
                {postData["viewCount"]}
              </p>
            </div>
            <div className="flex flex-row w-[15vw] justify-between">
              <div className="flex flex-row  items-center">
                <Image src={CommentIcon} width={40} height={40} alt=""></Image>
                <p className="text-slate-500 font-semibold">
                  {postData["commentCount"]}
                </p>
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
                  <div
                    className="flex flex-row items-center space-x-1 border-2 border-transparent rounded-full p-1 bg-[#CEE5FF]"
                    onClick={() => {
                      setLiked(!liked);
                      handleDeduceReaction(postData["postID"]);
                    }}
                  >
                    <Image src={LikeIcon} width={25} height={25} alt=""></Image>
                    <p className="text-slate-500 font-semibold">
                      {/* {postData["reactionCount"]} */}
                      {reactionCount}
                    </p>
                  </div>
                ) : (
                  <div
                    className="flex flex-row items-center space-x-1"
                    onClick={() => {
                      setLiked(!liked);
                      handleAddReaction(postData["postID"]);
                    }}
                  >
                    <Image
                      src={NotLikeIcon}
                      width={25}
                      height={25}
                      alt=""
                    ></Image>
                    <p className="text-slate-500 font-semibold">
                      {postData["reactionCount"]}
                    </p>
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
