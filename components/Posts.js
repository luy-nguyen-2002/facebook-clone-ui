"use client";
import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "@/public/src/features/postSlice";
import axios from "axios"; // ✅ Import axios

const Posts = () => {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";

  const dispatch = useDispatch();
  const posts = useSelector(selectPost);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FACEBOOK_CLONE_ENDPOINT);
        dispatch(addAllPost(response.data)); // ✅ Dispatch action with fetched posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    
    fetchData();
  }, [dispatch]); // ✅ Added dispatch as dependency

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts available</p> // ✅ Handle empty post list
      )}
    </div>
  );
};

export default Posts;
