import { Github, Mail, MapPin, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      const response = await axios.post('https://manufacturer-vocabulary-telecommunications-america.trycloudflare.com/contact', formData);
      
      if (response.data.status === "success") {
        alert("Message received! Check MongoDB Compass.");
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      alert("Error: Ensure your FastAPI backend is running!");
    }
  };

  return (
    <div className="app-wrapper" style={{ padding: '80px 20px', minHeight: '100vh' }}>
      <div className="main-layout" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        

        <div className="sticky-sidebar">
          <div className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div>
              <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '10px' }}>Connect</h2>
              <p className="bio-text">Final Year B.Sc. IT @ Thakur College</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              
              <a 
                href="https://github.com/vishal8291" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  padding: '15px', 
                  textDecoration: 'none',
                  color: 'white',
                  border: '1px solid rgba(129, 140, 248, 0.3)' 
                }}
              >
                <Github size={24} color="#818cf8" />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.9rem', color: '#818cf8' }}>Technical Code</div>
                  <div style={{ fontWeight: 'bold' }}>GitHub Profile</div>
                </div>
                <ExternalLink size={16} opacity={0.5} />
              </a>

              <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px' }}>
                <MapPin size={24} color="#818cf8" />
                <span>Mumbai, India</span>
              </div>

              <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px' }}>
                <Mail size={24} color="#818cf8" />
                <span style={{ fontSize: '0.9rem' }}>vishaltiwari101999@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="scroll-content">
          <div className="glass-card" style={{ padding: '40px' }}>
            <h2 className="gradient-text" style={{ marginBottom: '10px' }}>Send a Message</h2>
            <p className="bio-text" style={{ marginBottom: '30px' }}>
              Have a project in mind or want to discuss MERN development? Drop a line!
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="chat-input" 
                  value={formData.name}
                  style={{ padding: '15px' }} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="chat-input" 
                  value={formData.email}
                  style={{ padding: '15px' }} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <textarea 
                placeholder="How can I help you?" 
                className="chat-input" 
                value={formData.message}
                style={{ padding: '15px', minHeight: '180px', resize: 'none' }} 
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button type="submit" className="contact-btn" style={{ padding: '15px', fontSize: '1.1rem' }}>
                Send to MongoDB
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};