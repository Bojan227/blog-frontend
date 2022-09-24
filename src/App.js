import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogContainer } from './components/BlogContainer';
import { Footer } from './components/Footer';
import { PostDetails } from './components/PostDetails';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main-container" id={theme}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<BlogContainer />} />
            <Route path="post-details/:postId" element={<PostDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
