import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setPage((prev) => (prev < 35 ? prev + 1 : prev)); //Max pokemon is 1118, prevent infinite scroll
    }

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Header />

      <main className="px-16 py-8 grid grid-cols-6 gap-8">
        {Array.from({ length: 30 * page }, (_, index) => {
          return <PokemonCard key={index} id={index + 1} />;
        })}
      </main>
    </>
  );
};

export default Home;
