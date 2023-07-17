import React, { useEffect, useState } from "react";
import axios from "axios";

// GET API = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
// Metadata GET API = https://hacker-news.firebaseio.com/v0/item/YOUR_POST_ID_HERE.json`

export default function JobSearch() {
  const [postList, setPostList] = useState([]);
  const [curPage, setCurPage] = useState(0);
  var perPage = 5;

  useEffect(() => {
    fectPostList();
  }, []);

  const fectPostList = async () => {
    try {
      const response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      console.log(response.data);
      const temp = response.data;
      const newPost = temp.splice(curPage * perPage, perPage);

      fetchMetaData(newPost);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMetaData = (ids) => {
    ids.map(async (postId) => {
      try {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${postId}.json`
        );
        setPostList((postList) => [...postList, response.data]);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl m-4">Job Search</h1>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {postList.map((post, idx) => (
            <a
              href="https://google.com"
              target="_blank"
              className="flex w-96 flex-col border-2 m-5 p-6 gap-5 rounded-md bg-slate-100 cursor-pointer"
            >
              {console.log(post)}
              <div>
                ID: <span className="text-blue-500">{post.id}</span>
              </div>
              <div>Title: {post.title}</div>
              <div>By {post.by}</div>
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setCurPage(curPage + 1);
            fectPostList();
          }}
          className="border-2 bg-slate-50 shadow-md rounded-md px-6 py-2 hover:bg-slate-100 text-2xl m-10"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
