import styled from '@emotion/styled';

const MainTitleWrapDiv = styled.div`
  width: 100vw;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  box-sizing: border-box;
`;

const MainTitleDiv = styled.div`
  width: 350px;
  font-size: 75px;
  box-sizing: border-box;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, #fbfcb9be, #ffcdf3aa, #65d3ffaa);
  border-image-slice: 1;
`;

const MainSubTitleDiv = styled.div`
  width: 100%;
  font-size: 20px;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 7px;
`;

export default function MainTitle() {
  return (
    <MainTitleWrapDiv>
      <MainTitleDiv>MIFILM</MainTitleDiv>
      <MainSubTitleDiv>영화 속 OST들을 들어보자!</MainSubTitleDiv>
    </MainTitleWrapDiv>
  );
}
