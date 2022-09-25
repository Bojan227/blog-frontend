import { useState } from 'react';

export const CommentForm = ({ postId, setComments }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const addComment = async (e) => {
    e.preventDefault();
    const res = await fetch('https://blog-api-lys3.onrender.com/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: name, desc: comment, id: postId }),
    });
    const json = await res.json();

    if (res.ok) {
      setComments((prevComments) => [json, ...prevComments]);
      setError('');
      setName('');
      setComment('');
    } else {
      setError(json.error);
    }
  };

  return (
    <div style={{ backgroundColor: '#3f3f46' }}>
      <form onSubmit={addComment} className="form-comment">
        <h4>Enter your name</h4>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <input
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add comment..."
          value={comment}
        />
        {<h4 style={{ color: 'red' }}>{error}</h4>}
        <button>Add comment</button>
      </form>
    </div>
  );
};
