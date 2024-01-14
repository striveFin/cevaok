// pages/about.js
"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledText from "./texts";
import GoogleAnalytics from "@/app/components/analytics/googleAnalytics";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Container = styled.div`
  margin: 0 auto;
  padding-top: 6rem;
  background-color: #f0f0f0;
`;

const ServiceSection = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  // margin-bottom: 20px;
  color: #333;
  padding: 20px;
`;

const ServiceContainer = styled.div`
  /* Your service container styling goes here */
  display: flex;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceImage = styled.div`
  /* Your service image styling goes here */
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px; /* Add border-radius for rounded corners */
  }
`;

const ServiceInfo = styled.div`
  /* Your service info styling goes here */
  flex: 1;
  padding: 20px; /* Add padding for spacing */
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #333;
  margin-bottom: 1rem;
`;
const Description1 = styled.p`
  color: #333;
  margin-bottom: 0;
`;
const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0;
`;

const Card = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const ServiceCard = ({
  title,
  description,
  serv,
  services,
  services2,
  lastDesc,
  imageUrl,
}) => {
  const servicesArray = services.split("-");

  return (
    <Card>
      <ServiceContainer>
        <ServiceImage>
          <img src={imageUrl} alt={title} />
        </ServiceImage>
        <ServiceInfo>
          <Title>{title}</Title>

          {/* Description */}
          <Description>{description}</Description>

          {/* Services */}
          <Description>{serv}</Description>
          {servicesArray.length > 0 && (
            <BulletList>
              {servicesArray.map((item, index) => (
                <ListItem key={index}>
                  <Description1>{item}</Description1>
                </ListItem>
              ))}
            </BulletList>
          )}
          <div style={{ marginBottom: "1rem" }}></div>
          {/* Additional Services */}
          <Description>{services2}</Description>

          {/* Last Description */}
          <Description>{lastDesc}</Description>
        </ServiceInfo>
      </ServiceContainer>
    </Card>
  );
};

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - J.S Painting</title>
        {/* Add your metadata, stylesheets, etc. */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-1ZFG61N47M" />
      </Head>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Container>
          <StyledText />

          <ServiceSection>Our Services</ServiceSection>

          <ServiceCard
            title="Interior Painting Services for Homes and Businesses"
            description="Elevate the ambiance of your living space with our top-notch interior painting services. Our skilled team of painters specializes in bringing creativity and precision to every project, ensuring a transformative and aesthetically pleasing outcome. Whether you're looking to refresh a single room or revitalize your entire home or business interior, our dedicated professionals are committed to delivering exceptional results."
            serv="Our Interior Painting Services Include:"
            services=" Meticulous color consultations to help you choose the perfect palette that suits your style and preferences.
  - Expert surface preparation, ensuring a smooth and long-lasting finish.
  - Use of premium-quality paints and materials for a durable and vibrant appearance.
  - Attention to detail in every corner, trim, and surface, leaving no spot untouched.
  - Timely project completion, with minimal disruption to your daily routine."
            lastDesc="At J.S Painting, we take pride in our commitment to quality craftsmanship and customer satisfaction. Let us transform your space into a stunning, personalized haven with our interior painting expertise. Contact us today for a consultation and bring your vision to life!"
            imageUrl="/images/interior.jpeg"
          />

          <ServiceCard
            title="Exterior Painting Services for Homes and Businesses"
            description="Transform the look and protect the integrity of your property with our professional exterior painting services. At J.S Painting, we specialize in enhancing the curb appeal of homes and businesses through meticulous craftsmanship and the use of top-quality paint and techniques. Whether you're looking to refresh the exterior of your home, revitalize your business facade, or undertake a complete makeover, our skilled experts are dedicated to delivering a lasting finish that stands the test of time."
            serv="Our Exterior Painting Services Include:"
            services="Thorough inspection and preparation of surfaces to ensure optimal paint adhesion and longevity.
  - Selection of high-quality, weather-resistant paints that protect against the elements.
  - Professional application techniques for a smooth and even finish on various surfaces.
  - Attention to architectural details, trim, and accents to create a cohesive and polished look.
  - Commitment to timely project completion with minimal disruption to your routine."
            services2="Why Choose J.S Painting for Exterior Painting:
  - Experienced and skilled painters with a proven track record of successful projects.
  - Personalized color consultations to help you choose the perfect palette for your property.
  - Transparent communication and collaboration throughout the painting process.
  - Quality assurance and customer satisfaction at the core of our service."
            lastDesc="Elevate the appearance and protection of your property with our exterior painting expertise. Contact us today for a consultation, and let us bring your vision to life!"
            imageUrl="/images/exterior.jpeg"
          />

          <ServiceCard
            title="Professional Cabinet Painting Services for a Stunning Kitchen Upgrade"
            description="Revitalize your kitchen with our expert cabinet painting services. At J.S Painting, we specialize in transforming outdated cabinets into stylish focal points that enhance the overall aesthetics of your kitchen. Our skilled painters bring precision and creativity to every cabinet painting project, ensuring a durable and attractive finish that stands the test of time."
            serv="Our Cabinet Painting Services Include:"
            services="Thorough cleaning and preparation of cabinet surfaces to ensure optimal paint adhesion.
- Customized color consultations to help you choose the perfect palette for your kitchen.
- Use of high-quality, low-VOC paints for a safe and eco-friendly cabinet makeover.
- Fine attention to detail, including cabinet doors, drawers, and hardware.
- Timely project completion with minimal disruption to your daily routine."
            services2="Why Choose J.S Painting for Cabinet Painting:
- Specialized expertise in cabinet refinishing and painting techniques.
- Affordable and eco-conscious solutions for a budget-friendly and sustainable kitchen upgrade.
- Professional advice on color trends, finishes, and styles to suit your personal taste.
- Customer satisfaction guaranteed through transparent communication and quality workmanship."
            lastDesc="Transform your kitchen with our cabinet painting expertise. Contact us today for a personalized consultation, and let us bring a fresh and stylish look to your cabinets!"
            imageUrl="/images/cabinets.jpeg"
          />
        </Container>
      </motion.div>
    </div>
  );
};

export default About;
