import React from "react";
import "../Results/results.css";

const Results = ({ onClick }) => {
  return (
    <div className="hero-results">
      <div>
        <p>
          "Unlock Your Potential, One Rep at a Time. <br /> Welcome to the
          Ultimate Destination for Fitness Excellence!" 💪🌟
        </p>
      </div>
      <div>
        <button onClick={onClick}>Lets Push Up! Click Here</button>
      </div>
    </div>
  );
};

export default Results;
