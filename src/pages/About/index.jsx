import {
  AboutMeContainer,
  Interface,
  FlexContainer,
  ImgAboutMe,
  TextAboutMe,
} from "../Home/styles";
import MyImg from "../../assets/teste.jpg";

const About = () => {
  return (
    <AboutMeContainer id="about">
      <Interface>
        <FlexContainer>
          <ImgAboutMe>
            <img src={MyImg} alt="my-photo" />
          </ImgAboutMe>

          <TextAboutMe>
            <h2>
              UM POUCO SOBRE <span>MIM</span>
            </h2>
            <p>
              Meu nome é Fernando Sabino, tenho 19 anos, e eu sou de Fortaleza,
              Ceará. A tecnologia sempre foi parte essencial da minha vida desde
              criança. Ganhei meu primeiro computador aos 6 anos de idade.
              Daquele momento em diante, minha paixão por tudo relacionado à
              tecnologia só cresceu. Esse interesse natural me levou a seguir o
              caminho da programação, onde atualmente estudo.
            </p>
            <p>
              Cada novo desafio e aprendizado em programação me empolga ainda
              mais, reforçando a curiosidade que nasceu lá na infância. Meu
              objetivo é transformar essa paixão em carreira, explorando todas
              as possibilidades que o mundo da tecnologia tem a oferecer.
            </p>
          </TextAboutMe>
        </FlexContainer>
      </Interface>
    </AboutMeContainer>
  );
};

export default About;
