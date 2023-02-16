import Blog from './blogModel.js';

export async function getAllBlogs(req, res) {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addNewBlog(req, res) {
  try {
    const { title, content, author } = req.body;

    const blog = await Blog.create({
      title,
      content,
      author,
    });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getBlogById(req, res) {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(req.params.id);

    res.json(blog);
  } catch (error) {
    res.status.json({ error: error.message });
  }
}

export async function deleteBlogById(req, res) {
  try {
    const { id } = req.params;
    const resp = await Blog.findByIdAndDelete(id);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateBlogById(req, res) {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    const blog = await Blog.updateOne({ _id: id }, { title, content, author });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
