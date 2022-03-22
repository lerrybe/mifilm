import styled from '@emotion/styled';
import character from '../img/character.svg';
import UserInputFormContainer from '../containers/UserInputFormContainer';

const CharacterWrapDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 320px;
  margin: 50px 0;
`;

const CharacterDiv = styled.div`
  width: 210px;
  height: 210px;
`;

const CharacterImg = styled.img`
  width: 210px;
  height: 210px;
  @keyframes rotate {
    from {
      transform: rotate(-10deg);
    }
    to {
      transform: rotate(10deg);
    }
  }
  animation: rotate 3s infinite ease-in-out alternate;
`;

const CharacterUserWrapDiv = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  margin-bottom: 80px;
  padding-top: 70px;
`;

export default function MainCharacter() {
  return (
    <CharacterWrapDiv>
      <CharacterDiv>
        <CharacterImg src={character} alt="character" />
      </CharacterDiv>
      <CharacterUserWrapDiv>
        <UserInputFormContainer />
      </CharacterUserWrapDiv>
    </CharacterWrapDiv>
  );
}
