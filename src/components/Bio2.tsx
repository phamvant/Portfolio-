import React from "react";

function Bio2({ BioData }: any) {
  return (
    <div className="px-4 pt-4">
      <p className="text-white text-3xl underline pt-4">Bio</p>
      {BioData.map((data: any, key: any) => {
        return (
          <div key={key} className="flex flex-row items-start">
            <div className="text-white text-md pt-4">{data.title}</div>
            <div className="font-light text-md text-white pt-4 pl-2">
              {data.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bio2;
