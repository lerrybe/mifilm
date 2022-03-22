import styled from '@emotion/styled';

const NotFoundDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  font-size: 30px;
`;

export default function NotFoundPage() {
  return (
    <>
      <NotFoundDiv>🕹 잘못된 접근입니다. 돌아가세요!</NotFoundDiv>
    </>
  );
}
