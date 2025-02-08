import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/globalStyles"; //글로벌 스타일 불러오기
import Menu from "./components/Menu";
import Timer from "./components/Timer";
import Logo from "./components/Logo";

const CenteredContent = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f1f1f1;
  font-size: 2.2rem;
  text-align: center;
  font-weight: bold;
`;

const LogoContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
`;

const VolumeControl = styled.div`
  position: fixed;
  top: 20px;
  left: 30px;
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  
  .volume {
    width: 150px;
    margin-left: 10px;
  }
`;

const App = () => {
  const [selectedSound, setSelectedSound] = useState(null);

  const handleMenuSelect = (sound) => {
    setSelectedSound(sound);
  };

  return (
    <>
      <GlobalStyles />  {/* ✅ 글로벌 스타일 적용 */}
      
      {!selectedSound ? (
        <LogoContainer>
          <Logo />
        </LogoContainer>
      ) : (
        <VolumeControl show={!!selectedSound}>
          <img src="/Speaker.png" alt="Speaker Icon" />
          <input className="volume" type="range" min="0" max="100" step="5" />
        </VolumeControl>
      )}

      <Menu onMenuSelect={handleMenuSelect} />

      {selectedSound ? (
        <CenteredContent>
          <Timer sound={selectedSound} />
        </CenteredContent>
      ) : (
        <CenteredContent>Silent than Silence</CenteredContent>
      )}
    </>
  );
};

export default App;
