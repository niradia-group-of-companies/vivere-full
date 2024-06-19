import copy2 from "/img/copy2.svg";
import ReactVivus from 'react-vivus';

function Centrally() {
  return (
    <ReactVivus
    id="copy3"
    option={{
      file: copy2,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      duration: 300,
      onReady: console.log
    }}
    // style={{ scale: '1.3'}}
    callback={console.log}
  />
  );
}

export default Centrally;