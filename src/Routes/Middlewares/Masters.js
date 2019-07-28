import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  process.stdout.write('masters->');
    res.send('List of all guild masters');
  });

export default router;
