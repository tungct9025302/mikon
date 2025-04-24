import React, { useState, useEffect } from "react";
import { Avatar } from "@material-tailwind/react";
import Image from "next/image";
import { getPosts } from "@/app/api";
import { useAppSelector } from "./redux/store";

// Import icons
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

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
  const userid: any = useAppSelector((state: any) => state.value.userid);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts(userid);
      console.log(result);
      const enrichedPosts = result.map((post) => ({
        ...post,
        images: post.images?.length
          ? post.images
          : [
              "https://upload-os-bbs.hoyolab.com/upload/2024/10/27/25120baa629fb211cfed00be760c9151_8651106814651433978.png",
              "https://upload-os-bbs.hoyolab.com/upload/2024/10/21/426332059/02f1d675f0af96627fe19933195a6c42_8003415973668598951.jpg",
            ],
      }));

      setPosts(enrichedPosts);
    };

    if (userid) {
      fetchPosts();
    }
  }, [userid]);

  const toggleFollow = () => setFollowed(!followed);
  const toggleLike = () => setLiked(!liked);

  function renderPostByData(postData, index) {
    return (
      <div
        key={index}
        className={`p-5 flex flex-col ${
          index + 1 === posts.length ? "" : "border-b"
        }`}
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex items-center space-x-3 mb-3 sm:mb-0">
            <Avatar
              src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da848a8d238bd4e05684e3faf4d4"
              width={60}
              height={60}
              alt="Avatar"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-xl sm:text-2xl font-semibold text-black">
                {postData.username}
              </p>
              <div className="flex space-x-3 sm:space-x-5 items-center">
                <p className="text-md sm:text-lg font-semibold text-zinc-600">
                  {postData.category}
                </p>
                <p className="text-sm sm:text-md text-slate-500">
                  {postData.date}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {postData.followedStatus ? (
              <div className="flex space-x-1">
                <Image
                  src={FollowedIcon}
                  width={30}
                  height={30}
                  alt="Followed"
                  onClick={toggleFollow}
                />
                <p className="font-semibold text-[#9C9CFF]">Followed</p>
              </div>
            ) : (
              <div className="flex space-x-1">
                <Image
                  src={AddIcon}
                  width={30}
                  height={30}
                  alt="Follow"
                  onClick={toggleFollow}
                />
                <p className="font-semibold">Follow</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-lg sm:text-2xl font-medium text-black">
            {postData.title}
          </p>
          <p className="text-sm sm:text-md text-slate-600">
            {postData.content}
          </p>
          <div className="flex flex-wrap space-x-4">
            {postData.images.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                className="max-h-[30vh] sm:max-h-[40vh] max-w-full sm:max-w-[45%] rounded-xl object-cover mb-3 sm:mb-0"
              />
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap space-x-4">
            {postData.tags.map((tag, index) => (
              <div
                key={index}
                className="group/tag flex items-center space-x-2 p-1 bg-[#FAFAFA] rounded-xl hover:bg-[#B5C1FF]"
              >
                <Image
                  src={HashtagIcon}
                  width={15}
                  height={15}
                  alt="Tag"
                  className="group-hover/tag:hidden"
                />
                <Image
                  src={HashtagIconWhite}
                  width={15}
                  height={15}
                  alt="Tag"
                  className="hidden group-hover/tag:block"
                />
                <p className="text-[#A6A6FF] font-semibold group-hover/tag:text-white">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Image src={ViewedIcon} width={30} height={30} alt="Views" />
              <p className="text-slate-500 font-semibold">{postData.views}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Image
                  src={CommentIcon}
                  width={40}
                  height={40}
                  alt="Comments"
                />
                <p className="text-slate-500 font-semibold">
                  {postData.comments}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Image src={Like2Icon} width={30} height={30} alt="Like2" />
                  <Image src={HeartIcon} width={30} height={30} alt="Heart" />
                </div>

                <div
                  className={`flex items-center space-x-1 ${
                    liked
                      ? "border-2 border-transparent rounded-full p-1 bg-[#CEE5FF]"
                      : ""
                  }`}
                  onClick={toggleLike}
                >
                  <Image
                    src={liked ? LikeIcon : NotLikeIcon}
                    width={25}
                    height={25}
                    alt="Like"
                  />
                  <p className="text-slate-500 font-semibold">
                    {postData.reactions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-5">
      {posts.map((postData, index) => renderPostByData(postData, index))}
    </div>
  );
}
