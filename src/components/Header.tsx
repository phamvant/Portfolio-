import React from "react";

function Header() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 flex justify-between items-center px-4 py-4 backdrop-blur-md">
        <div>
          <h1 className="text-3xl text-gray-200">PhamVanThuan</h1>
          <p className="text-white font-light text-md">
            I'm a &#40; Student / Developer / Minimalist &#41;
          </p>
        </div>
        <img className="rounded-full w-14" src="src/assets/avatar.jpg" alt="" />
      </div>
    </>
  );
}

export default Header;
