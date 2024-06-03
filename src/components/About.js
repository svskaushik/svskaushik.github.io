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
            <span className="blast" style={{ color: "#38b6ff" }}>
              A
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              b
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              o
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              u
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              m
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              e
            </span>
          </h1>
          <p align="LEFT">
            Gm, I make magic internet money work, or at least that's what I'm trying to do.
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
            Interested in all the innovation that the 'Web3' spectrum has and willing to do my best to contribute to projects
            building the decentralized Web.
            <br />
            <br />
            Give me a ping on&nbsp;
            <a
              href="https://twitter.com/svs_kaushik"
              target="_blank" rel="noopener noreferrer"
              style={{ color: "#38b6ff" }}
            >
              Twitter&nbsp;
            </a>
            to know more or&nbsp;
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
          src={`code2.svg`}
        />
      </div>
    </>
  );
}
