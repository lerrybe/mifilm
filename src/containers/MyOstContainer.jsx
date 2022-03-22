import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { setSelectedMusic } from '../_actions/actions';

import { get } from '../utils/utils';

import myost from '../img/myost.svg';

import PlayItem from '../components/PlayItem';

import ContainerWrapDiv from '../styles/ContainerWrapDiv';
import SubIconImg from '../styles/SubIconImg';
import {
  ContentsSubTitleDiv,
  ContentsTitleDiv,
  ContentsTitleWrapDiv,
} from '../styles/ContentsTitleDiv';

const LikedMusicTitleDiv = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

export default function MyOstContainer() {
  const dispatch = useDispatch();

  const storedLikedMusicList = useSelector(get('storedLikedMusicList'));

  const handleClickSelectedMusic = (item) => {
    dispatch(setSelectedMusic(item));
  };

  return (
    <ContainerWrapDiv>
      <ContentsTitleWrapDiv>
        <SubIconImg src={myost} alt="myost" />
        <ContentsTitleDiv>My Ost</ContentsTitleDiv>
      </ContentsTitleWrapDiv>

      <ContentsSubTitleDiv>내가 좋아하는 OST</ContentsSubTitleDiv>
      {!storedLikedMusicList || storedLikedMusicList.length === 0 ? (
        <LikedMusicTitleDiv>
          좋아요를 누른 OST가 없습니다.
        </LikedMusicTitleDiv>
      ) : (
        <>
          {storedLikedMusicList.map((item) => (
            <PlayItem
              key={item.snippet.title}
              title={item.snippet.title}
              image={item.snippet.thumbnails.default.url}
              handleClickSelectedMusic={() => handleClickSelectedMusic(item)}
            />
          ))}
        </>
      )}
    </ContainerWrapDiv>
  );
}
