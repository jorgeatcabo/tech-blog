const router = require('express').Router();
const { Post } = require('../models/');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard-posts', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});


module.exports = router;
