import styled from '@emotion/styled';

const FooterDiv = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;

export default function Footer() {
  return (
    <>
      <FooterDiv>
        Music In FILM / lerrybe
      </FooterDiv>
    </>
  );
}
