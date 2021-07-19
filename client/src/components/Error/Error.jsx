import React from "react";

export default function NotFound({ image }) {
  return (
    <div>
      {image === "noimage"} ?
      <img
        className="img"
        src="https://media0.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=82a1493bnfn5w9pzygb5b4g3poh8pi2dbq1p0zhbcxvxn28j&rid=200w.gif&ct=g"
        alt="Link rip"
      />
    </div>
  );
};