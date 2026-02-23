interface ProjectProps {
  title: string;
  desc: string;
  tag: string;
  githubUrl?: string; 
}

export const ProjectCard = ({ title, desc, tag, githubUrl }: ProjectProps) => {
  return (
    <div className="glass-card project-card">
      <div className="project-tag">{tag}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      
      {githubUrl && (
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-btn" 
          style={{ 
            marginTop: '15px', 
            fontSize: '0.8rem', 
            display: 'inline-block',
            textDecoration: 'none',
            padding: '8px 15px'
          }}
        >
          View on GitHub
        </a>
      )}
    </div>
  );
};