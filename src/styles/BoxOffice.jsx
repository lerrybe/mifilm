import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const InnerContainerDiv = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
`;

const MovieList = styled.li`
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
  InnerContainerDiv,
  MovieList,
  StyledLink,
};
