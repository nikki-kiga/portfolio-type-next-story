import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';

const Splash = () => {
  const { scrollYProgress } = useViewportScroll();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return <motion.div initial="hidden" animate="visible" variants={variants} />;
};

export default Splash;
