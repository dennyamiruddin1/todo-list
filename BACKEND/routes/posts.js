const express = require('express');
const { json } = require('body-parser');
const router = express.Router();
const Post = require('../models/Post');


//GET ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
});

//SUBMIT A POST
router.post('/', async (req, res) => {

  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savePost = await post.save()
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
})

//GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
  try {
    const getPostId = await Post.findById(req.params.postId);
    res.json(getPostId)
  } catch (err) {
    res.json({ message: err })
  }
})

//DELETE SPECIFIC POST
router.delete('/:postId', async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId });
    res.json(deletePost)
  } catch (err) {
    json.res({ message: err })
  }
})

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } })
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;