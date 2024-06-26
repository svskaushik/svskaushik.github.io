import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { projects } from "../json/projects"
import "../work.css";

const container = {
  hidden: { scale: 1 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

function Post({ img, name, ext, git, live }) {
  return (
    <motion.div className="box" variants={item}>
      <img
        alt="projimg"
        src={img}
        className="image"
        style={{ backgroundColor: "#c2c2c2" }}
      />
      <button className="prj">
        {name}
        <span> . {ext}</span>
      </button>
      <a href={git} className="show1" target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
      <a href={live} className="show2" target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </motion.div>
  );
}

export default function Work() {

  const [filter, setFilter] = useState("")

  useEffect(() => {
    document.title = "Shaurya Veer Singh | Projects ";
  }, []);

  return (
    <div className="gal-container">
      <h1 style={{ textAlign: "center", margin: "1rem", color: "#38b6ff" }}>
        <span className="blast">Projects . </span>
        <select
          className="select-css"
          value={filter}
          defaultValue={filter}
          onChange={({ target: { value } }) => setFilter(value)}
        >
          <option value="">all</option>
          <option value="js">js</option>
          <option value="solidity">solidity</option>
          <option value="py">py</option>
        </select>
      </h1>
      <motion.div
        className="gallery"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.filter(d => d.lang.search(filter) !== -1)
          .map((d) => (
            <Post {...d} />
          ))}
      </motion.div>
    </div>
  );
}
