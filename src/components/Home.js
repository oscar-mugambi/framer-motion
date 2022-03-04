import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className='home container'
    >
      <motion.h2
        animate={{
          fontSize: 50,
          color: '#ff2994',
          x: -100,
          y: -100,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to='/base'>
        <motion.button whileHover={{ scale: 1.5 }}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
