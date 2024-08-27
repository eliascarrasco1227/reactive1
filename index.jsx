import { vjsx, vjsxf, appendChild, loadSVG } from "./modules/core/jsx-runtime";
/** @jsx vjsx */
/** @jsxFrag vjsxf */

import vjs from "./modules/core/js-vanilla";

//import "./index.css";

const main = document.getElementById("main");

import data from "./mockdata/documentos";

vjs.replace(main, drawMain("Titulo", data));

/**
 * Config a simple DIV to play as Editor/Config/Alert panel
 */
function drawMain(title, content) {
  return (
    <div>
      <h2> {title} </h2>
      <ul>
        {content.map((item) => (
          <li>{item.name} = {item.file}</li>
        ))}
      </ul>
    </div>
  );
}
