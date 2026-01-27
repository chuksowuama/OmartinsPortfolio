import React from "react";

const Blogcards = ({item}) => {

  return (
    <>
      <a
        href={item.blogURL}
        className="block"
        target="_blank"
        rel="rel noreferrer"
      >
        <div className="p-4">
          <img
            src={item.blogImg}
            alt={item.Title}
            className="w-full h-44 object-cover"
          />
          <div className="mt-4">
            <h3 className="text-lg font-medium">{item.Title}</h3>
          </div>
        </div>
      </a>
    </>
  );
};

export default Blogcards;
