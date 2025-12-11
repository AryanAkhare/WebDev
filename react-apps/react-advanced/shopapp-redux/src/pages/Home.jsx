import { prettyFormat } from "@testing-library/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (E) {
      console.log(E);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={posts.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>No data</p>
        </div>
      )}
    </div>
  );
};

export default Home;
