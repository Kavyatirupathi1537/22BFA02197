// src/App.jsx
import React, { useState } from 'react';
import ShortenForm from './components/ShortenForm';
import URLList from './components/URLList';
import URLAnalytics from './components/URLAnalytics';
import { LoggerProvider } from './context/LoggerContext';
import './styles.css';

const App = () => {
  const [urls, setUrls] = useState([]);

  const addShortenedURL = (entry) => {
    setUrls([...urls, entry]);
  };

  const handleClickShort = (short) => {
    setUrls(urls.map(url =>
      url.short === short ? { ...url, clicks: url.clicks + 1 } : url
    ));
  };

  return (
    <LoggerProvider>
      <div className="app">
        <h1>🔗 URL Shortener</h1>
        <ShortenForm onShorten={addShortenedURL} />
        <URLList urls={urls} onClickShort={handleClickShort} />
        <URLAnalytics urls={urls} />
      </div>
    </LoggerProvider>
  );
};

export default App;
