import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  let params = useParams();
  const [page, setPage] = React.useState(1);

  return (
    <>
      <Header />

      {/* 
        Map over the pokemon array and render a card for each pokemon
        It should render 30 cards, when the user scrolls to the bottom of the page, it should load the next 30 cards
        The cards should contain the pokemon's name, image, type and id
      */}

      {Array.from({ length: 30 }, (_, index) => {
        console.log(index);
        return (
          <div key={index}>
            <PokemonCard id={index + 1} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
