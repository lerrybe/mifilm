import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import YouTube from '@u-wave/react-youtube';

import { get } from '../utils/utils';
import { setLikedMusicList } from '../_actions/actions';

import sound from '../img/sound.svg';

import { ContentsTitleDiv } from '../styles/ContentsTitleDiv';
import {
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
} from '../styles/PlayDeviceStyle';

export default function PlayDevice() {
  const dispatch = useDispatch();
  const selectedMusic = useSelector(get('selectedMusic'));
  const likedMusicList = useSelector(get('storedLikedMusicList'));
  const [volume, setVolume] = useState(0.5);
  const [paused, setPaused] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!likedMusicList) {
      return;
    }
    const targetList = likedMusicList.filter((e) => e.id.videoId === selectedMusic.id.videoId);
    if (targetList.length < 1) {
      setLiked(false);
    } else if (targetList.length >= 1) {
      setLiked(true);
    }
  }, [selectedMusic]);

  const handlePause = () => {
    if (paused === true) {
      setPaused(false);
    }
    if (paused === false) {
      setPaused(true);
    }
  };

  const handlePlayerPause = () => {
    setPaused(true);
  };

  const handlePlayerPlay = () => {
    setPaused(false);
  };

  const handleVolume = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  const handleClickLikedMusic = (item) => {
    const likedMusicArr = [];

    if (!likedMusicList) {
      likedMusicArr.push(item);
      setLiked(true);
    }
    if (likedMusicList) {
      likedMusicArr.push(...likedMusicList);
      const filterLikedMusicList = likedMusicArr.filter((e) => e.id.videoId === item.id.videoId);

      if (filterLikedMusicList.length < 1) {
        likedMusicArr.push(item);
        setLiked(true);
      } else if (filterLikedMusicList.length >= 1) {
        const newLikedMusicArr = likedMusicArr.filter((e) => e.id.videoId !== item.id.videoId);
        setLiked(false);
        dispatch(setLikedMusicList(newLikedMusicArr));
        return;
      }
    }
    dispatch(setLikedMusicList(likedMusicArr));
  };

  if (!selectedMusic) {
    return (
      <PlayDevicediv>
        <ContentsTitleDiv>Playing OST</ContentsTitleDiv>

        <PlaythumbDiv>
          MIFILM
        </PlaythumbDiv>

        <MusicControlDiv>
          <SelectedMusicTitleDiv>
            재생 중인 음악이 없습니다.
          </SelectedMusicTitleDiv>

          <MusicVolumeDiv>
            <MusicVolumeImg src={sound} alt="sound" />
            <MusicVolumeInput
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0"
            />
          </MusicVolumeDiv>

          <SmallButtonWrapDiv>
            <PlayingButton
              type="button"
            >
              재생
            </PlayingButton>

            <LikeButton
              type="button"
            >
              좋아요
            </LikeButton>
          </SmallButtonWrapDiv>

        </MusicControlDiv>
      </PlayDevicediv>
    );
  }

  if (selectedMusic) {
    return (
      <PlayDevicediv>
        <ContentsTitleDiv>Playing OST</ContentsTitleDiv>

        <HideVideo>
          <YouTube
            video={selectedMusic.id.videoId}
            width={640}
            height={480}
            autoplay
            controls={false}
            paused={paused}
            volume={volume}
            onPause={handlePlayerPause}
            onPlaying={handlePlayerPlay}
          />
        </HideVideo>

        <PlaythumbDiv>
          <PlaythumImg src={selectedMusic.snippet.thumbnails.high.url} />
        </PlaythumbDiv>

        <MusicControlDiv>
          <SelectedMusicTitleDiv>
            {selectedMusic.snippet.title}
          </SelectedMusicTitleDiv>

          <MusicVolumeDiv>
            <MusicVolumeImg src={sound} alt="sound" />
            <MusicVolumeInput
              type="range"
              min={0}
              max={1}
              step={0.01}
              onChange={handleVolume}
              defaultValue={volume}
            />
          </MusicVolumeDiv>

          <SmallButtonWrapDiv>
            <PlayingButton
              type="button"
              onClick={handlePause}
            >
              <>
                {paused === true ? '재생' : '중지'}
              </>
            </PlayingButton>

            <LikeButton
              type="button"
              onClick={() => handleClickLikedMusic(selectedMusic)}
            >
              <>
                {liked ? '좋아요 취소' : '좋아요'}
              </>
            </LikeButton>
          </SmallButtonWrapDiv>

        </MusicControlDiv>
      </PlayDevicediv>
    );
  }
}
