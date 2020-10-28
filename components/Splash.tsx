import React from 'react';
import { motion } from 'framer-motion';

const Splash = () => {
  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
      }}>
        <p>Hello 1</p>
        <p>Hello 2</p>
      </motion.div>
    </>
  )
}

export default Splash;
