import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {SkillsGraphicWrapper, TechnicalSection, ProfessionalSection, SkillsGraphicTitle, BarContainer, ProgressBar, CircularSkillsWrapper, CircularSkillContainer } from "../../Home/styles"

const technicalSkills = [
  { technology: "HTML e CSS", proficiency: 88 },
  { technology: "JavaScript", proficiency: 59 },
  { technology: "React", proficiency: 10 },
  { technology: "TypeScript", proficiency: 1 },
  { technology: "GitHub", proficiency: 68 },
  { technology: "Node.js", proficiency: 15 },
];

const professionalSkills = [
  { skill: "Comunicação", proficiency: 90 },
  { skill: "Trabalho em Equipe", proficiency: 93 },
  { skill: "Criatividade", proficiency: 82 },
  { skill: "Gerenciamento de Projetos", proficiency: 79 },
];

const SkillsSection = () => {
  return (
    <SkillsGraphicWrapper>
      <TechnicalSection>
        <SkillsGraphicTitle>Skills Técnicas</SkillsGraphicTitle>
        {technicalSkills.map((item, index) => (
          <div key={index} style={{ width: "100%", marginBottom: "10px" }}>
            <p style={{ marginBottom: "5px" }}>{item.technology}</p>
            <BarContainer>
              <ProgressBar width={item.proficiency} />
            </BarContainer>
          </div>
        ))}
      </TechnicalSection>

      <ProfessionalSection>
        <SkillsGraphicTitle>Skills Profissionais</SkillsGraphicTitle>
        <CircularSkillsWrapper>
          {professionalSkills.map((item, index) => (
            <CircularSkillContainer key={index}>
              <CircularProgressbar
                value={item.proficiency}
                text={`${item.proficiency}%`}
                styles={{
                  path: { stroke: "#007bff" },
                  text: { fill: "#007bff", fontSize: "18px" },
                  trail: { stroke: "#e0e0e0", strokeWidth: 8 },
                  root: { filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))" },
                }}
              />
              <p style={{ marginTop: "10px", fontSize: "16px" }}>{item.skill}</p>
            </CircularSkillContainer>
          ))}
        </CircularSkillsWrapper>
      </ProfessionalSection>
    </SkillsGraphicWrapper>
  );
};

export default SkillsSection;
