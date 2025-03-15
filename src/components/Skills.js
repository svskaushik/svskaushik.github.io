import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Shaurya Veer Singh | Skills ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Shaurya Veer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#38b6ff" }}>
              Skills&nbsp;
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              &&nbsp;
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              Experience
            </span>
          </h1>
          <p align="LEFT">
            My primary interests lie in problem solving and developing useful solutions.
            <br />
            <br />
            The tech I'm familiar with:
            &nbsp;&nbsp; <b>Javascript &nbsp;|&nbsp; Solidity &nbsp;|&nbsp; Python  &nbsp;</b><br />
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; ReactJs | NextJs | Node<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Pytorch | Transformers| NLP<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; EVM based development | Cryptography <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Spline3D | Image Processing<br />
            <br />
            I'm currently overseeing tech and development for
              <a href="https://www.thecheforama.com"
              target="_blank" rel="noopener noreferrer"
              style={{ color: "#38b6ff" }} > &nbsp;Cheforama&nbsp;
              </a>
            <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/shaurya-veer-singh-b45318226/"
              target="_blank" rel="noopener noreferrer"
              style={{ color: "#38b6ff" }}
            >
              LinkedIn&nbsp;
            </a>
            profile for more details or just&nbsp;
            <a href="/contact" style={{ color: "#38b6ff" }}>
              contact&nbsp;
            </a>
            me.
          </p>
        </div>

        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`code3.svg`}
        />
      </div>
    </>
  );
}
