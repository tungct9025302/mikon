"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@material-tailwind/react";
import { useParams } from "next/navigation";

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
import Header from "@/components/Header";

export default function SearchValue() {
  const params = useParams();
  const [accessed, setAccessed] = useState(false);
  var paramValue: any = params["searchResultValue"].slice(9);
  var decodedValue = decodeURIComponent(paramValue);
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
    {
      gameName: "Darksouls I",
      postNumber: 23,
      gameIconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/41861df08084b5a2b292dc2e106faa2c.png",
    },
    {
      gameName: "Strinova",
      postNumber: 51,
      gameIconUrl:
        "https://cdn2.steamgriddb.com/logo_thumb/1c31b8e34f89e0aa7823024ca0d9aa01.png",
    },
    {
      gameName: "Darksouls II",
      postNumber: 115,
      gameIconUrl:
        "https://cdn2.steamgriddb.com/icon_thumb/56e35bb7fdbbc6570acb607ad4ab4be0.png",
    },
  ];

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

  function renderResult(item, index) {
    return (
      <div
        key={index}
        className="flex flex-row items-start px-5 items-center text-center cursor-pointer hover:bg-[#F5F5F5] min-h-[80px]"
      >
        <div className="flex flex-row space-between">
          <div className="flex flex-row items-center">
            {/* {defineMedal(index)} */}
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
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
        {/* <div>
          <p className="text-slate-500 font-semibold">
            {item.postNumber} posts
          </p>
        </div> */}
      </div>
    );
  }

  function renderSearchValues() {
    return (
      <div className="flex flex-col bg-white bg-cover min-h-[24vh] h-fit rounded-2xl border-2 min-w-[60vw]">
        <div className="flex flex-row justify-between p-5 border-b">
          <p className="text-xl font-semibold font-mono">Search result:</p>
        </div>
        {/* 1 */}

        {sampleData
          .filter((item) =>
            item["gameName"]
              .toLowerCase()
              .includes(decodeURIComponent(decodedValue).toLowerCase())
          )
          .map((item, index) => {
            return renderResult(item, index);
          })}
      </div>
    );
  }

  // return <div>{renderWeeklyPopularGames()}</div>;

  return (
    <div className="flex flex-col">
      <Header accessedCreate={false} accessedSearch={true}></Header>
      <div className="bg-[#F5F6F7] h-fit min-h-[92vh] flex flex-row justify-center pt-6">
        {renderSearchValues()}
      </div>
    </div>
  );
}
