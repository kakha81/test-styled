import React from 'react';
import styled from 'styled-components';
import heroImage from '../../Images/2.jpeg';

const Container = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  text-align: center;
`;
const Description = styled.p`
  width: 70%;
  font-size: 20px;
  color: gray;
`;
const Right = styled.div`
  width: 40%;
  background-color: white;
`;

const Image = styled.img`
  width: 500px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: darkblue;
  padding: 15px 30px;
  margin: auto 10px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(to right, red 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
  }
`;

function Hero() {
  return (
    <Container>
      <Left>
        <Title>IT-Management - IT Support and IT-Services for everyone!</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          corrupti ratione. Cum aliquam est, eius asperiores ex vitae nesciunt
          quaerat.
        </Description>
        <ButtonsContainer>
          <Button>About Us</Button>
          <Button>Contact Us</Button>
        </ButtonsContainer>
      </Left>
      <Right>
        <Image src={heroImage} alt='heroImage' />
      </Right>
    </Container>
  );
}

export default Hero;
