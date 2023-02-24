import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/barSlice";

const Watchpage = () => {
  const [searchParam] = useSearchParams();
  const actualParam = searchParam.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        className="p-5"
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + actualParam}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Watchpage;
