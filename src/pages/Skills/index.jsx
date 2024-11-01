import {
  SkillsContainer,
  SkillsWrapper,
  SkillsTitle,
  HtmlSkillTitle,
  CssSkillTitle,
  JsSkillTitle,
  ReactSkillTitle,
  TypeScriptSkillTitle,
  GitSkillTitle,
  NodeSkillTitle,
  Description,
  SkillsList,
  SkillItem,
  HtmlIconContainer,
  CssIconContainer,
  JsIconContainer,
  ReactIconContainer,
  TypeScriptIconContainer,
  NodeIconContainer, 
  GitIconContainer,
  SkillDescription,
} from "../Home/styles";
import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsWrapper>
        <SkillsTitle><span>Minhas linguagens e ferramentas</span></SkillsTitle>
        <Description>
          Como um desenvolvedor apaixonado por tecnologia, estou constantemente
          explorando e aprimorando minhas habilidades com uma variedade de
          ferramentas e linguagens. Meu objetivo é criar soluções inovadoras,
          eficientes e visualmente atraentes. Aqui estão algumas áreas em que
          trabalho e as principais tecnologias e ferramentas que uso no meu dia
          a dia:
        </Description>

        <SkillsList>
          <SkillItem>
            <HtmlIconContainer>
              <FaHtml5 size={35} />
            </HtmlIconContainer>
            <HtmlSkillTitle>HTML</HtmlSkillTitle>
            <SkillDescription>
              Tenho uma sólida formação em HTML para construção de sites.
            </SkillDescription>
          </SkillItem>

          <SkillItem>
            <CssIconContainer>
              <FaCss3 size={35} />
            </CssIconContainer>
            <CssSkillTitle>CSS</CssSkillTitle>
            <SkillDescription>
              Tenho um forte domínio de CSS para estilização e responsividade.
            </SkillDescription>
          </SkillItem>

          <SkillItem>
            <JsIconContainer>
              <IoLogoJavascript size={35} />
            </JsIconContainer>
            <JsSkillTitle>JavaScript</JsSkillTitle>
            <SkillDescription>
              Tenho conhecimento em JavaScript para adicionar interatividade e
              dinamismo.
            </SkillDescription>
          </SkillItem>

          <SkillItem>
            <ReactIconContainer>
              <FaReact size={35} />
            </ReactIconContainer>
            <ReactSkillTitle>React</ReactSkillTitle>
            <SkillDescription>
              Utilizo React para criar interfaces dinâmicas e reutilizáveis.
            </SkillDescription>
          </SkillItem>

          <SkillItem>
            <TypeScriptIconContainer>
              <SiTypescript size={35} />
            </TypeScriptIconContainer>
            <TypeScriptSkillTitle>TypeScript</TypeScriptSkillTitle>
            <SkillDescription>
              Conheço TypeScript para tipagem estática e melhor manutenção do
              código.
            </SkillDescription>
          </SkillItem>

          <SkillItem>
            <GitIconContainer>
              <FaGitAlt size={35} />
            </GitIconContainer>
            <GitSkillTitle>Git</GitSkillTitle>
            <SkillDescription>
              Uso Git para controle de versões e colaboração em projetos.
            </SkillDescription>
          </SkillItem>

          <SkillItem>
            <NodeIconContainer>
              <FaNodeJs size={35} />
            </NodeIconContainer>
            <NodeSkillTitle>Node.js</NodeSkillTitle>
            <SkillDescription>
              Conhecimento em Node.js para desenvolvimento backend e APIs.
            </SkillDescription>
          </SkillItem>
        </SkillsList>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
