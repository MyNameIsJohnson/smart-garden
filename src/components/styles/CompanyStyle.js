import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #f3da8e69;
  text-align: center;

  display: grid;
  height: 75vh;
  width: 100vw; 
  list-style: none;
  margin: 0;

  overflow: hidden;

  h1 {
    color: #466C3D;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;

    border-top: 2px solid #466C3D;
    border-bottom: 2px solid #466C3D;
    margin: 40px auto 20px; 
    height: 35px;
  }
  div {
    display: flex;
    height: 58vh;
    img {
      width: 40%; 
      height: 60vh;
      margin: 0 auto;
    }
    .leftImage {
      margin-right: 0;
    }
    .rightImage {
      margin-left: 0;
    }
  }
`;

export const Story = styled.div`

    background: #f2e7c970;
    display: grid;
    height: 25vh;
    p {
      color: #466C3D;
      width: 662px;
      font-family: 'Merriweather';
      font-weight: 400;
      font-size: 16px;
      margin: 20px auto;
      text-align: justify;
    }
    & .carotIcon {
      height: 30px;
      color: white;
      position: relative;
      right: 25px;
    }
  
`;

export const Button = styled.button`
  margin: 10px auto;
  background: #466C3D;
  color: white;
  align-items: center;
  display: flex;  
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  width: 200px;
  height: 60px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: white;


`;