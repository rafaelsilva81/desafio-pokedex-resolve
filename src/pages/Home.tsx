import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/Header";

const Home = (props: any) => {
  let params = useParams();

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
