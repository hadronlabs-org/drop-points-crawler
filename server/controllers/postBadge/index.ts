import { Logger } from 'pino';
import multer from 'multer';
import { Router } from 'express';
import { S3Service } from '../../aws';
import { Request, Response } from 'express';
import path from 'path';

const FILE_SIZE_LIMIT = 512 * 1024;

const router = Router();
const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: { fileSize: FILE_SIZE_LIMIT },
});

const uploadBadge = (s3: S3Service, logger: Logger) =>
  router.post(
    '/uploadBadge',
    upload.single('file'),
    async (req: Request, res: Response) => {
      logger.debug('Receiving request to upload badge %s', req.url);

      try {
        if (!req.file) {
          logger.error('File is required');
          return res.status(400).json({ error: 'File is required' });
        }

        logger.debug('Uploading image %s...', req.file.originalname);

        const fileUrl = await s3.uploadObject(
          req.file.buffer,
          path.parse(req.file.originalname).name,
        );

        return res.json({ url: fileUrl });
      } catch (error) {
        logger.error('Upload failed: %s', error);
        return res.status(500).json({ error: 'Upload failed' });
      }
    },
  );

export { uploadBadge };
