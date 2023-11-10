/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFetchOases } from "../hooks/useFetchOases";
import OasesList from "./OasesList";

const Desert = ({ id, desertName }) => {
  const { oases } = useFetchOases(id);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [oases]);

  return (
    <div key={animationKey} className="p-5 shadow-lg rounded-lg animate-fade">
      <h1 className="text-black font-bold">{desertName}</h1>
      <hr />
      <div className="mt-5 p-3">
        <OasesList oases={oases} />
      </div>
    </div>
  );
};

export default Desert;
