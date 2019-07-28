import express from 'express';
import SClass from './Middlewares/SClass';
import LameAss from './Middlewares/LameAss';
import Masters from './Middlewares/Masters';

export default () => {
  const router = express.Router();
  process.stdout.write('wizard->');
  router.use('/sclass', SClass);
  router.use('/lamesass', LameAss);
  router.use('/masters', Masters);

  return router;
}
