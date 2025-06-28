import React from 'react';

const Section = ({ title, content, onChange, onEnhance }) => {
  return (
    <div className="section">
      <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        cols={50}
      />
      <button onClick={onEnhance}>✨ Enhance with AI</button>
    </div>
  );
};

export default Section; 
