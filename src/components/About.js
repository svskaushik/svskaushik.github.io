import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function About() {
  useEffect(() => {
    document.title = "Shaurya Veer Singh | About Me ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Shaurya Veer, blockchain dev."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              A
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              b
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              u
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p align="LEFT">
            I make magic internet money work, or at least that's what I'm trying to do.
            Like to think of myself as a (decently) skilled and quick-to-learn computer science student with considerable
            knowledge of <strong>programming</strong> and&nbsp;
            <strong>computer applications</strong> . 👨‍💻
            <br />
            <br />
            Enthusiastic problem solver, quick learner(even if I do say so myself) ,
            organized debugger and
            an avid fan of all that's happening in the blockchain space.
            <br />
            <br />
            Interested in the development spectrum and willing to contribute to projects
            in the web3 and blockchain space whether it be back-end development or front-end.
            <br />
            <br />
            Follow me on&nbsp;
            <a
              href="https://twitter.com/svs_kaushik"
              target="_blank" rel="noopener noreferrer"
              style={{ color: "#23ffde" }}
            >
              Twitter&nbsp;
            </a>
            to know more or just&nbsp;
            <a href="/contact" style={{ color: "#23ffde" }}>
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
          src={`code2.svg`}
        />
      </div>
    </>
  );
}
