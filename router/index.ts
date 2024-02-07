import express from 'express';
const router = express.Router();
import homeRoutes from './homeRoutes';
import apiRoutes from './api';

router.use('/', homeRoutes)
router.use('/api', apiRoutes);

export default router;
