'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/components/PostCard.scss';
import Link from 'next/link';
import CommentCard from './CommentCard';
import { Comment } from '@/types/comment.type';
import { Post } from '@/types/post.type';
import ProfilePict from './ProfilePict';
import { User } from '@/types/user.type';

const PostCard = ({ id, user_id, title, body }: Post) => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: 'Unknown',
    email: 'Unknown',
    gender: 'male',
    status: 'inactive',
  });
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://gorest.co.in/public/v2/users/${user_id}`);
        const response2 = await fetch(`https://gorest.co.in/public/v2/posts/${id}/comments`);
        const data = await response.json();
        const data2 = await response2.json();

        if (data.name != undefined) setUser(data);
        setComments(data2);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user_id, id]);

  return (
    <div className="post-card">
      <div className="content">
        <div className="col1">
          <ProfilePict name={user.name} status={user.status} href={`/users/${id}`} />
          <div className="line" />
        </div>
        <div className="col2">
          <Link href={`/users/${id}`} className="post-user">
            {user.name}
          </Link>
          <h4 className="post-title">{title}</h4>
          <p className="post-body">{body}</p>
        </div>
      </div>
      <div className="comments-count">{comments?.length} comments</div>
      <div className="comments-container">
        {comments.map((comment, index) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
