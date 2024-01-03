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
    className={`w-full ${bgColor} text-white p-8 mt-8`}
  >
    {content.map((paragraph, index) => (
      <div key={index} className={`mb-6 ${index === 0 ? 'text-lg' : 'text-base'} ${
        index === 1 ? 'md:flex md:content-start' : ''
      }`}>
        <p>{paragraph}</p>
      </div>
    ))}
    {showButton && (
      <Link
      href="/contact"
      className="block bg-blue-500 text-white font-bold py-2 px-2 rounded hover:bg-blue-600 text-sm text-center  md:text-base md:px-6 md:py-3 md:w-36 md:mx-auto "
    >
      Contact Us
    </Link>
    
    )}
  </motion.div>

    </div>
  );
};

export default TextContainer;
