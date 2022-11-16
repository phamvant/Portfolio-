import React from "react";

function Bio({ BioData }: any) {
  return (
    <div className="px-4 pt-4">
      {BioData.map((data: any, key: any) => {
        return (
          <div key={key}>
            <p className="text-white text-3xl underline pt-4">{data.title}</p>
            <p className="font-light text-white pt-4">{data.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Bio;
  