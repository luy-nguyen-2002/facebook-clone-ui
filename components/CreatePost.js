"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addPost } from "@/public/src/features/postSlice";

const CreatePost = () => {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    try {
      const formData = new FormData();
      formData.append("files", imageToPost);
      formData.append("post", inputRef.current.value);
      formData.append("name", session?.user.name);
      formData.append("email", session?.user.email);
      formData.append("profilePic", session?.user.image);

      const response = await axios.post(FACEBOOK_CLONE_ENDPOINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });

      inputRef.current.value = "";
      dispatch(addPost(response.data));
      removeImage();
      setErrorMessage(null); // Reset error message on success
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          className="rounded-full cursor-pointer"
          alt="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
          src={session?.user.image}
          width={30}
          height={30}
        />
        <form onSubmit={handleSubmit} className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            placeholder={`What's on your mind, ${session?.user.name}?`}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="hidden"
          ></button>
        </form>
      </div>
      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
        >
          <img
            alt={imageToPost}
            src={imageToPost}
            className="h-10 object-contain"
          />
          <RiDeleteBin6Line size={20} className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <HiOutlineVideoCamera size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer"
        >
          <IoMdPhotos size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Photo/ Video</p>
          <input
            onChange={addImageToPost}
            type="file"
            ref={hiddenFileInput}
            hidden
            accept="image/*"
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
          <BsEmojiSmile size={20} className="text-red-500" />
          <p className="font-semibold text-gray-600">Feeling/ Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
