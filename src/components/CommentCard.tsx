import React from 'react';
import '@/styles/components/CommentCard.scss';
import Link from 'next/link';
import { Comment } from '@/types/comment.type';

const CommentCard = ({ id, post_id, name, email, body }: Comment) => {
  const generateWarmRGB = () => {
    const r = Math.floor(Math.random() * 150) + 40;
    const g = Math.floor(Math.random() * 150) + 40;
    const b = Math.floor(Math.random() * 150) + 40;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="commentCard">
      <div className="col1">
        <div className="line" />
        <Link href="" className="profile-pict" style={{ backgroundColor: generateWarmRGB() }}>
          {name.slice(0, 2)}
        </Link>
      </div>
      <div className="col2">
        <Link href="" className="post-user">
          {name}
        </Link>
        <p className="post-body">{body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
