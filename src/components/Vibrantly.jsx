import copy1 from "/img/copy1.svg";
import ReactVivus from "react-vivus";

function Vibrantly() {
  return (
    <ReactVivus
      id="copy3"
      option={{
        file: copy1,
        animTimingFunction: "EASE",
        type: "oneByOne",
        duration: 300,
        onReady: console.log,
      }}
      // style={{ scale: '1.3'}}
      callback={console.log}
    />
  );
}

export default Vibrantly;
