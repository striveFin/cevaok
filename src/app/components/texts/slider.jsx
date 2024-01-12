"use client"

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextContainer = ({content, bgColor, showButton}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0 }); // Start animation from off-screen (left side)
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>  
      <motion.div
    initial={{ x: '-100vw' }} // Off-screen position (left side)
    animate={controls}
    transition={{ duration: 1, type: 'spring', stiffness: 80 }}
    className={`w-full ${bgColor} text-white p-8 `}
  >
    {content.map((paragraph, index) => (
  <div key={index} className={`mb-6 ${index === 0 ? 'text-lg' : 'text-base'} ${
    index === 1 ? 'md:flex md:content-start text-4xl text-green-500' : ''
  }`}>
    <p>{paragraph}</p>
  </div>
))}


{/* {showButton && (
  <Link
    href="/pages/contact"
    className="block bg-blue-600 text-white font-bold py-1 px-1 rounded hover:bg-green-600 hover:border-white text-sm text-center  md:text-base md:px-6 md:py-3 md:w-36 md:mx-auto border-2 border-blue-500"
  >
    Contact Us
  </Link>
)} */}

  </motion.div>

    </div>
  );
};

export default TextContainer;
