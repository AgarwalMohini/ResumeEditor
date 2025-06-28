import React, { useState } from 'react';
import Section from './Section';

const ResumeEditor = () => {
  const [resume, setResume] = useState({
    name: 'Your Name',
    summary: 'Experienced developer...',
    experience: 'Worked at XYZ Corp...',
    education: 'B.Tech in Computer Science...',
    skills: 'Python, Java, React',
  });

  const updateSection = (key, value) => {
    setResume({ ...resume, [key]: value });
  };

  const enhanceSection = async (section) => {
    try {
      const res = await fetch('http://127.0.0.1:8000/ai-enhance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, content: resume[section] }),
      });
      const data = await res.json();
      updateSection(section, data.enhanced);
    } catch (error) {
      console.error('Error enhancing section:', error);
    }
  };

  const saveResume = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/save-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume }),
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };

  const downloadResume = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(resume, null, 2)], {
      type: 'application/json',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.json';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="resume-editor container">
      <h2>Resume Editor</h2>

      <label>
        Name:
        <input
          type="text"
          value={resume.name}
          onChange={(e) => updateSection('name', e.target.value)}
        />
      </label>

      {['summary', 'experience', 'education', 'skills'].map((section) => (
        <Section
          key={section}
          title={section}
          content={resume[section]}
          onChange={(val) => updateSection(section, val)}
          onEnhance={() => enhanceSection(section)}
        />
      ))}

      {/* Updated actions container with flex + gap */}
      <div className="actions">
        <button onClick={saveResume}>💾 Save Resume</button>
        <button onClick={downloadResume}>⬇️ Download JSON</button>
      </div>
    </div>
  );
};

export default ResumeEditor;
