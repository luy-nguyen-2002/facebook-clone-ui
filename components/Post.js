import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col" key={post.id}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            width={30}
            height={30}
            alt={post.profilePic}
            src={post.profilePic}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-xs text-gray-500">{post.timeStamp}</p>
          </div>
        </div>
        <p className="py-4">{post.post}</p>
      </div>
      {post.image != null && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image
            src={post.image}
            alt={post.image}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      {/* footer of a post */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp size={24} className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt size={24} className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine size={24} className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
