import {
  PlayboxDiv,
  PlayItemDiv,
  PlayItemImg,
  PlayItemTitleDiv,
} from '../styles/PlayItemStyle';

export default function PlayItem({ title, image, handleClickSelectedMusic }) {
  return (
    <>
      <PlayboxDiv
        onClick={handleClickSelectedMusic}
      >
        <PlayItemDiv>
          <PlayItemImg src={image} />
        </PlayItemDiv>

        <PlayItemTitleDiv>
          {title}
        </PlayItemTitleDiv>
      </PlayboxDiv>
    </>
  );
}
