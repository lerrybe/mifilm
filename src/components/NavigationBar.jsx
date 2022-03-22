import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import home from '../img/home.svg';
import boxoffice from '../img/boxoffice.svg';
import search from '../img/search.svg';
import myost from '../img/myost.svg';

const NavigationDiv = styled.div`
  width: 200px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavTitleDiv = styled.div`
  margin-bottom: 70px;
  padding-bottom: 10px;
  font-size: 40px;
  border-bottom: 3px solid white;
  margin-top: 100px;
`;

const NavIconDiv = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 25px;
`;

const NavIconImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default function NavigationBar() {
  return (
    <NavigationDiv>
      <NavTitleDiv>MIFILM</NavTitleDiv>
      <NavIconDiv>
        <Link to="/"><NavIconImg src={home} alt="home" /></Link>
      </NavIconDiv>
      <NavIconDiv>
        <Link to="/boxoffice"><NavIconImg src={boxoffice} alt="boxoffice" /></Link>
      </NavIconDiv>
      <NavIconDiv>
        <Link to="/search"><NavIconImg src={search} alt="search" /></Link>
      </NavIconDiv>
      <NavIconDiv>
        <Link to="/myost"><NavIconImg src={myost} alt="myost" /></Link>
      </NavIconDiv>
    </NavigationDiv>
  );
}
