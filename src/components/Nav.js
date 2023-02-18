import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/barSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Nav = () => {
  const [suggestion, setSuggestion] = useState([]);
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // debouncing 250 ms
    const timer = setTimeout(() => {
      getSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  // when re-render done destroy prev timer hence debounced

  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + query);
    // setSuggestion(json[1]);
    const jsonData = await data.json();
    setSuggestion(jsonData[1]);
    console.log(suggestion);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      {/* left */}
      <div className="flex col-span-3 mx-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="
          alt="="
        />
        <img
          className="h-8 mx-2 ml-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="YT-logo"
        />
      </div>
      {/* Middle */}
      <div className="col-span-9 ">
        <div>
          <input
            className="w-1/2 border border-gray-400 px-6 py-2 rounded-l-full outline-none"
            type="text"
            placeholder=" Search here ....."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowList(true)}
            onBlur={() => setShowList(false)}
          />
          <button className="border border-gray-400 px-3 py-2 rounded-r-full bg-gray-100">
             🔎  
          </button>
        </div>

        {showList && (
          <div className="fixed bg-white px-2 w-[30.4rem] shadow-lg rounded-lg border border-gray-300">
            <ul>
              {suggestion.map((sg) => {
                return (
                  <li className="p-[2px] ml-2 hover:bg-gray-100" key={sg}>
                    🪕  {sg}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* right */}
      <div className="col-span-1">
        <img
          className="h-8 rounded-lg cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD_OQ0FU9Bzh97svv-wUZmrfVTPIpG-UCFA&usqp=CAU"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Nav;
