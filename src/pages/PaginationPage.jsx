import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';

const PaginationPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!searchParams.get('page')) return;

        const skipPage = (searchParams.get('page') - 1) * 10;
        const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${skipPage}`);
        
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchPosts();
  }, [searchParams]);

  return (
    <>
      <div>
        <ol className='list'>
          {[1, 2, 3, 4, 5].map((pageId) => (
            <li key={pageId} onClick={() => setSearchParams({ page: pageId })}>
              {pageId}
            </li>
          ))}
        </ol>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.id} {post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PaginationPage;
