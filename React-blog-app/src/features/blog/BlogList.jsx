import { useSelector } from 'react-redux';
import BlogItem from './BlogItem';

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <section className="blog-list-section">
      <div className="blog-list-header">
        <h2>Published Posts</h2>
        <span>{blogs.length} total</span>
      </div>

      {blogs.length === 0 ? (
        <div className="blog-empty-state">
          <p>No blog posts available.</p>
          <p>Use the form above to create your first entry.</p>
        </div>
      ) : (
        <div className="blog-list">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogList;
