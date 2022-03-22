import styled from '@emotion/styled';

const LoggedinUserDiv = styled.div`
  width: 345px;
  color: #FFFFFF;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export default function LoggedinUsername({ inputUsername }) {
  return (
    <LoggedinUserDiv>
      {inputUsername}
      님, 안녕하세요!
    </LoggedinUserDiv>
  );
}
