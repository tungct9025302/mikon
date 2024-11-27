"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";

import LoginIcon from "@/app/assets/login_icon.png";
import DraftIcon from "@/app/assets/draft_icon.svg";
import FollowerIcon from "@/app/assets/follower.svg";

import CreatePostCircle from "@/app/assets/create-post-circle.svg";
import ImagePostCircle from "@/app/assets/image-post-circle.svg";
import VideoPostCircle from "@/app/assets/video-post-circle.svg";

import AddIcon from "@/app/assets/Add.svg";
import FollowedIcon from "@/app/assets/followed.svg";

import GoldenMedal from "@/app/assets/golden-medal.svg";
import SilverMedal from "@/app/assets/silver-medal.svg";
import BronzeMedal from "@/app/assets/bronze-medal.svg";

export default function ultilitybox() {
  let i = 3;
  const [followed, setFollowed] = useState(false);

  const creatorList = ["test", "test1"];

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
        className="flex flex-row items-start justify-around mx-2 mb-2 items-center text-center"
      >
        <div className="flex flex-row space-between">
          <div className="flex flex-row items-center">
            {defineMedal(index)}
            <div className="mr-2">
              {/* <Avatar
        src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848a8d238bd4e05684e3faf4d4"
        width={60}
        height={60}
        alt=""
        className="m-1 rounded-full"
        variant="rounded"
      /> */}
              <p className="text-lg font-semibold text-black">
                {item.gameName}
              </p>
            </div>
            <div className="max-w-[10vw]">
              <Avatar
                src={item["gameIconUrl"]}
                width={40}
                height={40}
                alt=""
                className="m-1 rounded-full"
                variant="rounded"
              />
            </div>
          </div>
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
      <div className="flex flex-col bg-[url('/login_bg.jpeg')] bg-cover min-h-[24vh] rounded-2xl space-y-2 border-2  max-w-[20vw] pb-5">
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
      <div className="flex flex-col bg-white bg-cover min-h-[24vh] rounded-2xl space-y-2 border-2  max-w-[20vw]  pb-5">
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
    );
  }

  function renderPopularCreatorBox() {
    function generateCreatorBoxes(item, index) {
      return (
        <div
          key={index}
          className="flex flex-col hover:bg-sky-50 hover:rounded-2xl m-2 p-1"
        >
          <div className="flex flex-row items-start justify-around mx-2 pb-2 items-center">
            <div className="flex flex-row">
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

              <div className="max-w-[8vw]">
                <p className="text-xl font-semibold text-black">
                  Huynh Quang Phuoc Thinh
                </p>
              </div>
            </div>

            {followed ? (
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

          <div className="flex flex-row px-5 pb-5 justify-around">
            <div className="flex flex-row space-x-1">
              <Image src={FollowerIcon} width={20} height={20} alt=""></Image>
              <p className="text-slate-500 font-semibold">12.032</p>
            </div>
            <p className="text-black-500 font-semibold text-lg">
              Genshin Impact
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col bg-white bg-cover min-h-[24vh] rounded-2xl space-y-2 border-2 max-w-[20vw]  pb-5">
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
      <div className="flex flex-col">
        <div>
          <p className="text-xl text-slate-400 font-semibold">Contact Us</p>
        </div>
        <div> 123</div>
        <div> 123</div>
        <div> 123</div>
        <div> 123</div>
        <div> 123</div>
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
