import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import bounce from "../script/bounce";

export default function Contact() {

  const search = useLocation().search;
  const resp = new URLSearchParams(search).get('response');

  const [thank, setThank] = useState(false);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Shaurya Veer Singh | Contact Me";
    setThank(resp);
    setTimeout(() => setThank(false), 5000);
    bounce();
  }, []);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
  };

  return (
    <>
      
      <div className="container home-page" style={{ zoom: "95%" }}>
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Shaurya Veer, blockchain dev."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#38b6ff" }}>
              C
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              o
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              n
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              t
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              a
            </span>
            <span className="blast" style={{ color: "#38b6ff" }}>
              c
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
          <p>
            I would love to hear more about your blockchain project and explore how we could collaborate. My email is <a href = "mailto: abc@example.com" style={{ color: "#38b6ff" }}>shaurya9702@gmail.com</a>. You can also connect with me on 
            any of my socials below:
          </p>

          <div className="icons">
            <a href="https://twitter.com/svs_kaushik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a
              href="https://www.instagram.com/svskaushik/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com/in/shaurya-veer-singh-b45318226/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://www.reddit.com/user/svskaushik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-reddit-alien fa-3x"></i>
            </a>
          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>

      <motion.div
        className="mapouter"
        style={{ backgroundColor: "#e2e2e2" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="gmap_canvas">
          <iframe
            title="gmap_canvas"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=new%20delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ filter: "invert(100%)" }}
            frameBorder="0"
            allowFullScreen=""
            scrolling="no"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}
