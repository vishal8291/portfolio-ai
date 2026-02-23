import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { ProjectCard } from './components/ProjectCard';
import ChatWidget from './components/ChatWidget';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { AllProjects } from './pages/Projects';
import { Contact } from './pages/Contact';
function App() {
  return (
    <div className="app-wrapper">
  
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <Navbar />
      
      <Routes>
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={
          <>
            <section id="home" className="hero-viewport">
              <Hero />
            </section>

            <main className="main-layout">
              
              <aside className="sticky-sidebar">
                <div className="glass-card profile-card">
                  <h3 className="section-label" style={{ color: '#818cf8', marginBottom: '15px' }}>Identity</h3>
                  <p className="bio-text">Final Year B.Sc. IT @ Thakur College</p>
                  <p className="bio-text">MERN & AI Developer</p>
                  <div className="status-indicator">
                    <span className="dot"></span> Available for Internships
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <TechStack />
                  </div>
                </div>
              </aside>

              
              <div className="scroll-content">
                <section id="projects">
                  <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Featured Work</h2>
                  <ProjectCard 
                    title="AgencyMaster (AI CRM)" 
                    desc="A scalable 'Agency OS' built with Next.js and React featuring a full authentication system." 
                    tag="MERN Stack" 
                  />
                  <div style={{ marginTop: '30px', textAlign: 'center' }}>
                    
                    <Link to="/projects" className="contact-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                      View All Projects
                    </Link>
                  </div>
                </section>

                <section id="chat">
                  <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Talk to My AI</h2>
                  <div className="ai-container-glow glass-card">
                    <ChatWidget />
                  </div>
                </section>
              </div>
            </main>
          </>
        } />

        
        <Route path="/projects" element={<AllProjects />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;