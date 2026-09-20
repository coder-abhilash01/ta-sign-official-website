const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const b2Client = new S3Client({
  endpoint: process.env.B2_ENDPOINT,
  region: process.env.B2_REGION,
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY,
  },
});

// Upload file to Backblaze B2
const uploadToB2 = async (file, folder = "utilities") => {
  try {
    const fileKey = `${folder}/${Date.now()}-${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME,
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await b2Client.send(command);

    return {
      fileKey: fileKey,
      originalName: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
    };
  } catch (error) {
    console.error("B2 upload error:", error);
    throw error;
  }
};

// Delete file from Backblaze B2
const deleteFromB2 = async (fileKey) => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME,
      Key: fileKey,
    });
    await b2Client.send(command);
  } catch (error) {
    console.error("B2 delete error:", error);
    throw error;
  }
};

// Generate temporary download URL (valid for 1 hour)
const getB2DownloadUrl = async (fileKey) => {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.B2_BUCKET_NAME,
      Key: fileKey,
    });

    // Signed URL expires in 3600 seconds (1 hour)
    return await getSignedUrl(b2Client, command, { expiresIn: 3600 });
  } catch (error) {
    console.error("B2 signed URL error:", error);
    throw error;
  }
};

module.exports = {
  uploadToB2,
  deleteFromB2,
  getB2DownloadUrl,
};