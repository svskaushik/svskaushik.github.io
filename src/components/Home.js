import React, { useEffect } from "react";
import bounce from "../script/bounce";


export default function Home() {
  useEffect(() => {
    document.title =
      "Shaurya Veer Singh | Full Stack Developer | Blockchain Developer";

    bounce();
    // guitarAnim();

    const s = document.querySelector(".Slast");

    s.style.opacity = 1;
    s.style.transform = "rotate(360deg)";

    return () => {
      s.style.opacity = 0;
      s.style.transform = "rotate(0deg)";
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Shaurya,web developer."
            className="blast-root"
          >
            <span className="blast">H</span>
            <span className="blast">i</span>
            <span className="blast">,</span>
            <br />
            <span className="blast">I</span>
            <span className="blast">’</span>
            <span className="blast">m&nbsp;</span>
            <span className="Slast">S</span>
            <span className="blast">h</span>
            <span className="blast">a</span>
            <span className="blast">u</span>
            <span className="blast">r</span>
            <span className="blast">y</span>
            <span className="blast">a</span>
            <span className="blast" style={{ paddingLeft: "3px" }}>
              V
            </span>
            <span className="blast">e</span>
            <span className="blast">e</span>
            <span className="blast">r</span>
            <span className="blast">,</span>
            <br />
            <span className="blast">b</span>
            <span className="blast">l</span>
            <span className="blast">o</span>
            <span className="blast">c</span>
            <span className="blast">k</span>
            <span className="blast">c</span>
            <span className="blast">h</span>
            <span className="blast">a</span>
            <span className="blast">i</span>
            <span className="blast">n&nbsp;</span>
            <span className="blast">d</span>
            <span className="blast">e</span>
            <span className="blast">v</span>
          </h1>
          <h2>Full Stack | Blockchain Developer </h2>
          <div className="icons">
            <a href="https://twitter.com/svs_kaushik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a href="https://github.com/svskaushik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/shaurya-veer-singh-b45318226/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>

          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`code1.svg`}
        />
      </div>
    </>
  );
}
