import { NavbarContainer, Logo, NavMenu, NavItem } from "../styles";

const NavBar = () => {
  return (
    <NavbarContainer>
      <Logo>Fernando.</Logo>
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>Sobre Mim</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Projetos</NavItem>
        <NavItem>Contate-me</NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default NavBar;
