import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import "./Home.css";

const Home = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <section>
        <Banner></Banner>;
      </section>
      <section>
        <div className="grid grid-cols-2 gap-4">
          {data.map((info) => (
            <Cards info={info}></Cards>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
