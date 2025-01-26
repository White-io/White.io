import React, { useState } from "react";
import styled from "styled-components";

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 24px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 50;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 검정색 배경에 50% 투명도 */
  color: white;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.7);
  z-index: 40;
  overflow-y: auto;
`;


const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  list-style-type: none;
  margin: 50px 0 0 0;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  margin-top: 10px;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
`;

const SubMenuItem = styled.li`
  margin: 10px 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Menu = ({ onMenuSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = {
    Nature: ["Raindrop", "Wave", "Waterfall"],
    Environment: ["City", "Forest", "Ocean"],
    Society: ["Cafe", "Office", "Street"],
    Mechanic: ["Engine", "Factory", "Machinery"],
    Brainwave: ["Focus", "Relaxation", "Sleep"],
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleThemeClick = (theme) =>
    setSelectedTheme(selectedTheme === theme ? null : theme);

  const handleSubMenuClick = (sound) => {
    onMenuSelect(sound);
    setIsMenuOpen(false);
    setSelectedTheme(null);
  };

  return (
    <div>
      <MenuButton onClick={toggleMenu}>☰</MenuButton>
      {isMenuOpen && (
        <MenuContainer>
          <MenuList>
            {Object.keys(themes).map((theme) => (
              <MenuItem key={theme} onClick={() => handleThemeClick(theme)}>
                {theme}
                {selectedTheme === theme && (
                  <SubMenu>
                    {themes[theme].map((sound) => (
                      <SubMenuItem
                        key={sound}
                        onClick={() => handleSubMenuClick(sound)}
                      >
                        {sound}
                      </SubMenuItem>
                    ))}
                  </SubMenu>
                )}
              </MenuItem>
            ))}
          </MenuList>
        </MenuContainer>
      )}
    </div>
  );
};

export default Menu;