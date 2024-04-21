'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/components/PostCard.scss';
import Link from 'next/link';
import CommentCard from './CommentCard';
import { Comment } from '@/types/comment.type';
import { Post } from '@/types/post.type';

const PostCard = ({ id, user_id, title, body }: Post) => {
  const [name, setName] = useState<string>('Unknown');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/${user_id}`);
        const response2 = await fetch(`https://gorest.co.in/public/v2/posts/${id}/comments`);
        const data = await response.json();
        const data2 = await response2.json();
        console.log({ data, data2 });
        data.message = 'Resource not found' ? '' : setName(data.name);
        setComments(data2);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user_id, id]);

  const generateWarmRGB = () => {
    const r = Math.floor(Math.random() * 150) + 40;
    const g = Math.floor(Math.random() * 150) + 40;
    const b = Math.floor(Math.random() * 150) + 40;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="post-card">
      <div className="content">
        <div className="col1">
          <Link href="" className="profile-pict" style={{ backgroundColor: generateWarmRGB() }}>
            {name.slice(0, 2)}
          </Link>
          <div className="line" />
        </div>
        <div className="col2">
          <Link href="" className="post-user">
            {name}
          </Link>
          <h4 className="post-title">{title}</h4>
          <p className="post-body">{body}</p>
        </div>
      </div>
      <Link href="" className="comments-count">
        {comments?.length} comments
      </Link>
      <div className="comments-container">
        {comments.map((comment, index) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
