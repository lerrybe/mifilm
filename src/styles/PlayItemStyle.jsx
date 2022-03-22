import styled from '@emotion/styled';

import '../img/cursor-select.svg';

const PlayboxDiv = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 10px;
  display: flex;
  margin-bottom: 15px;
  padding: 10px 15px;
  box-sizing: border-box;

  &:hover {
    background: linear-gradient(90deg, rgba(34, 131, 0, 0.6) 1.89%, rgba(153, 0, 0, 0.6) 100%);
    cursor: url('../img/cursor-select.svg'), auto;
  }
`;

const PlayItemDiv = styled.div`
  width: 90px;
  height: 90%;
  border: 3px solid white;
  border-radius: 10px;
  margin-right: 15px;
`;

const PlayItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const PlayItemTitleDiv = styled.div`
  width: 100%;
  margin-top: 8px;
  font-size: 20px;
  word-break: break-all;
  overflow: auto;
`;

export {
  PlayboxDiv,
  PlayItemDiv,
  PlayItemImg,
  PlayItemTitleDiv,
};
