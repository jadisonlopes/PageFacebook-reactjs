import React, { Component } from 'react';

class PostItem extends Component {
  render() {
    const { author, date, comments } = this.props.post;
    return (
      <div className="postUser">
        <this.UserPost author={author} date={date} />
        <p className="userContent">{this.props.post.content}</p>
        <this.CommentsPost comments={comments} />
      </div>
    );
  }

  UserPost({ author, date }) {
    return (
      <div className="user">
        <img className="userImage" src={author.img} />
        <div className="userDetails">
          <span className="userName">{author.name}</span>
          <span className="userDate">{date}</span>
        </div>
      </div>
    );
  }

  CommentsPost({ comments }) {
    return (
      <div className="post-comments">
        <div className="divider" />
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="userImage" src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostItem;
