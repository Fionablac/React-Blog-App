import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog, updateBlog } from './feature/blog/BlogSlice';

const BlogForm = ({ existingBlog = null, onSave }) => {
  const isEditing = Boolean(existingBlog);
  const [title, setTitle] = useState(existingBlog?.title ?? '');
  const [content, setContent] = useState(existingBlog?.content ?? '');
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(existingBlog?.title ?? '');
    setContent(existingBlog?.content ?? '');
  }, [existingBlog]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      return;
    }

    if (isEditing) {
      dispatch(
        updateBlog({
          id: existingBlog.id,
          title: trimmedTitle,
          content: trimmedContent,
        })
      );
      onSave?.();
      return;
    }

    dispatch(addBlog(trimmedTitle, trimmedContent));
    setTitle('');
    setContent('');
  };

  return (
    <form className={`blog-form${isEditing ? ' is-editing' : ''}`} onSubmit={handleSubmit}>
      <div className="blog-form-heading">
        <h2>{isEditing ? 'Edit Post' : 'Write a New Post'}</h2>
        <p>{isEditing ? 'Update the selected post.' : 'Add a title and some content to publish a post.'}</p>
      </div>

      <label className="blog-label" htmlFor={isEditing ? `title-${existingBlog.id}` : 'new-blog-title'}>
        Title
      </label>
      <input
        id={isEditing ? `title-${existingBlog.id}` : 'new-blog-title'}
        className="blog-input"
        type="text"
        placeholder="Blog title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label
        className="blog-label"
        htmlFor={isEditing ? `content-${existingBlog.id}` : 'new-blog-content'}
      >
        Content
      </label>
      <textarea
        id={isEditing ? `content-${existingBlog.id}` : 'new-blog-content'}
        className="blog-textarea"
        placeholder="Blog content"
        rows="5"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <div className="blog-form-actions">
        <button className="blog-primary-btn" type="submit">
          {isEditing ? 'Update Blog' : 'Add Blog'}
        </button>
        {isEditing ? (
          <button className="blog-secondary-btn" onClick={onSave} type="button">
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default BlogForm;