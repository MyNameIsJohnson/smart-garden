import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #FFFDF0;
  text-align: center;

  display: grid;
  height: 100vh;
  width: 100vw; 
  list-style: none;
  margin: 0;

  overflow: hidden;

  h1 {
    height: 65%;
    padding: 30px 0px 0px 0px;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #466C3D;
  }
   
  div img {
    width: 900px;
    height: 500px;
  }

  div p {
    font-family: 'Lora';
    font-weight: 700;
    font-size: 16px;
    align-items: center;
    text-align: center;
    color: #21341D;
  }

  .pinkFlower {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 22%;
  }

  .purpleFlower {
    position: absolute;
    bottom: 0;
    right: -60px;
    width: 22%;
  }
`;


export const Button = styled.button`
  margin: 25px 0px 0px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #F7C326;
  border: none;
  width: 200px;
  height: 60px;
  font-size: 15px;
  font-weight: 700;
  color: #466C3D;
`;