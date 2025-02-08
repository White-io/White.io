import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
    position: fixed;
    top: 1vh;
    left: 1vw;
    display: flex;
    align-items: center;
    gap: 0.1vw;
`;

const LogoImage = styled.img`
    width: clamp(50px, 8vw, 90px);
    height: auto;
`;

const LogoText = styled.h3`
    font-size: clamp(12px, 2vw, 24px);
    color: white;
    margin: 0;
`;

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage src="/logo.png" alt="White.io Logo" />
            <LogoText>White.io</LogoText>
        </LogoContainer>
    );
};

export default Logo;

