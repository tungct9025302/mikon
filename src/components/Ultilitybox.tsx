"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@material-tailwind/react";

import LoginIcon from "@/assets/login_icon.png";
import DraftIcon from "@/assets/draft_icon.svg";
import FollowerIcon from "@/assets/follower.svg";

import CreatePostCircle from "@/assets/create-post-circle.svg";
import ImagePostCircle from "@/assets/image-post-circle.svg";
import VideoPostCircle from "@/assets/video-post-circle.svg";

import AddIcon from "@/assets/Add.svg";
import FollowedIcon from "@/assets/followed.svg";

import GoldenMedal from "@/assets/golden-medal.svg";
import SilverMedal from "@/assets/silver-medal.svg";
import BronzeMedal from "@/assets/bronze-medal.svg";

export default function ultilitybox() {
  let i = 3;
  const [followed, setFollowed] = useState(false);

  const creatorList = [
    {
      name: "Huynh Quang Phuoc Thinh",
      followerCount: 12.032,
      category: "Genshin Impact",
      followedStatus: true,
      images: [
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
      ],
    },
    {
      name: "User 1",
      followerCount: 1.059,
      category: "Honkai Impact",
      followedStatus: false,
      images: [
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
      ],
    },
  ];

  const sampleData = [
    {
      gameName: "Genshin Impact",
      postNumber: 1125,
      gameIconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/ac4e7a4f341e7281b0f6f274f9ec3905.png",
    },
    {
      gameName: "Honkai Impact",
      postNumber: 912,
      gameIconUrl:
        "https://cdn2.steamgriddb.com/icon/b81280cd90bc1a6cfbb1183a61abc1d8/32/256x256.png",
    },
    {
      gameName: "Honkai Star Rail",
      postNumber: 892,
      gameIconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/ec01a34f7fc3b03448cc52f2a89d52e8.png",
    },
  ];

  function renderPostByGame(item, index) {
    function defineMedal(index) {
      switch (index) {
        case 0:
          return (
            <div>
              <Image src={GoldenMedal} width={30} height={30} alt=""></Image>
            </div>
          );
        case 1:
          return (
            <div>
              <Image src={SilverMedal} width={30} height={30} alt=""></Image>
            </div>
          );
        case 2:
          return (
            <div>
              <Image src={BronzeMedal} width={30} height={30} alt=""></Image>
            </div>
          );
        default:
          return <div></div>;
      }
    }

    return (
      <div
        key={index}
        className="flex flex-row items-start justify-between mx-5 mb-2 items-center text-center"
      >
        <div className="flex flex-row space-between">
          <div className="flex flex-row items-center">
            {defineMedal(index)}
            <div className="mr-2">
              <p className="text-lg font-semibold text-black">
                {item.gameName}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[10vw]">
          <Avatar
            src={item["gameIconUrl"]}
            width={40}
            height={40}
            alt=""
            className="m-1 rounded-full"
            variant="rounded"
            placeholder={undefined}
          />
        </div>
        <div>
          <p className="text-slate-500 font-semibold">
            {item.postNumber} posts
          </p>
        </div>
      </div>
    );
  }

  function renderLoginBox() {
    return (
      <div className="flex flex-col bg-[url('/login_bg.jpeg')] bg-cover min-h-[20vh] rounded-2xl space-y-2 border-2  max-w-[20vw] pb-5">
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
    );
  }

  function renderQuickActionBox() {
    return (
      <div
        className="flex flex-col bg-white bg-cover  rounded-2xl space-y-2 border-2  max-w-[20vw] 
    "
      >
        <div className="flex flex-row justify-between m-3">
          <p className="text-xl font-semibold font-mono">Post something</p>
          <div className="flex flex-row">
            <Image src={DraftIcon} width={20} height={20} alt={""}></Image>
            <p className="text-[#9C9CFF] font-semibold">Drafts ({i})</p>
          </div>
        </div>

        <div className="flex flex-row justify-evenly w-full min-h-[16vh] w-full items-center">
          <div className="flex flex-col items-center">
            <Link href="/create-post">
              <Image
                src={CreatePostCircle}
                width={60}
                height={60}
                alt=""
              ></Image>
              <div className="text-center">
                <p className="font-medium text-lg">Post</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/create-post">
              <Image
                src={ImagePostCircle}
                width={60}
                height={60}
                alt=""
              ></Image>
              <div className="text-center">
                <p className="font-medium text-lg">Image</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/create-post">
              <Image
                src={VideoPostCircle}
                width={60}
                height={60}
                alt=""
              ></Image>
              <div className="text-center">
                <p className="font-medium text-lg">Video</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  function renderPopularCreatorBox() {
    function generateCreatorBoxes(creator, index) {
      return (
        <div
          key={index}
          className="flex flex-col hover:bg-sky-50 hover:rounded-2xl m-2 p-1 space-y-2"
        >
          <div className="flex flex-row items-start justify-between mx-2 items-center">
            <div className="flex flex-row">
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

              <div className="max-w-[8vw]">
                <p className="text-xl font-semibold text-black">
                  {creator["name"]}
                </p>
              </div>
            </div>

            {creator["followedStatus"] ? (
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

          <div className="flex flex-row space-x-4 overflow-x-scroll">
            {creator["images"].map((imageSrc, index) => {
              return (
                <div key={index} className="max-h-[15vh]">
                  <img
                    src={imageSrc}
                    className="max-h-[15vh] max-w-[20vw] rounded-xl"
                  ></img>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row px-5 justify-around">
            <div className="flex flex-row space-x-1">
              <Image src={FollowerIcon} width={20} height={20} alt=""></Image>
              <p className="text-slate-500 font-semibold">
                {creator["followerCount"]}
              </p>
            </div>
            <p className="text-black-500 font-semibold text-lg">
              {creator["category"]}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col bg-white bg-cover min-h-[24vh] rounded-2xl space-y-2 border-2 max-w-[20vw] pb-2">
        <div className="flex flex-row justify-between m-5">
          <p className="text-xl font-semibold font-mono">Popular Creators</p>
        </div>
        {creatorList.map((item, index) => {
          return generateCreatorBoxes(item, index);
        })}
      </div>
    );
  }

  function renderWeeklyPopularGames() {
    return (
      <div className="flex flex-col bg-white bg-cover min-h-[24vh] rounded-2xl space-y-2 border-2 max-w-[20vw] pb-5">
        <div className="flex flex-row justify-between m-5">
          <p className="text-xl font-semibold font-mono">
            Popular Games This Week
          </p>
        </div>
        {/* 1 */}
        {sampleData.map((item, index) => {
          return renderPostByGame(item, index);
        })}
      </div>
    );
  }

  function renderContactUs() {
    return (
      <div className="flex flex-col space-y-5 min-h-[24vh] mx-2">
        <div className="flex flex-col">
          <p className="text-xl text-slate-500 font-semibold">Contact Us</p>
          <p className="text-md text-gray-800">(+84)-0123 456 789</p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl text-slate-500 font-semibold">
            Customer support
          </p>
          <p className="text-md text-gray-800">anhhenempickleball@cs.com</p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl text-slate-700 font-semibold">Copyright</p>
          <p className="text-md text-gray-800 font-semibold">
            © 2024 Single-member limited liability Co.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Render Login Ultility box */}
      {renderLoginBox()}

      {/* Render Quick action box */}
      {renderQuickActionBox()}

      {/* Render Popular creator box */}
      {renderPopularCreatorBox()}

      {/* Render Popular games this week */}
      {renderWeeklyPopularGames()}

      {/* Render Contact Us */}
      {renderContactUs()}
    </div>
  );
}
