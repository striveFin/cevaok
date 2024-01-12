// pages/about.js
"use client"

import Head from 'next/head';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StyledText from './texts';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Container = styled.div`
  margin: 0 auto;
  padding-top: 6rem;
  background-color: #f0f0f0;
`;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
// `;

// const Paragraph = styled.p`
//   font-size: 1.25rem;
//   margin-bottom: 1.5rem;
// `;

const ServiceSection = styled.h2`
width: 50%;
margin: 0 auto;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #0070f3;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align:center;
`;

const Card = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem 0 0 0.5rem;
  }
`;

const ServiceInfo = styled.div`
  width: 100%;
  padding: 1rem;
`;

const ServiceCard = ({ title, description, imageUrl }) => (
  <Card>
    <ServiceContainer>
      <ServiceImage>
        <img src={imageUrl} alt={title} />
      </ServiceImage>
      <ServiceInfo>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#333' }}>{description}</p>
        <p style={{ color: '#333' }}>{description}</p>
      </ServiceInfo>
    </ServiceContainer>
  </Card>
);

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - J.S Painting</title>
        {/* Add your metadata, stylesheets, etc. */}
      </Head>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Container>
          <StyledText/>
          {/* Add more details about your company here */}

          <ServiceSection>Our Services</ServiceSection>

            <ServiceCard
              title="Interior Painting"
              description="Transform your home with a fresh coat of paint. Our skilled painters bring creativity and precision to every project."
              imageUrl="/images/interior.jpeg"
            />
            <ServiceCard
              title="Exterior Painting"
              description="Enhance the curb appeal of your property. Our experts use top-quality paint and techniques for a lasting finish."
              imageUrl="/images/exterior.jpeg"
            />
            <ServiceCard
              title="Cabinet Painting"
              description="Give your cabinets a new look with our cabinet painting services. We use high-quality paint for a durable and attractive finish."
              imageUrl="/images/cabinets.jpeg"
            />
          
        </Container>
      </motion.div>
    </div>
  );
};

export default About;
