import React, { useEffect } from "react";
import axios from "axios";
import "../header/header.css";
import { useNavigate } from "react-router-dom";

const Header = ({
  search,
  setSearch,
  setNumResult,
  numResult,
  data,
  setData,
  inputRef,
  focused,
  buttonClicked,
}) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input);
    axios
      .get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${input}&numResults=${numResult}`
      )
      .then((data) => setData(data.data.results))
      .catch((e) => console.log(e));

    navigate("result");
  };

  const handlehome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, inputRef]);

  const inputStyles = {
    borderColor: buttonClicked ? "green" : "initial",
    backgroundColor: focused ? "rgb(211, 246, 194)" : "white",
  };

  return (
    <div className="header">
      <div className="logo">
        <h1 onClick={handlehome}>Logo</h1>
      </div>
      <div className="search-bar">
        <div className="search-input">
          <input
            ref={inputRef}
            style={inputStyles}
            type="text"
            placeholder="Search Here....."
            className="inputs"
            onChange={handleChange}
            value={search}
          />
          <select
            className="numResult"
            onChange={(e) => setNumResult(e.target.value)}
          >
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      <div className="hero_profile">
        <div className="profiles">
          <img
            className="prof"
            src="https://wallpapers.com/images/hd/awesome-south-hero-at-airport-iaadq0t9pnp66e91.jpg"
            alt="hero_profile"
            width={"50px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
