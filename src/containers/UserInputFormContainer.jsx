/* eslint-disable no-alert */

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import UserInputForm from '../components/UserInputForm';
import LoggedinUsername from '../components/LoggedinUsername';

import { get } from '../utils/utils';
import { login } from '../_actions/actions';

export default function UserInputFormContainer() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const inputUsername = useSelector(get('inputUsername'));

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = () => {
    if (!username) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (username.length > 8) {
      alert('공백 포함 8글자까지만 입력이 가능합니다.');
      return;
    }
    dispatch(login(username));
  };

  return (
    <>
      {inputUsername ? (
        <LoggedinUsername
          inputUsername={inputUsername}
        />
      ) : (
        <UserInputForm
          username={username}
          handleChangeUsername={handleChangeUsername}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
