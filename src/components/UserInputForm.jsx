import styled from '@emotion/styled';
import SmallButton from '../styles/SmallButton';

const UserInput = styled.input`
  display: flex;
  align-items: center;
  width: 255px;
  height: 60px;
  background: rgba(255, 255, 255, 0.21);
  border: 5px solid #FFFFFF;
  color: #FFFFFF;
  box-sizing: border-box;
  padding: 4px 0 4px 14px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'DungGeunMo';
  &::placeholder {
    color: #FFFFFF;
    font-size: 20px;
    font-family: 'DungGeunMo';
  }
`;

export default function UserInputForm({ username, handleChangeUsername, handleSubmit }) {
  return (
    <>
      <UserInput
        type="text"
        name="name"
        placeholder="이름을 입력해주세요."
        defaultValue={username || ''}
        onChange={handleChangeUsername}
      />
      <SmallButton
        type="submit"
        onClick={handleSubmit}
      >
        입력
      </SmallButton>
    </>
  );
}
