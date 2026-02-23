export const TechStack = () => {
  const skills = ["Java", "Python", "React", "TypeScript", "MySQL", "IoT"];
  return (
    <div className="tech-container">
      {skills.map((skill) => (
        <span key={skill} className="skill-pill">{skill}</span>
      ))}
    </div>
  );
};