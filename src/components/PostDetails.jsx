import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import useComments from '../hooks/useComments';
import { CommentForm } from './CommentForm';
import { CommentsContainer } from './CommentsContainer';
import LoadingSpinner from './LoadingSpinner';

export const PostDetails = () => {
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    getComments,
    comments,
    setComments,
    isLoadingComments,
  } = useComments();
  const { postId } = useParams();

  useEffect(() => {
    const getPostDetails = async () => {
      setIsLoading(true);
      const res = await fetch(`/posts/${postId}`);
      const json = await res.json();

      if (res.ok) {
        setTitle(json[0].title);
        setDescription(json[0].desc);
        setCreatedAt(json[0].createdAt);
        setUser(json[0].author.username);
        setUrl(json[0].img);
        setIsLoading(false);
      } else {
        setError(json.msg);
      }
    };

    getPostDetails();
    getComments(postId);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="post-details">
        <img src={url} alt="img" style={{ height: '400px' }} />
        <h1>{title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <h2>{user.charAt(0).toUpperCase() + user.slice(1).toLowerCase()}</h2>
          <h2>{createdAt.split('T')[0]}</h2>
          <h4>5 min Read</h4>
        </div>
        <div
          className="description"
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            padding: '20px',
          }}
        >
          {parse(description)}
        </div>
        {error}
      </div>
      <CommentForm postId={postId} setComments={setComments} />
      <CommentsContainer comments={comments} isLoading={isLoadingComments} />
    </div>
  );
};
