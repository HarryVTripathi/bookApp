import express from 'express';

const router = express.Router();
router.route('/')
  .get((req, res) => {
    process.stdout.write('lameass->');
    res.send('List of all lame-ass wizards');
  })
  .post();

export default router;
