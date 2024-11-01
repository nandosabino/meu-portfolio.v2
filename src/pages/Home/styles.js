import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 170px;
`;

export const Logo = styled.p`
  font-size: 2.5rem;
  color: #007bff;
  font-weight: 800;
  cursor: default;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 60px;
  font-size: 20px;
  cursor: pointer;
`;

export const NavItem = styled.li`
  position: relative;
  color: #002d72;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #007bff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  margin-top: 70px;
`;

export const HeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #002d72;
  width: 70%;
  font-size: 70px;
  font-weight: 900;

  span {
    color: #007bff;
  }
`;

export const HeroParagraph = styled.p`
  width: 50%;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  line-height: 40px;
  color: #007bff;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const DownloadButton = styled.a`
  display: inline-block;
  padding: 16px 45px;
  margin-right: 25px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  border: 0;
  border-radius: 64px;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 8px #007bff;
    transform: scale(1.05);
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  padding: 16px 45px;
  margin-right: 25px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  border: 0;
  border-radius: 64px;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 8px #007bff;
    transform: scale(1.05);
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const AboutMeContainer = styled.section`
  position: relative;
  padding: 40px 4%;
`;

export const Interface = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: center;
  margin-top: 115px;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

export const ImgAboutMe = styled.div`
  img {
    border-radius: 5%;
  }
`;

export const TextAboutMe = styled.div`
  color: #232527;
  position: relative;
  z-index: 10;

  h2 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 30px;
    color: #002d72;

    span {
      color: #007bff;
      display: block;
    }
  }

  p {
    margin: 20px 0;
    font-size: 20px;
    text-align: justify;
  }
`;

export const ButtonAboutMe = styled.button`
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SkillsContainer = styled.section`
  position: relative;
  scroll-margin-top: 15rem;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 4rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillsTitle = styled.h2`
  color: #007bff;
  font-size: 2.5rem;
  position: relative;
`;

export const Description = styled.p`
  color: #232527;
  font-size: 18px;
  max-width: 56rem;
  margin: 0 auto 6rem;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const SkillItem = styled.li`
  list-style-type: none;
  text-align: center;
  flex: 1 1 19rem;
  max-width: 22rem;
`;

export const IconContainer = styled.div`
  padding: 1px;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.2);
  }
`;

export const HtmlIconContainer = styled(IconContainer)`
  &:hover {
    background-color: #f06529;
  }
`;

export const CssIconContainer = styled(IconContainer)`
  &:hover {
    background-color: #2965f1;
  }
`;

export const JsIconContainer = styled(IconContainer)`
  &:hover {
    background-color: #f0db4f;
  }
`;

export const ReactIconContainer = styled(IconContainer)`
  &:hover {
    background-color: #66dbfc;
  }
`;

export const TypeScriptIconContainer = styled(IconContainer)`
  &:hover {
    background-color: #377cc9;
  }
`;

export const GitIconContainer = styled(IconContainer)`
  &:hover {
    background-color: #df533c;
  }
`;

export const NodeIconContainer = styled(IconContainer)`
  &:hover {
    background-color: #87ce30;
  }
`;

export const ImgSkillsContainer = styled.div`
  background-color: #eeeeee;
  padding: 1px;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  svg {
    font-size: 2.5rem;
  }

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0.6rem 1.2rem rgba(0, 0, 0, 0.2);
  }
`;

export const SkillTitle = styled.h3`
  color: #007bff;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const HtmlSkillTitle = styled.h3`
  color: #f06529;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const CssSkillTitle = styled.h3`
  color: #2965f1;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const JsSkillTitle = styled.h3`
  color: #f0db4f;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const ReactSkillTitle = styled.h3`
  color: #66dbfc;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const TypeScriptSkillTitle = styled.h3`
  color: #377cc9;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const GitSkillTitle = styled.h3`
  color: #df533c;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const NodeSkillTitle = styled.h3`
  color: #87ce30;
  font-size: 25px;
  font-weight: 500;
  margin: 32px 0 24px;
`;

export const SkillDescription = styled.p`
  color: #002d72;
`;

export const SkillsGraphicWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;

export const TechnicalSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

export const ProfessionalSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

export const SkillsGraphicTitle = styled.h2`
  font-size: 2.2rem;
  color: #002d72;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;

export const BarContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ProgressBar = styled.div`
  width: ${(props) => props.width}%;
  background-color: #007bff;
  height: 10px;
  border-radius: 5px;
`;

export const CircularSkillContainer = styled.div`
  width: 150px;
  height: auto;
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CircularSkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-items: center;
`;

export const MainText = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  color: #007bff;

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #007bff;
    cursor: default;
  }

  span {
    color: #002d72;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: default;
  }
`;

export const ProjectsSection = styled.section`
  overflow: hidden;
  position: relative;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  color: #007bff;

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #007bff;
    cursor: default;
  }

  p {
    color: #232527;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: default;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  justify-content: center;
  align-items: start;
`;

export const Card = styled.div`
  margin: 1rem;
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CardText = styled.div`
  color: #002d72;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    cursor: default;
  }

  p {
    font-size: 1rem;
    cursor: default;
  }
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 15px;
`;

export const CardLeft = styled.img`
  width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 20px #002e7248);
  margin-bottom: 4rem;
  transition: transform 0.3s ease-in-out;
  animation: float2 3s ease-in-out infinite;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(1px 3px 15px #007bff6e);
  }
`;

export const CardRight = styled.img`
  width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 20px #002e7248);
  margin-bottom: 4rem;
  transition: transform 0.3s ease-in-out;
  animation: float2 3s ease-in-out infinite;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(1px 3px 15px #007bff6e);
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 80px 4%;
`;

export const Title = styled.h2`
  color: #002d72;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  cursor: default;

  span {
    color: #007bff;
  }
`;

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  position: relative;
  z-index: 10;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #007bff46;
  border: 0;
  outline: 0;
  padding: 20px 15px;
  border-radius: 15px;
  color: #002d72;
  font-size: 18px;
  position: relative;
  z-index: 10;

  &::placeholder {
    color: #002d72;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  background-color: #007bff46;
  border: 0;
  outline: 0;
  padding: 20px 15px;
  border-radius: 15px;
  color: #002d72;
  font-size: 18px;
  resize: none;
  max-height: 200px;

  &::placeholder {
    color: #002d72;
  }
`;

export const ButtonForm = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const SubmitButton = styled.input.attrs({ type: "submit" })`
  display: inline-block;
  padding: 16px 45px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  border: 0;
  border-radius: 64px;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 8px #007bff;
    transform: scale(1.05);
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  box-shadow: 0 0 7px 0 #0b66c3;
  color: #f0f4f8;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 4%;
  background-color: #002d72;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LineFooter = styled.div`
  padding: 20px 0;
`;

export const Border = styled.div`
  border-top: 2px solid #0b66c3;
`;

export const LogoFooter = styled.div`
  p {
    font-size: 2.5rem;
    color: #007bff;
    font-weight: 800;
    cursor: default;
  }
`;

export const SocialButton = styled.button`
  width: 150px;
  border: none;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0b66c3;
  font-size: 0.9rem;
  padding: 1.5rem;
  font-weight: 100;
`;
