import copy3 from "/img/copy3.svg";
import ReactVivus from "react-vivus";

function Authentically() {
  return (
    <ReactVivus
      id="copy3"
      option={{
        file: copy3,
        animTimingFunction: "EASE",
        type: "oneByOne",
        duration: 300,
        onReady: console.log,
      }}
      style={{
        scale: "1.2",
        // paddingLeft: "1.5rem",
        objectFit: "contain",
        height: "100%",
      }}
      callback={console.log}
    />
  );
}

export default Authentically;
