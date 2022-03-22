import styled from '@emotion/styled';

const SubIconImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 12px;
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

export default SubIconImg;
