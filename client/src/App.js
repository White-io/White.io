import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Menu from "./components/Menu";
import Timer from "./components/Timer";
import Logo from "./components/Logo";

// 글로벌 스타일 적용
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Rounded Bold';
    src: url('/fonts/HelveticaRoundedBold.otf') format('opentype'); /* public/fonts 경로로 수정 */
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url('/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const CenteredContent = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f1f1f1;
  font-size: 2.2rem;
  text-align: center;
  font-family: 'Helvetica Rounded', sans-serif;
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
      <GlobalStyle />
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
