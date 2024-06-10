"use client";

import React from "react";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    handleSearch(event.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
      // console.log(posts);
    };
    fetchPosts();
  }, []);

  const handleSearch = (searchValue) => {
    const newFilteredPosts = posts.filter((post) => {
      const usernameMatch = post.creator.username
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const contentMatch = post.prompt
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const tagMatch = post.tag
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return usernameMatch || contentMatch || tagMatch;
    });
    setFilteredPosts(newFilteredPosts);
  };

  return (
    <section className="feed">
      <form
        action=""
        className="relative w-full flex-center"
        onSubmit={() => {}}
      >
        <input
          type="text"
          name=""
          className="search_input peer"
          required
          placeholder="Search by Username or tag"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      <PromptCardList
        data={filteredPosts}
        handleTagClick={(e) => {
          setSearchText(e);
          handleSearch(e);
        }}
      />
    </section>
  );
};

export default Feed;
