// src/components/ShortenForm.jsx
import React, { useState } from 'react';
import { useLogger } from '../context/LoggerContext';

const ShortenForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const { log } = useLogger();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    const short = Math.random().toString(36).substring(2, 8);
    const entry = { original: url, short, clicks: 0 };

    onShorten(entry);
    log('INFO', 'URL shortened', entry);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="url"
        value={url}
        placeholder="Enter long URL"
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default ShortenForm;
