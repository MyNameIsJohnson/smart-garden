import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #f0f5dd;
  height: 103vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0; 
  
  & .tree-branch {
    position: absolute;
    left: 630px; 
    height: fit-content;
    top: 150px;
    margin: 0px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;   
`;

export const Logo = styled.div`
  flex: 1;
  img {
    width: 200px;
    margin: 50px 0 0 40px;
  }    
`;

export const Navbar = styled.div`
  flex: 1;

  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    float: right;
    gap: 20px;
    margin: 50px 40px 0 0;
    color: #466C3D;
    font-size: 15px
  }
`;

export const Card = styled.div`
  background: #FFFFFF;
  opacity: 0.7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 70%; 
  height: 40%;
  color: #8EAD27;
  position: absolute;
  top 200px;
  left: 55px;
  font-family: 'Arima Madurai';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 114%;    

  & p {
    margin: 40px 35px;
  }

  & .btn {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  & .carotIcon {
    height: 30px;
    color: white;
  }

  & .appointment-btn  {
    background: #466C3D;
    color: white;
    align-items: center;
    display: flex;
  
  }

  .learn-btn {
    background: #F7C326;
    color: #466C3D;
  } 

`;

export const Button = styled.button`
  margin: 0 50px 0 90px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 200px;
  height: 70px;
  padding: 20px;
  font-size: 15px;
  font-weight: 700;
`