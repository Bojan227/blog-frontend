const { useState } = require('react');

const useFetch = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    setIsLoading(true);
    const res = await fetch('https://blog-api-lys3.onrender.com/posts/');
    const json = await res.json();

    if (res.ok) {
      setPosts(json);
      setIsLoading(false);
    }

    if (!res.ok) {
      setError(json.error);
    }
  };
  return { fetchPosts, posts, isLoading, error };
};
export default useFetch;
