import React from "react";

function Photos() {
  return (
    <>
      <p className="text-white text-3xl underline pt-8 pl-4">Photos of me</p>
      <div className="flex items-center justify-center pt-8">
        <img
          className="w-4/5 h-52 rounded-md object-cover"
          src="src/assets/me.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default Photos;
