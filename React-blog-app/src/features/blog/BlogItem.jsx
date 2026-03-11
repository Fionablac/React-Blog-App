import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BlogForm from './BlogForm';
import { deleteBlog } from './BlogSlice';

const BlogItem = ({ blog }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
  };

  return (
    <article className="blog-item">
      {isEditing ? (
        <BlogForm existingBlog={blog} onSave={() => setIsEditing(false)} />
      ) : (
        <>
          <div className="blog-item-copy">
            <h3 className="blog-item-title">{blog.title}</h3>
            <p className="blog-item-content">{blog.content}</p>
          </div>
          <div className="blog-item-actions">
            <button className="blog-secondary-btn" onClick={() => setIsEditing(true)} type="button">
              Edit
            </button>
            <button className="blog-danger-btn" onClick={handleDelete} type="button">
              Delete
            </button>
          </div>
        </>
      )}
    </article>
  );
};

export default BlogItem;
