import { Card } from "flowbite-react";
import React from "react";

const Cards = ({ info }) => {
  const { _id, picture, about, heading } = info;
  return (
    <div className="h-full">
      <div className="max-w-lg min-h-100% ">
        <Card horizontal={true} imgSrc={picture}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {about}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
