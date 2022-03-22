import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const SearchInputWrapDiv = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 80%;
  height: 80px;
  background: rgba(255, 255, 255, 0.21);
  border: 5px solid #FFFFFF;
  color: #FFFFFF;
  box-sizing: border-box;
  padding: 4px 0 4px 14px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 25px;
  font-family: 'DungGeunMo';
  &::placeholder {
    color: #FFFFFF;
    font-size: 25px;
    font-family: 'DungGeunMo';
  }
`;

const MiddleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 80px;
  background: #122157;
  border: 5px solid #FFFFFF;
  color: #FFFFFF;
  box-sizing: border-box;
  font-size: 25px;
  font-family: 'DungGeunMo';
  border-radius: 5px;
`;

const MovieItem = styled.li`
  font-size: 25px;
  font-weight: 600;
  font-family: DungGeunMo;
  color: #d7dfeb;
  margin-bottom: 23px;
`;

const StyledLink = styled(Link)`
  color: #d7dfeb;
  &:hover {
    color: #FFD717;
  }
`;

export {
  SearchInputWrapDiv,
  SearchInput,
  MiddleButton,
  MovieItem,
  StyledLink,
};
