import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
  HeroContainer,
  HeroTitle,
  HeroParagraph,
  SocialIconsContainer,
  DownloadButton,
  ContactButton,
  ButtonContainer,
} from "../styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Olá, meu nome é <br /> Fernando Sabino<span>!</span>
      </HeroTitle>
      <HeroParagraph>E eu sou um Programador.</HeroParagraph>
      <SocialIconsContainer>
        <a
          href="https://www.linkedin.com/in/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} style={{ color: "#0b66c3" }} />
        </a>
        <a
          href="https://github.com/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} style={{ color: "#000308" }} />
        </a>
        <a
          href="https://www.instagram.com/seu-perfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={32} style={{ color: "#a133ad" }} />
        </a>
      </SocialIconsContainer>
      <ButtonContainer>
      <DownloadButton
        href="public"
        download="Fernando Sabino - Desenvolvedor FullStack .pdf"
      >
        Download CV
      </DownloadButton>
      <ContactButton
        href="https://wa.me/5585989732377"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contate-me
      </ContactButton>
      </ButtonContainer>
    </HeroContainer>
  );
};

export default Hero;
