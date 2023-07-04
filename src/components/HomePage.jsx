import React, { useState } from "react";
import DetailPage from "./DetailPage";
import SearchBar from "./SearchBar";

export default function HomePage() {
  const [data, setData] = useState();

  console.log(data);

  return (
    <>
      <div className="relative w-11/12 sm:w-2/3 lg:w-1/2 mx-auto top-6 space-y-5 z-1">
        <SearchBar setData={setData} />
        {data && <DetailPage wordData={data} />}
      </div>
    </>
  );
}
