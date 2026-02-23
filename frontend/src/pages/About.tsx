
import { Code2, Database, ShieldCheck, Rocket, BrainCircuit } from 'lucide-react';
// 1. Correct import for your local profile image
import profileImg from '../assets/photo.jpg'; 

export const About = () => {
  return (
    <div className="app-wrapper" style={{ padding: '100px 20px', minHeight: '100vh' }}>
      <div className="main-layout" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        
        <div className="sticky-sidebar">
          <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
            <div style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              margin: '0 auto 20px',
              border: '4px solid #818cf8',
              overflow: 'hidden',
              background: '#1e1e2e',
              boxShadow: '0 0 20px rgba(129, 140, 248, 0.4)'
            }}>
              <img 
                src={profileImg} 
                alt="Vishal Tiwari" 
                style={{ width: '95%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <h2 className="gradient-text">Vishal Tiwari</h2>
            <p className="bio-text">B.Sc. IT @ Thakur College</p>
            <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <Rocket size={18} color="#818cf8" />
                <span>Focus: Scalable ERP Systems</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <BrainCircuit size={18} color="#818cf8" />
                <span>Goal: Full-Stack Engineer</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="scroll-content">
          <div className="glass-card" style={{ padding: '40px' }}>
            <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Me</h1>
            <p className="bio-text" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              My name is <strong>Vishal Tiwari</strong>, and I am currently pursuing a Bachelor of Science in Information Technology (BSc IT). 
              After completing my 12th in 2018, I resumed my academic journey in 2023 with a clear focus on software development and full-stack engineering.
            </p>

            <hr style={{ border: '0.1px solid rgba(255,255,255,0.1)', margin: '30px 0' }} />

            <h2 className="gradient-text">Technical Arsenal</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div className="glass-card" style={{ padding: '20px' }}>
                <h4 style={{ color: '#818cf8', marginBottom: '10px' }}>Frontend & UI</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>React.js, Next.js, Tailwind CSS, TypeScript, HTML/CSS/JS</p>
              </div>
              <div className="glass-card" style={{ padding: '20px' }}>
                <h4 style={{ color: '#818cf8', marginBottom: '10px' }}>Backend & Mobile</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Node.js, NestJS, Android Development (Activities, Intents, Services)</p>
              </div>
              <div className="glass-card" style={{ padding: '20px' }}>
                <h4 style={{ color: '#818cf8', marginBottom: '10px' }}>Database & ORM</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>MongoDB, MySQL, PostgreSQL, Prisma ORM, Supabase</p>
              </div>
              <div className="glass-card" style={{ padding: '20px' }}>
                <h4 style={{ color: '#818cf8', marginBottom: '10px' }}>Foundations</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>C, C++, Java, Python, DBMS, PL/SQL, Git & GitHub</p>
              </div>
            </div>

            <hr style={{ border: '0.1px solid rgba(255,255,255,0.1)', margin: '30px 0' }} />

            <h2 className="gradient-text">Active Development: AgencyOS</h2>
            <p style={{ opacity: 0.8, marginBottom: '20px' }}>
              An enterprise-grade ERP system designed to unify project management, CRM, and billing into a single platform.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <ShieldCheck color="#818cf8" size={32} />
                <div>
                  <strong>Security & RBAC:</strong>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Implementing strict Role-Based Access Control using custom NestJS Guards to isolate Admin and Client-level data securely.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Database color="#818cf8" size={32} />
                <div>
                  <strong>Backend Architecture:</strong>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Developing a structured backend using Prisma ORM to manage relational data efficiently with JWT-based authentication.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Code2 color="#818cf8" size={32} />
                <div>
                  <strong>Financial Engine:</strong>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Building a billing module with server-side PDF generation for tax-compliant invoicing and real-time revenue tracking.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(129, 140, 248, 0.1)', borderRadius: '10px', border: '1px solid rgba(129, 140, 248, 0.3)' }}>
              <h3 style={{ marginBottom: '10px', color: '#818cf8' }}>Core Strengths</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                My strengths include structured problem-solving, logical debugging, and system-level thinking. 
                I am focused on building <strong>production-level systems</strong> capable of designing secure, scalable, and performance-driven applications.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};