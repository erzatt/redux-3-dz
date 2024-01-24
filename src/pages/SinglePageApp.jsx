import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SinglePageApp = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { pageId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/posts/${pageId}`);
                setPost(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pageId]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    return (
        <div key={post.id}>
            <h2>Это пост {`${pageId}`}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Реакции: {post.reactions}</p>
        </div>
    );
};

export default SinglePageApp;
