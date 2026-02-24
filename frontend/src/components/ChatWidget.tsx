import { useState } from 'react';
import axios from 'axios';


const ChatWidget = () => {
  const [messages, setMessages] = useState([{ role: 'ai', text: "Hi! I'm Vish's AI. Ask me about my MERN projects or Thakur College!" }]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages([...messages, userMsg]);
    setInput('');

    try {
      
      const response = await axios.post('https://impact-routine-sprint-cigarettes.trycloudflare.com/chat', { message: input });
      setMessages((prev) => [...prev, { role: 'ai', text: response.data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'ai', text: "Error connecting to my brain. Is the backend running?" }]);
    }
  };

  return (
    <div className="glass-card chat-container">
      <h3>💬 Chat with my Resume</h3>
      <div className="chat-window">
      <div className="messages-area" style={{ height: '300px', overflowY: 'auto', marginBottom: '15px' }}>
        {messages.map((m, i) => (
          <div key={i} className={`msg-${m.role}`} style={{ textAlign: m.role === 'user' ? 'right' : 'left', margin: '10px 0' }}>
            <span className="glass-card" style={{ padding: '8px 15px', borderRadius: '15px' }}>{m.text}</span>
          </div>
        ))}
      </div>
      
      <div className="chat-input-container">
        <input 
          className="chat-input"
          placeholder="Type a message..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="chat-submit-btn" onClick={handleSendMessage}>Send</button>
      </div>
      </div>
    </div>
  );
};

export default ChatWidget; 