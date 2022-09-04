const { useState } = require('react');

const useComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoading] = useState(true);
  const [errorComments, setError] = useState('');

  const getComments = async (postId) => {
    setIsLoading(true);
    const res = await fetch(`/posts/${postId}/comments`);
    const json = await res.json();

    if (res.ok) {
      setComments(json);
      setIsLoading(false);
    }

    if (!res.ok) {
      setError(json.error);
    }
  };
  return {
    getComments,
    comments,
    setComments,
    isLoadingComments,
    errorComments,
  };
};
export default useComments;
