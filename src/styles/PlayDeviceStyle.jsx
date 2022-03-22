import styled from '@emotion/styled';

import '../img/cursor-select.svg';

const PlayDevicediv = styled.div`
  width: 30%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 60px 2% 2% 2%;
`;

const PlaythumbDiv = styled.div`
  width: 85%;
  height: 450px;
  border: 4px solid white;
  box-sizing: border-box;
  margin: 50px 0 30px 0;
  background-color: rgba(0, 0, 0, 0.38);
  font-size: 40px;
  color: #ffffff7f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaythumImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MusicControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
`;

const SelectedMusicTitleDiv = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const MusicVolumeDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const MusicVolumeImg = styled.img`
  width: 25px;
  height: auto;
  margin-right: 10px;
`;

const MusicVolumeInput = styled.input`
  width: 100%; 
  -webkit-appearance: none; 
  background: #d5d4d394;
  height: 8px;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: #ffd000;
    border-radius:50%;
  }
`;

const PlayingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  background: rgba(111, 255, 60, 0.22);
  border: 5px solid #FFFFFF;
  color: #FFFFFF;
  box-sizing: border-box;
  font-size: 18px;
  font-family: 'DungGeunMo';
  border-radius: 5px;
  margin: 5px;
  &:hover {
    background: rgba(52, 122, 26, 0.842);
    cursor: url('../img/cursor-select.svg'), auto;
  }
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  background: rgba(255, 3, 5, 0.27);
  border: 5px solid #FFFFFF;
  color: #FFFFFF;
  box-sizing: border-box;
  font-size: 18px;
  font-family: 'DungGeunMo';
  border-radius: 5px;
  margin: 5px;
  &:hover {
    background: rgba(160, 21, 21, 0.945);
    cursor: url('../img/cursor-select.svg'), auto;
  }
`;

const HideVideo = styled.div({
  position: 'fixed',
  top: '-10000px',
  opacity: 0,
});

const SmallButtonWrapDiv = styled.div`
  display: flex;
`;

export {
  PlayDevicediv,
  PlaythumbDiv,
  PlaythumImg,
  MusicControlDiv,
  SelectedMusicTitleDiv,
  MusicVolumeDiv,
  MusicVolumeImg,
  MusicVolumeInput,
  PlayingButton,
  LikeButton,
  HideVideo,
  SmallButtonWrapDiv,
};
