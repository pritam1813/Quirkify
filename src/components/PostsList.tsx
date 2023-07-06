import React from 'react';

interface post {
  id: string;
  body: string;
  blog: {
    name: string;
  };
  date: Date;
  note_count: number;
}

interface Props {
  posts: post[];
}

class PostsList extends React.Component<Props> {
  render() {
    const { posts } = this.props;

    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post.id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_5806.jpg"
                  alt="Post Image"
                />
                <span className="post-author">{post.blog.name}</span>
                <span className="post-time">{post.date.toString()}</span>
              </div>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/23/Facebook_Like_button.svg"
                    alt="Like button"
                  />
                  <span className="post-likes-length">{post.note_count}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1370/1370958.png"
                    alt="Comment-Icon"
                  />
                  <span>1</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start Typing A Comment" type="text" />
              </div>
              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">John Doe</span>
                    <span className="post-comment-time">Few moments ago</span>
                    <span className="post-comment-likes">2</span>
                  </div>
                  <div className="post-comment-content">Random Comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsList;
