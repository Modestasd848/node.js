import express from 'express';
import {
  addNewBlog,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  updateBlogById,
} from './controller.js';
const router = express.Router();

router.get('/blog', getAllBlogs);
router.post('/blog', addNewBlog);
router.get('/blog/:id', getBlogById);
router.delete('/blog/:id', deleteBlogById);
router.put('/blog/:id', updateBlogById);
export default router;
