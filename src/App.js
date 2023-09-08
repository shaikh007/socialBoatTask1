import "./App.css";
import React, { useRef, useState } from "react";
import Main from "./Components/Main/Main";
import Results from "./Components/Results/Results";
import Header from "./Components/header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [numResult, setNumResult] = useState(20);
  const [data, setData] = useState([]);

  const [inputFocused, setInputFocused] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setInputFocused(true);
    setButtonClicked(true);
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        setNumResult={setNumResult}
        numResult={numResult}
        data={data}
        setData={setData}
        inputRef={inputRef}
        focused={inputFocused}
        buttonClicked={buttonClicked}
      />
      <Routes>
        <Route path="/" element={<Results onClick={handleButtonClick} />} />
        <Route path="result" element={<Main data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
