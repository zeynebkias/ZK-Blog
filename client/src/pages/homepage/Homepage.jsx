import { useLocation } from "react-router";
import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("http://localhost:5000/api/posts" + search ); //
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, [search]); //


  useEffect(() => {
    axios.get('http://localhost:5000/api/posts' + search) 
        .then(res => { setPosts(res.data) })

}
    , [search]);


  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}