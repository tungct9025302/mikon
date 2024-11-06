import React from "react";
import { Avatar } from "@material-tailwind/react";
import YoimiyaIcon from "@/app/assets/yoimiya.png";

export default function post() {
  const postSamples = [
    {
      avatar: "123",
      name: "Phuoc Thinh",
      time: "11/6/2024",
      title: "Post title",
      content: "abcccccc",
      images: [
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
        "https://upload-os-bbs.hoyolab.com/upload/2024/10/21/426332059/02f1d675f0af96627fe19933195a6c42_8003415973668598951.jpg",
      ],
      reaction: "123",
      followStatus: "123",
    },
    // {
    //   avatar: "123",
    //   name: "123",
    //   title: "123",
    //   content: "123",
    //   image: "123",
    //   reaction: "123",
    //   followStatus: "123",
    // },
  ];

  function renderPostByData(postData, index) {
    return (
      <div key={index} className="m-5 flex flex-col">
        <div className="flex flex-row items-center">
          <div className="mr-2">
            <Avatar
              src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848a8d238bd4e05684e3faf4d4"
              width={60}
              height={60}
              alt=""
              className="m-1 rounded-full"
              variant="rounded"
              //   onClick={() => {
              //     setSelected(false);
              //   }}
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

        <div className="flex flex-col">
          <div className="text-2xl font-medium text-black">
            {postData["title"]}
          </div>
          <div className="text-md font-normal text-slate-600">
            {postData["content"]}
          </div>

          <div className="flex flex-row space-x-4">
            {postData["images"].map((imageSrc) => {
              return (
                <div className="">
                  <img
                    src={imageSrc}
                    className="max-h-[20vh] max-w-[20vw]"
                  ></img>
                </div>
              );
            })}
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
