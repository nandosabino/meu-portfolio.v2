import {
  ProjectsSection,
  Wrapper,
  Cards,
  Card,
  CardImg,
  CardText,
  CardLeft,
  Technologies,
  CardRight,
} from "../Home/styles";

import projeto1 from "../../assets/Projeto-1.png";
import projeto2 from "../../assets/Projeto-2.png";
import projeto3 from "../../assets/Projeto-3.png";
import projeto4 from "../../assets/Projeto-4.png";

import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Wrapper>
        <header>
          <h2>Meus Projetos</h2>
          <p>Alguns dos meus trabalhos recentes</p>
        </header>

        <Cards>
          <Card>
            <CardImg>
              <a href="#">
                <CardLeft src={projeto1} alt="projeto-1" />
              </a>
            </CardImg>
            <CardText>
              <h3>Private Idiomas</h3>
              <p>Educational Website - Responsivo</p>
            </CardText>
            <Technologies>
              <FaHtml5 size={40} color="#fc4702" />
              <FaCss3Alt size={40} color="#0770c3" />
              <IoLogoJavascript size={40} color="#ffe009" />
              <FaBootstrap size={40} color="rgb(128, 25, 249)" />
            </Technologies>
          </Card>

          <Card>
            <CardImg>
              <a href="#">
                <CardRight src={projeto2} alt="projeto-2" />
              </a>
            </CardImg>
            <CardText>
              <h3>Mario Brothers</h3>
              <p>Landing Page - Responsivo</p>
            </CardText>
            <Technologies>
              <FaHtml5 size={40} color="#fc4702" />
              <FaCss3Alt size={40} color="#0770c3" />
              <IoLogoJavascript size={40} color="#ffe009" />
            </Technologies>
          </Card>

          <Card>
            <CardImg>
              <a href="#">
                <CardLeft src={projeto3} alt="projeto-3" />
              </a>
            </CardImg>
            <CardText>
              <h3>Easy Shopping</h3>
              <p>Landing Page - Responsivo</p>
            </CardText>
            <Technologies>
              <FaHtml5 size={40} color="#fc4702" />
              <FaCss3Alt size={40} color="#0770c3" />
            </Technologies>
          </Card>

          <Card>
            <CardImg>
              <a href="#">
                <CardRight src={projeto4} alt="projeto-4" />
              </a>
            </CardImg>
            <CardText>
              <h3>PS5 Store</h3>
              <p>Purchase Page - Responsivo</p>
            </CardText>
            <Technologies>
              <FaHtml5 size={40} color="#fc4702" />
              <FaCss3Alt size={40} color="#0770c3"/>
            </Technologies>
          </Card>
        </Cards>
      </Wrapper>
    </ProjectsSection>
  );
};

export default Projects;
