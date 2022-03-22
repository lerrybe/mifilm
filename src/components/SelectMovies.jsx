/* eslint-disable no-alert */

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { loadDailyBoxOfficeList } from '../_actions/actions';

import {
  ContentsSubTitleDiv,
  DateNationWrapDiv,
  DateInput,
  NationSelect,
  SubmitButton,
} from '../styles/SelectedMoviesStyle';

export default function SelectMovies() {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [nation, setNation] = useState('K');

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeNation = (event) => {
    setNation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date) {
      alert('날짜를 선택해주세요.');
      return;
    }
    dispatch(loadDailyBoxOfficeList({
      date: date.replaceAll('-', ''),
      nation,
    }));
  };

  return (
    <DateNationWrapDiv>
      <ContentsSubTitleDiv>날짜 및 영화 분류를 선택해주세요.</ContentsSubTitleDiv>
      <DateInput
        type="date"
        defaultValue={date}
        onChange={handleChangeDate}
      />

      <NationSelect
        name="nation"
        onChange={handleChangeNation}
        defaultValue={nation}
      >
        <option defaultValue="F">외국영화</option>
      </NationSelect>

      <SubmitButton
        type="submit"
        onClick={handleSubmit}
      >
        TOP 10 보기
      </SubmitButton>
    </DateNationWrapDiv>
  );
}
