import React from "react";
import imageError from "../../images/Error.gif";

export default function NotFound({ image }) {
  return (
    <div>
      {image === "noimage"} 
      <img
        className="err"
        src={imageError}
        alt="Link rip"
      />
    </div>
  );
};