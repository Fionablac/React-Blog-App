// import React from 'react';
import BlogForm from '../features/blog/BlogForm';
import BlogList from '../features/blog/BlogList';
function App() {
  return (
    <main className="blog-app-shell">
      <section className="blog-app-card">
        <header className="blog-app-header">
          <p className="blog-app-kicker">Redux Toolkit CRUD</p>
          <h1 className="blog-app-title">Simple Blog App</h1>
          <p className="blog-app-description">
            Create, edit, and delete blog posts with a shared Redux store.
          </p>
        </header>

        <BlogForm />
        <BlogList />
  </section>
    </main>
  );
}

export default App;
