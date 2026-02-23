import { ProjectCard } from '../components/ProjectCard';

export const AllProjects = () => {
  return (
    <div className="app-wrapper" style={{ padding: '40px 20px' }}>
      <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '50px' }}>
        Technical Repository
      </h2>
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        <ProjectCard 
          title="Mini Audit Trail" 
          desc="A lightweight audit trail system built with React and Node.js to track user actions and changes in applications." 
          tag="React" 
          githubUrl="https://github.com/vishal8291/mini-audit-trail" 
        />
        <ProjectCard 
          title="Railway Announcement System" 
          desc="A Java-based system that generates real-time railway announcements using text-to-speech technology." 
          tag="Java" 
          githubUrl="https://github.com/vishal8291/Railway-Announcement-System" 
        />

        <ProjectCard 
          title="My Portfolio Website" 
          desc="A responsive portfolio website built with React and TypeScript." 
          tag="React" 
          githubUrl="https://github.com/vishal8291/My-Portfolio" 
        />
      </div>
    </div>
  );
};