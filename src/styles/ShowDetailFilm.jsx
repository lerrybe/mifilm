import styled from '@emotion/styled';

const AnnounceDiv = styled.div`
  font-size: 50px;  
`;

const ShowTitleWrapDiv = styled.div`
  display: flex;
  width: auto;
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 3px solid #FFFFFF;
`;

const ShowTitleDiv = styled.div`
  font-size: 40px;
  display: flex;
  align-items: flex-end;
`;

const ShowInfoDiv = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.23);
  margin-bottom: 40px;
  padding: 25px;
  box-sizing: border-box;
`;

const ShowPosterDiv = styled.div`
  width: 230px;
  height: 100%;
  margin-right: 25px;
  border: 5px solid white;
  box-sizing: border-box;
`;

const ShowPosterImg = styled.img`
  width: 100%;
  height: 100%; 
`;

const ShowMovieInfoDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShowMovieFieldDiv = styled.div`
  font-size: 22px;
  font-weight: 600;
  height: 60px;
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
`;

const PlayItems = styled.div`
  overflow: auto;
`;

export {
  AnnounceDiv,
  ShowTitleWrapDiv,
  ShowTitleDiv,
  ShowInfoDiv,
  ShowPosterDiv,
  ShowPosterImg,
  ShowMovieInfoDiv,
  ShowMovieFieldDiv,
  PlayItems,
};
