import React from 'react';
import '@/styles/components/CommentCard.scss';
import Link from 'next/link';
import { Comment } from '@/types/comment.type';
import ProfilePict from './ProfilePict';

const CommentCard = ({ id, post_id, name, email, body }: Comment) => {
  return (
    <div className="commentCard">
      <div className="col1">
        <div className="lines">
          <div className="line" />
          <div className="line2" />
        </div>
        <ProfilePict name={name} href={`/users/${id}`} />
      </div>
      <div className="col2">
        <Link href={`/users/${id}`} className="post-user">
          {name}
        </Link>
        <p className="post-body">{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
