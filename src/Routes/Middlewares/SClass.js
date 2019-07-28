import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  process.stdout.write('s-class->');
    res.send('List of all S-Class wizards');
  });

export default router;
