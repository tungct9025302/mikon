"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/components/redux/store";

import Post from "@/components/Post";
import UltilityBox from "@/components/Ultilitybox";
import Header from "@/components/Header";
import Image from "next/image";
import ContactDropdown from "@/components/Dropdowns/ContactDropdown";

export default function homepage() {
  const [postType, setPostType] = useState(0);
  const username: any = useAppSelector((state: any) => state.value.username);
  let postTypes = [
    { name: "Recommended" },
    { name: "Following" },
    { name: "Your posts" },
  ];
  const newsContentList = [
    { name: "Linh bên cồn" },
    { name: "Tú bên cồn" },
    { name: "Lan bên cồn" },
    { name: "Tâm bên cồn" },
    { name: "Minh bên cồn" },
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

  // function displayContactRow() {
  //   return (
  //     <a
  //       href="#"
  //       className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
  //       key={index}
  //     >
  //       <div className="flex-shrink-0">
  //         <Avatar
  //           className="rounded-full w-11 h-11"
  //           src="https://pbs.twimg.com/media/E7-lsfNWEAUfLAW?format=png&name=small"
  //           alt="Jese image"
  //           height={50}
  //           width={50}
  //           placeholder={undefined}
  //           onPointerEnterCapture={undefined}
  //           onPointerLeaveCapture={undefined}
  //         />
  //         <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
  //           <svg
  //             className="w-2 h-2 text-white"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="currentColor"
  //             viewBox="0 0 20 14"
  //           >
  //             <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
  //           </svg>
  //         </div>
  //       </div>
  //       <div className="w-full ps-3">
  //         <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
  //           <span className="font-semibold text-gray-900 dark:text-white">
  //             Robert Brown{" "}
  //           </span>
  //           posted a new video: Glassmorphism - learn how to implement the new
  //           design trend.{" "}
  //         </div>
  //         <div className="text-xs text-blue-600 dark:text-blue-500">
  //           3 hours ago{" "}
  //         </div>
  //       </div>
  //     </a>
  //   );
  // }

  return (
    <>
      <div className="fixed bottom-0 right-0">
        <ContactDropdown newsContent={newsContentList}></ContactDropdown>
      </div>
      <div className="flex flex-col">
        <Header accessedCreate={false} accessedSearch={false}></Header>
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
    </>
  );
}
