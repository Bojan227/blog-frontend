import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogContainer } from './components/BlogContainer';
import { Footer } from './components/Footer';
import { PostDetails } from './components/PostDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<BlogContainer />} />
          <Route path="post-details/:postId" element={<PostDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
