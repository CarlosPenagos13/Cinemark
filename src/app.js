import Redes from "./components/redes/redes";
import Iconos from "./components/iconos/iconos";
import logo_cinemark from "./images/logo_cinemark.png";
import {
  GeneralContainer,
  Title,
  LogoContainer,
  LogoContainerImg,
  Text,
} from "./Styled";
import BtnsShare from "./components/btns_share/btns_share";

function App() {
  return (
    <GeneralContainer>
      <BtnsShare />
      <Title>Cinemark Ecuador</Title>
      <LogoContainer>
        <LogoContainerImg alt="Logo de Cinemark" src={logo_cinemark} />
      </LogoContainer>
      <Text>
        Revisa nuestra programación, experimenta la mejor tecnología y vive una
        <br />
        experiencia sin igual en Cinemark Ecuador
      </Text>
      <Iconos />
      <Redes />
    </GeneralContainer>
  );
}

export default App;
