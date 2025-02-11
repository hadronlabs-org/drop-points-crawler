import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export class S3Service {
  private s3: S3Client;
  private bucketName: string;
  private region: string;

  constructor(config: any) {
    this.s3 = new S3Client({
      region: config.aws.region!,
      credentials: {
        accessKeyId: config.aws.access_key_id!,
        secretAccessKey: config.aws.secret_access_key!,
      },
    });

    this.bucketName = config.aws.bucket_name!;
    this.region = config.aws.region!;
  }

  async uploadObject(fileBuffer: Buffer, address: string): Promise<string> {
    const fileName = `${address}.png`;

    await this.s3.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: fileName,
        Body: fileBuffer,
        ContentType: 'image/png',
      }),
    );

    return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${fileName}`;
  }
}
