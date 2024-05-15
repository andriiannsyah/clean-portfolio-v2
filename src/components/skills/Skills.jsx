import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

function Skills() {
  return (
    <section className="section__skill section" id="skill">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Levels</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
