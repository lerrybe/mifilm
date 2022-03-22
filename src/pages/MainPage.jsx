// components
import MainTitle from '../components/MainTitle';
import MainIcon from '../components/MainIcon';
import MainCharacter from '../components/MainCharacter';
import MainSubIcon from '../components/MainSubIcon';
import Footer from '../components/Footer';

// styles
import CenterWrapDiv from '../styles/CenterWrapDiv';

export default function MainPage() {
  return (
    <CenterWrapDiv>
      <MainTitle />
      <MainIcon />
      <MainCharacter />
      <MainSubIcon />
      <Footer />
    </CenterWrapDiv>
  );
}
