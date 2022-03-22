import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

// images
import home from '../img/home.svg';
import boxoffice from '../img/boxoffice.svg';
import search from '../img/search.svg';
import myost from '../img/myost.svg';

const MainIconWrapDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const MainIconImg = styled.img`
  width: 145px;
  height: 145px;
  margin: 0 25px;
  &:nth-of-type(3) {
    margin: 0 35px 0 10px;
  }
  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-10px);
    }
  }
  &:hover {
    animation: up-down 0.5s infinite ease-in-out alternate;
  }
`;

export default function MainIcon() {
  return (
    <MainIconWrapDiv>
      <Link to="/"><MainIconImg src={home} alt="home" /></Link>
      <Link to="/boxoffice"><MainIconImg src={boxoffice} alt="boxoffice" /></Link>
      <Link to="/search"><MainIconImg src={search} alt="search" /></Link>
      <Link to="/myost"><MainIconImg src={myost} alt="myost" /></Link>
    </MainIconWrapDiv>
  );
}
