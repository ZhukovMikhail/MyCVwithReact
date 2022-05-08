import './App.styled.jsx';
import { Container } from 'App.styled';
import { MainInfo } from 'components/MainInfo/MainInfo.jsx';
import { SidedeBar } from 'components/SifedeBar/SidedeBar.jsx';

function App() {
  return (
    <Container>
      <SidedeBar></SidedeBar>
      <MainInfo></MainInfo>
    </Container>
  );
}

export default App;
