import styled from '@emotion/styled';

import NavigationBar from '../components/NavigationBar';
import MyOstContainer from '../containers/MyOstContainer';
import PlayDevice from '../components/PlayDevice';

const MyOstWrapDiv = styled.div`
  display: flex;
`;

export default function MyOstPage() {
  return (
    <MyOstWrapDiv>
      <NavigationBar />
      <MyOstContainer />
      <PlayDevice />
    </MyOstWrapDiv>
  );
}
