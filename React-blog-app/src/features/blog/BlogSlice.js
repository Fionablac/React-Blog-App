import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    deleteBlog(state, action) {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    updateBlog(state, action) {
      const { id, title, content } = action.payload;
      const blogToUpdate = state.blogs.find((blog) => blog.id === id);

      if (blogToUpdate) {
        blogToUpdate.title = title;
        blogToUpdate.content = content;
      }
    },
  },
});

export const { addBlog, deleteBlog, updateBlog } = blogSlice.actions;

export default blogSlice.reducer;