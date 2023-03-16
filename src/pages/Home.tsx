import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  // get query params
  const params = new URLSearchParams(window.location.search);
  const [search, setSearch] = useSearchParams();

  console.log(params);

  console.log(search);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
