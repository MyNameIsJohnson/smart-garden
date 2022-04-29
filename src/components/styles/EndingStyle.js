import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #f3da8e69;
  height: 72vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0; 
`;
export const Content = styled.div`
  display: flex;
  height: 72vh;
  width: 100%

  
`
export const LeftFlower = styled.div`
  width: 30%;
  img {
    height: 70vh
  }
`;

export const CenterIcons = styled.div`
  width: 40%;
  gap: 67px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 15vh;
  position: relative;
  top: 380px;
`;

export const RightFlower = styled.div`
  width: 30%;
  img {
    height: 70vh;
    position: relative;
    left: 112px;
  }
`;

export const Footer = styled.div`
  background: linear-gradient(180deg,rgba(255,233,154,0.06) 0%,rgba(102,183,73,0.42) 100%);
  text-align: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;

  .copyright {
    position: relative; 
    left: 30px;
  }
  .icons {
    width: 300px;
    height: 45px;
    position: relative;
    left: 360px;
  }

`