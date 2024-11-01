import {
  FooterContainer,
  Flex,
  LogoFooter,
  SocialButton,
  LineFooter,
  Copyright,
} from "../Home/styles";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
      <FooterContainer>
        <div className="interface">
          <LineFooter>
            <Flex>
              <LogoFooter>
                <p>Fernando.</p>
              </LogoFooter>
              <div className="btn-social">
                <a href="https://www.instagram.com/_nandosabino/" target="_blank" rel="noopener noreferrer">
                  <SocialButton>
                    <FaInstagram />
                  </SocialButton>
                </a>
                <a href="https://www.linkedin.com/in/nandosabino/" target="_blank" rel="noopener noreferrer">
                  <SocialButton>
                    <FaLinkedin />
                  </SocialButton>
                </a>
                <a href="https://github.com/nandosabino" target="_blank" rel="noopener noreferrer">
                  <SocialButton>
                    <FaGithub />
                  </SocialButton>
                </a>
                <a href="https://wa.me/5585989732377" target="_blank" rel="noopener noreferrer">
                  <SocialButton>
                    <FaWhatsapp />
                  </SocialButton>
                </a>
              </div>
            </Flex>
          </LineFooter>
          <LineFooter className="border">
            <p>
              <MdEmail />
              <a href="mailto:sabinofernando05@gmail.com.br">sabinofernando05@gmail.com</a>
            </p>
          </LineFooter>
        </div>
        <Copyright>
          &#169; 2024 Fernando Sabino Todos os Direitos Reservados
        </Copyright>
      </FooterContainer>
    );
  };

export default Footer;
