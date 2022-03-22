import styled from '@emotion/styled';

import NavigationBar from '../components/NavigationBar';
import PlayDevice from '../components/PlayDevice';
import BoxOfficeContainer from '../containers/BoxOfficeContainer';
import { clearItem } from '../_services/storage';

const BoxOfficeWrapDiv = styled.div`
  display: flex;
`;

export default function BoxOfficePage() {
  clearItem('movieInfo');

  return (
    <BoxOfficeWrapDiv>
      <NavigationBar />
      <BoxOfficeContainer />
      <PlayDevice />
    </BoxOfficeWrapDiv>
  );
}
