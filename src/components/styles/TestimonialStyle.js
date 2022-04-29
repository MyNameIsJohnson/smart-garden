import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: linear-gradient(180deg, rgba(142, 173, 39, 0.68) 0%, rgba(247, 195, 38, 0) 100%);
  
  display: flex;
  height: 100vh;
  width: 100vw;
  list-style: none;
  margin: 0;
   

`;

export const TestimonialSection = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  padding: 0 20px;

  h1 {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 58px;
    display: flex;
    align-items: center;
    color: #466C3D;
    text-shadow: 0px 4px 4px #FFFFFF;
    padding: 30px 40px;
  }

  .card-2 {
    position: relative;
    left: 200px;
  }
`;

export const Card = styled.div`
  margin: 20px;
  width: 25vw; 
  height: 13vh;
  color: #21341D; 
  padding: 25px;

  border-radius: 20px;
  background: linear-gradient(180deg, rgba(247, 195, 38, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
  border: 5px solid #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  
  p {
    font-family: 'Merriweather', sans-serif;;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    align-items: center;
    text-align: center;
    color: #21341D;
  }

  .quote { 
    padding:0px;

  }
`;

export const Button = styled.button`
  margin: 0 50px 0 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 200px;
  height: 70px;
  padding: 20px;
  font-size: 15px;
  font-weight: 700;
`;

export const Companys = styled.div`
  width: 50%;
  height: 100vh;
`;

export const Cactus = styled.div`
  .cactus {
    width: 80vh;
    height: 110vh;
    position: relative;
    bottom: 24px;
    left: 112px;
  } 
`;

export const Icons = styled.div`
  position: relative;
  bottom: 215px;
  right: 50px;

  .icons {
    width: 140px;
    height: 40px;
  }

  .google {
    position: relative;
    top: 14px;
    right: 135px;
  }

  .apple {
    position: relative;
    bottom: 30px;
    left: 5px;
    margin: 10px 0;
  }

  .qr-code {
    position: relative;
    top: 17px;
    height: 100px;
    margin-right: 10px
  }
`;