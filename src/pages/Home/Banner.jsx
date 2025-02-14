import React from "react";
import { easeOut, motion } from "framer-motion";
import bannerOne from "../../assets/banner1.png";
import bannerTwo from "../../assets/banner2.png";

const Banner = () => {
  return (
    <div className="hero bg-[#F2F6FD] min-h-[580px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 4, repeat: Infinity }}
            src={bannerOne}
            className=""
          />
          <motion.img
            animate={{ x: [50, 100, 50] }}
            transition={{ duration: 4, delay: 2, repeat: Infinity }}
            src={bannerTwo}
            className=""
          />
        </div>

        <div className="w-2/4">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            for You
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
