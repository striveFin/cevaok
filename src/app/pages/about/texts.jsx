import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
//   margin: 0 auto;
  padding: 20px;
  color: white;
  background-color: #f5f5f5;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #555;
`;

const Strong = styled.strong`
  color: #0070f3;
`;

const Emphasis = styled.em`
  font-style: italic;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #777;
`;

const StyledText = () => {
  return (
    <Container>
      <Title>About J.S Painting & Decorating</Title>

      <Paragraph>
        Established with a passion for transforming spaces, J.S Painting & Decorating began its journey in 2002. From humble beginnings around North London & Hertfordshire, our commitment to excellence has propelled us to undertake a variety of projects nationwide. Over the years, we have earned the trust of both domestic and business clients, making us a preferred choice for property maintenance and renovation.
      </Paragraph>

      <Paragraph>
        What sets J.S Painting & Decorating apart is our personalized service. You'll have a dedicated project manager guiding you from the initial free quotation to the final inspection of works. This unique approach ensures a real relationship, allowing you to have significant input into how your works are done and within your preferred time frame. We also provide expert advice on maximizing your budget by exploring various options for carrying out works.
      </Paragraph>


      <Paragraph>
        At J.S Painting & Decorating, we take pride in our craftsmanship, attention to detail, and commitment to delivering exceptional results. Whether you're looking to refresh the interiors of your home or enhance the aesthetic appeal of your business, we're here to bring creativity and precision to every project. Contact us today to experience the J.S difference!
      </Paragraph>
      <InfoContainer>
        <InfoText>
          <Strong>Since 2019</Strong> - Providing Decorating Services
        </InfoText>
        <InfoText>
          <Strong>For Homes & Businesses</Strong>
        </InfoText>
      </InfoContainer>
    </Container>
  );
};

export default StyledText;
