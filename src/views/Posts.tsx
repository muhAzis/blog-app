'use client';
import React, { use, useEffect, useRef, useState } from 'react';
import '@/styles/views/Posts.scss';
import PostCard from '@/components/PostCard';
import { Post } from '@/types/post.type';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(Math.floor(Math.random() * 180) + 1);
  const [loading, setLoading] = useState<boolean>(false);
  const [endOfPage, setEndOfPage] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=7`);
        const data = await response.json();

        if (data.length === 0) setEndOfPage(true);
        setPosts((prev) => [...prev, ...data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  useEffect(() => {
    const isInView = () => {
      if (loaderRef.current) {
        const rect = loaderRef.current.getBoundingClientRect();

        if (rect.top < window.innerHeight) {
          setLoading(true);
          setPage((prev) => prev + 1);
        }
      }
    };

    window.addEventListener('scroll', () => isInView());

    return () => window.removeEventListener('scroll', () => isInView());
  }, []);

  return (
    <main id="post">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
      {loading && <div className="loading-spinner" />}
      {!loading && !endOfPage && <div ref={loaderRef} className="loader" style={{ width: 100, height: 50 }} />}
    </main>
  );
};

export default Posts;
