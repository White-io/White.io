import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 30px;
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    width: 80px;
    height: 80.45px;
`;

const LogoText = styled.h3`
    position: fixed;
    top: 2.5%;
    left: 110px;
    color: white;
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
