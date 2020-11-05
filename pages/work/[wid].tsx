import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

const Project = (): JSX.Element => {
  const router = useRouter();
  const { wid } = router.query;
  return (
    <motion.div exit={{ opacity: 0 }}>
      <p>Hey there!</p>
    </motion.div>
  );
};

export default Project;
