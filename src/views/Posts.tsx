'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/views/Posts.scss';
import PostCard from '@/components/PostCard';
import { Post } from '@/types/post.type';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://gorest.co.in/public/v2/posts?page=1&per_page=10');
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main id="post">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </main>
  );
};

export default Posts;
