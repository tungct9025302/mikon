"use client";
import { useState } from "react";
import { useAppSelector } from "@/components/redux/store";

import Post from "@/components/Post";
import UltilityBox from "@/components/Ultilitybox";
import Header from "@/components/Header";
import ContactDropdown from "@/components/Dropdowns/ContactDropdown";

export default function Homepage() {
  const [postType, setPostType] = useState(0);
  const userid: any = useAppSelector((state: any) => state.value.userid);

  const postTypes = [
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
        onClick={() => setPostType(index)}
      >
        <div className={postType === index ? "pb-2 text-black" : "pb-2"}>
          {item.name}
        </div>
        <div
          className={
            index === postType
              ? "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto"
              : "w-[50%] max-w-[20px] border-b-4 border-sky-600 m-auto invisible group-hover/home:visible"
          }
        ></div>
      </div>
    );
  }

  return (
    <>
      {/* Floating Contact Dropdown */}
      <div className="fixed bottom-4 right-4 z-50">
        <ContactDropdown newsContent={newsContentList} />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col min-h-screen bg-[#F5F6F7]">
        <Header accessedCreate={false} accessedSearch={false} />

        <div className="flex flex-col lg:flex-row justify-center items-start px-4 sm:px-6 md:px-8 pt-6 gap-6">
          <div className="min-w-[50vw] bg-white rounded-2xl shadow-md p-4 md:p-6">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {postTypes.map((item, index) => renderNavTitle(item, index))}
            </div>
            <div className="border-b my-4"></div>

            {/* Posts */}
            <Post />
          </div>

          <div className="min-w-[20vw] w-full lg:w-auto">
            <UltilityBox />
          </div>
        </div>
      </div>
    </>
  );
}
