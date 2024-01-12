import { Button } from "@mui/material";
import styled from "styled-components";

export const ContactWrapper = styled.div`
padding-top: 200px;
  background: #ececec;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5; 
//   padding: 0px;
  margin: 0px;
  height: 100%;
`;

export const SendBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledBtn = styled.button`
cursor: pointer;
  margin: 0 auto;
  
  color: white;
  padding: 13px 17px;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: red;
  letter-spacing: 2px;
  margin-top: 2rem;
  border: 0;
  width: 71%;
  /* &:hover {
    background: red;
    color: white;
    border: none;
  } */
`;
export const ErrorStyle = styled.div`
  color: red;
`;
export const BtnMui = styled(Button)`
  && {
    background-color: hsl(234, 12%, 34%);
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
height: 100%;
  padding: 10px;
  margin: 0px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

export const DetailsContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: auto;
  padding-top: 2rem; 
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailsContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
  padding-top: auto;
  width: 40%;
  transform: translate(0, 1%);
  margin: 0 auto;
  text-align: left;

  & h1 {
    font-size: 1.5rem;

    color: red;
    // padding: 1.6rem;
  }

  & p {
    font-size: 1rem;

    color: black;
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      padding-top: 1rem;
      padding-bottom: 0;
    }
     button {
      width: 100%
     }

     button:last-child {
      margin-bottom: 1rem;
     }
  }
`;

export const DirectionBtn = styled.button`
  cursor: pointer;
  color: white;
  padding: 13px 17px;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: red;
  letter-spacing: 2px;
  margin-top: 1rem;
  border: 0;
  width: 71%;

  @media screen and (max-width: 768px){
    margin-top: 1rem;
  }
`;