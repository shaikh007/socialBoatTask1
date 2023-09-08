import React from "react";
import "../Main/main.css";
const Main = ({ data }) => {
  console.log(data);
  return (
    <div className="mains">
      {data.map((data, idx) => (
        <div key={idx} className="main_bkt">
          <div className="video-div">
            <video width="450" height="200" controls className="videos">
              <source src={data?.video} type="video/mp4" />
            </video>
          </div>
          <div className="heading">
            <h3 className="each-heading">{data?.heading.split(":")[0]}</h3>
          </div>
          <div className="tag-div">
            {data?.tags.map((tdata, idx) => (
              <div key={idx} className="tags-div">
                <span className="each-tags">#{tdata}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
