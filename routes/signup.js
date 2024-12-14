import { Router } from 'express';
const router = Router();

import {
  signup,
} from '../controllers/jobcontroller';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(signup).post(signup);
// router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default router;