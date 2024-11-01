import Navbar from "./Navbar/index";
import Hero from "./Hero/index";
import About from "../About/index";
import Skills from "../Skills/index"
import SkillsGraphics from "../Skills/SkillsGraphics/index"
import Projects from "../Projects/index"
import Form from "../Form/index"
import Footer from "../Footer/index"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <SkillsGraphics/>
      <Projects/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Home;
