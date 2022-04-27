import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: #FFFBE1;

  position: relative;
  margin: 0; 
  height: 100vh;
  width: 100vw;
  list-style: none;
`;

export const Tree = styled.div`
  width: 55%;
  height: 100%
  border: 1px solid;
  text-align: center;

  & img {
    text-align: center;
    width: 80%;
    position: relative;
    top: 65px;
    height: 90%;
    left: 50px;
  }
`;

export const Process = styled.div`
  width: 45%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  `;
  
export const Card = styled.div`
  border-radius: 20px;
  background: linear-gradient(180deg,#FFFFFF 0%,rgba(255,255,255,0) 100%);
  width: 560px;
  height: 80%;
  padding: 40px 40px;
  color: #647A1B;

  h1 {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 50px;
    text-align: center;
    color: #466C3D;
  }

  p {
    text-align: left;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #647A1B;
    margin-top: 20px;
    padding: 0px 46px;
    letter-spacing: 1px;
  }
`;

export const Button = styled.button`
  margin: 20px 50px 0 50px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 14px;
  border: none;
  width: 300px;
  height: 50px;
  font-family: 'PT Sans';
  font-size: 15px;
  font-weight: 700;
  background: #F7C326;
  color: #466C3D;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
`;